import { useState } from 'react'
import { Search } from "./components/Search"
import { SearchResults } from "./components/SearchResults"
import binnanceConnect from '../utils/binanceConnect.tsx'

function App() {

  const [trades, setTrades] = useState(null)
  const [dayAvg, setDayAvg] = useState(null)

  const getPairInfo = async (pair: string) => {
    const tradesData = await binnanceConnect.getPairTrade(pair)

    const dayAvgData = await binnanceConnect.get24hr(pair)

    setTrades(tradesData.data)
    setDayAvg(dayAvgData.data)
  }
  

	return (
		<div className='App'>
			<Search getPairInfo={getPairInfo} />
      <SearchResults trades={trades} dayAvg={dayAvg} />
		</div>
	)
}

export default App
