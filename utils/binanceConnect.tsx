import axios from 'axios'

class BinnaceConnect {
	constructor() {
		this.api = axios.create({
			baseURL: 'https://api.binance.com',
		})
	}

	get24hr(pair: string) {
		return this.api.get(`/api/v3/ticker/24hr?symbol=${pair}`)
	}

	getPairTrade(pair: string) {
		return this.api.get(`/api/v3/trades?symbol=${pair}`)
	}
}

export default new BinnaceConnect()
