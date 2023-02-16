import { useState } from 'react'
import { Search } from './components/Search'
import { SearchResults } from './components/SearchResults'
import binnanceConnect from './utils/binanceConnect'
import { Trades, DayInfo, Sorter } from './utils/types'

function App() {
	const [trades, setTrades] = useState<Trades[] | null>(null)
	const [dayInfo, setDayInfo] = useState<DayInfo | null>(null)
	const [sorter, setSorter] = useState<Sorter>({
		order: 'desc',
		lastPick: 'time',
	})

	const getPairInfo = async (pair: string) => {
		const tradesData = await binnanceConnect.getPairTrade(pair)

		const dayAvgData = await binnanceConnect.get24hr(pair)

		const tradesInReverse = [...tradesData.data].sort((a: Trades, b: Trades) => +b.time - +a.time)

		setTrades(tradesInReverse)
		setDayInfo(dayAvgData.data)
	}

	const sortData = (type: Sorter['lastPick']) => {
		setTrades(prevTrades => {
			const copy = [...(prevTrades || [])]

			if (type === sorter.lastPick) {
				setSorter(prevSorter => {
					const newSorter = { ...prevSorter }
					if (newSorter.order === 'asc') {
						newSorter.order = 'desc'
					} else {
            newSorter.order = 'asc'
          }

          return newSorter
				})
			}

      if (type !== sorter.lastPick) {
				setSorter({ order: 'desc', lastPick: type })
			}

      const sort = {
        time:{ 
          asc(){
            copy.sort((a: Trades, b: Trades) => +a.time - +b.time)
          },
          desc() {
            copy.sort((a: Trades, b: Trades) => +b.time - +a.time)
          }
         },
        price: {
          asc() {
            copy.sort((a: Trades, b: Trades) => +a.price - +b.price)   
          },
          desc() {
            copy.sort((a: Trades, b: Trades) => +b.price - +a.price)   
          }
        },
        quantity: {
          asc() {
            copy.sort((a: Trades, b: Trades) => +a.qty - +b.qty)   
          },
          desc() {
            copy.sort((a: Trades, b: Trades) => +b.qty - +a.qty)   
          }

         }
      }
      
      sort[sorter.lastPick][sorter.order]()
      
			return copy
		})
	}

	return (
		<div className='App'>
			<Search getPairInfo={getPairInfo} />
			<SearchResults trades={trades} dayInfo={dayInfo} sortData={sortData} />
		</div>
	)
}

export default App
