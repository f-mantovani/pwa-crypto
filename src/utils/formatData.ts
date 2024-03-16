import { DataRow, ResultProps } from './interfaces'
import dayjs from 'dayjs'

export function convertData(tradeArray: ResultProps['trades']): DataRow[] {
	if (tradeArray == null) return []
	return tradeArray.map(trade => {
		const newTime = dayjs(trade.time).format('HH:mm:ss')
		return { 
			price: trade.price, 
			quantity: trade.qty.slice(0, 6), 
			time: newTime 
		}
	})
}
