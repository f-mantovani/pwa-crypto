export interface Trades {
	id: number
	isBestMatch: boolean
	isBuyerMaker: boolean
	price: string
	qty: string
	quoteQty: string
	time: number | string
}
export interface DayInfo {
	askPrice: string
	askQty: string
	bidPrice: string
	bidQty: string
	closeTime: number
	count: number
	firstId: number
	highPrice: string
	lastId: number
	lastPrice: string
	lastQty: string
	lowPrice: string
	openPrice: string
	openTime: number
	prevClosePrice: string
	priceChange: string
	priceChangePercent: string
	quoteVolume: string
	symbol: string
	volume: string
	weightedAvgPrice: string
}
export interface Sorter  {
	order: 'asc' | 'desc'
	lastPick: 'time' | 'price' | 'quantity'
}
export interface ResultProps {
	trades: Trades[] | null
	dayInfo: DayInfo | null

}
export interface DataRow {
	price: string
	quantity: string
	time: string
}
export interface SearchProps {
	fetchingError: string
	getPairData: (pair: string) => Promise<void>
}
export interface GetData extends SearchProps {
	trades: Trades[] | null
	dayInfo: DayInfo | null
	sortData: (sortBy: Sorter['lastPick'], sorter: Sorter) => void
}
export interface FormData {
	coin: string
	against: string
}
