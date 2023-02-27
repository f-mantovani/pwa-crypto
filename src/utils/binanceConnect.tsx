import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { Trades, DayInfo } from './interfaces'

class BinnaceConnect {
	api: AxiosInstance

	constructor() {
		this.api = axios.create({
			baseURL: 'https://api.binance.com',
		})

	}

	get24hr(pair: string): Promise<AxiosResponse<DayInfo>> {
		return this.api.get(`/api/v3/ticker/24hr?symbol=${pair}`)
	}

	 getPairTrade(pair: string): Promise<AxiosResponse<Trades[]>> {
		return this.api.get(`/api/v3/trades?symbol=${pair}`)
	}
}

export default new BinnaceConnect()
