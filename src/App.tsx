import { Search } from './components/Search'
import { SearchResults } from './components/SearchResults'
import { Sorter } from './utils/interfaces'
import useGetData from './hooks/useGetData'
import { Info } from './components/Info'

const sorter: Sorter = {
	order: 'desc',
	lastPick: 'time',
}

function App(): JSX.Element {
	const { trades, dayInfo, fetchingError, getPairData, sortData	} = useGetData()

	return (
		<div className='App'>
			<Info />
			<Search getPairData={getPairData} fetchingError={fetchingError} />
			<SearchResults trades={trades} dayInfo={dayInfo} />
		</div>
	)
}

export default App
