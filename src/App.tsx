import { useState } from 'react'
import { Search } from './components/Search'
import { SearchResults } from './components/SearchResults'
import binnanceConnect from './utils/binanceConnect'
import { Trades, DayInfo, Sorter } from './utils/types'
import { NavBar } from './components/NavBar'

const sorter: Sorter = {
	order: 'desc',
	lastPick: 'time',
}


function App() {
	const [trades, setTrades] = useState<Trades[] | null>(null)
	const [dayInfo, setDayInfo] = useState<DayInfo | null>(null)
	const [fetchingError, setFetchingError] = useState<string>('')

	const getPairInfo = async (pair: string) => {
		setFetchingError('')

		try {
			const tradesData = await binnanceConnect.getPairTrade(pair)
			
			const dayAvgData = await binnanceConnect.get24hr(pair)

			const tradesInReverse = [...tradesData.data].sort((a: Trades, b: Trades) => +b.time - +a.time)
			
			setTrades(tradesInReverse)
			setDayInfo(dayAvgData.data)
			
		} catch (error) {
			setFetchingError("Sorry we couldn't find a matching pair with those coins")
		}

	}

	const sortData = (sortBy: Sorter['lastPick']) => {
		const copy = [...(trades || [])]
		if (sortBy === sorter.lastPick) {
			if (sorter.order === 'asc') {
				sorter.order = 'desc'
			} else {
				sorter.order = 'asc'
			}
		}

		if (sortBy !== sorter.lastPick) {
			sorter.order = 'desc'
			sorter.lastPick = sortBy
		}
    
		const sort = {
			time: {
				asc() {
					copy.sort((a: Trades, b: Trades) => +a.time - +b.time)
				},
				desc() {
					copy.sort((a: Trades, b: Trades) => +b.time - +a.time)
				},
			},
			price: {
				asc() {
					copy.sort((a: Trades, b: Trades) => +a.price - +b.price)
				},
				desc() {
					copy.sort((a: Trades, b: Trades) => +b.price - +a.price)
				},
			},
			quantity: {
				asc() {
					copy.sort((a: Trades, b: Trades) => +a.qty - +b.qty)
				},
				desc() {
					copy.sort((a: Trades, b: Trades) => +b.qty - +a.qty)
				},
			},
		}
		sort[sorter.lastPick][sorter.order]()

		setTrades(copy)
	}

	return (
		<div className='App'>
			<NavBar />
			<Search getPairInfo={getPairInfo} fetchingError={fetchingError} />
			<SearchResults trades={trades} dayInfo={dayInfo} sortData={sortData} sorter={sorter} />
		</div>
	)
}

export default App
