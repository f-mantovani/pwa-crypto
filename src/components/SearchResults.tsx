import { Trades, DayInfo, Sorter } from '../utils/types'

type Props = {
	trades: Trades[]
	dayInfo: DayInfo
  sortData: (type: string) => void
}
export const SearchResults = ({ trades, dayInfo, sortData }: Props) => {

	return (
		<div>
			{dayInfo && (
				<>
					<span> Ticker: </span>
					<span> {dayInfo?.symbol} </span>
					<span> 24h Change: </span>
					<span> {dayInfo?.priceChangePercent + '%'} </span>
				</>
			)}

			{trades && (
				<>
					<table>
						<thead>
							<tr>
								<th onClick={() => sortData("price")}>Price</th>
								<th onClick={() => sortData("quantity")}>Quantity</th>
								<th onClick={() => sortData("time")}>Time</th>
							</tr>
						</thead>
						<tbody>
							{trades.map(trade => {
								const date = new Date(trade.time)
								return (
									<tr key={trade.id}>
										<td> {trade.price} </td>
										<td> {trade.qty} </td>
										<td>
											{date.getHours().toString().padStart(2, '0')}:
											{date.getMinutes().toString().padStart(2, '0')}:
											{date.getSeconds().toString().padStart(2, '0')}
										</td>
									</tr>
								)
							})}
						</tbody>
					</table>
				</>
			)}
		</div>
	)
}
