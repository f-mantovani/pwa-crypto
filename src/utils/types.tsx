export interface Trades {
	id: number
	isBestMatch: boolean
	isBuyerMaker: boolean
	price: string
	qty: string
	quoteQty: string
	time: number
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

export type Sorter = {
	order: 'asc' | 'desc'
	lastPick: 'time' | 'price' | 'quantity'
}