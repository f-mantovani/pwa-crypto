import axios, { Axios, AxiosInstance, AxiosResponse } from 'axios'
import { Trades, DayInfo } from './types'
class BinnaceConnect {
	api: AxiosInstance

	constructor() {
		this.api = axios.create({
			baseURL: 'https://api.binance.com',
		})

	}

	get24hr(pair: string) {
		return this.api.get<DayInfo>(`/api/v3/ticker/24hr?symbol=${pair}`)
	}

	 getPairTrade(pair: string) {
		return this.api.get<AxiosResponse<Trades[]>>(`/api/v3/trades?symbol=${pair}`)
	}
}

export default new BinnaceConnect()
