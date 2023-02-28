import { Search } from './components/Search'
import { SearchResults } from './components/SearchResults'
import useGetData from './hooks/useGetData'
import { Info } from './components/Info'


function App(): JSX.Element {
	const { trades, dayInfo, fetchingError, getPairData	} = useGetData()

	return (
		<div className='App'>
			<Info />
			<Search getPairData={getPairData} fetchingError={fetchingError} />
			<SearchResults trades={trades} dayInfo={dayInfo} />
		</div>
	)
}

export default App
