import { useState } from 'react'
import { DayInfo, Trades, GetData } from '../utils/interfaces'
import binanceConnect from '../utils/binanceConnect'

const useGetData = (): GetData => {
	const [trades, setTrades] = useState<Trades[] | null>(null)
	const [dayInfo, setDayInfo] = useState<DayInfo | null>(null)
	const [fetchingError, setFetchingError] = useState<string>('')

	const getPairData = async (pair: string): Promise<void> => {
		setFetchingError('')

		const apiCalls = [binanceConnect.getPairTrade(pair), binanceConnect.get24hr(pair)]
		const [trades, dayInfo] = await Promise.allSettled(apiCalls)
	
		if (trades.status === 'rejected' || dayInfo.status === 'rejected') {
			setFetchingError("Sorry but we couldn't fetch data for this pair. Please try again later.")
			return
		}

		if (trades.status === 'fulfilled') {
			setTrades(trades.value.data as Trades[])
		}

		if (dayInfo.status === 'fulfilled') {
			setDayInfo(dayInfo.value.data as DayInfo)
		}
		
	}


	return { trades, dayInfo, fetchingError, getPairData }
}

export default useGetData
