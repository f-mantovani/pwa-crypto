import { useState } from 'react'
import { DayInfo, Trades, Sorter, IGetData } from '../utils/types'
import binanceConnect from '../utils/binanceConnect'

const useGetData = (): IGetData => {
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

	// This function is also obsolete because I'm using the DataTable component that can be used to sort data
	// just left here to showcase if needed, in a real environment would have removed
	const sortData = (sortBy: Sorter['lastPick'], sorter: Sorter): void => {
		const copy = [...trades!]
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

	return { trades, dayInfo, fetchingError, getPairData, sortData }
}

export default useGetData
