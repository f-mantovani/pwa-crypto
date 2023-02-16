import { useState } from 'react'
import { Search } from './components/Search'
import { SearchResults } from './components/SearchResults'
import binnanceConnect from './utils/binanceConnect'
import { Trades, DayInfo, Sorter } from './utils/types'

const sorter: Sorter = {
	order: 'desc',
	lastPick: 'time',
}

function App() {
	const [trades, setTrades] = useState<Trades[] | null>(null)
	const [dayInfo, setDayInfo] = useState<DayInfo | null>(null)

	const getPairInfo = async (pair: string) => {
		const tradesData = await binnanceConnect.getPairTrade(pair)

		const dayAvgData = await binnanceConnect.get24hr(pair)

		const tradesInReverse = [...tradesData.data].sort((a: Trades, b: Trades) => +b.time - +a.time)

		setTrades(tradesInReverse)
		setDayInfo(dayAvgData.data)
	}

	const sortData = (type: Sorter['lastPick']) => {
		const copy = [...(trades || [])]
		if (type === sorter.lastPick) {
			if (sorter.order === 'asc') {
				sorter.order = 'desc'
			} else {
				sorter.order = 'asc'
			}
		}

		if (type !== sorter.lastPick) {
			sorter.order = 'desc'
			sorter.lastPick = type
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
			<Search getPairInfo={getPairInfo} />
			<SearchResults trades={trades} dayInfo={dayInfo} sortData={sortData} />
		</div>
	)
}

export default App
