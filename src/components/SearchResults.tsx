export const SearchResults = ({ trades, dayAvg }) => {
	return (
		<div>
			{dayAvg && (
				<>
					<span> Ticker: </span>
					<span> {dayAvg?.symbol} </span>
					<span> 24h Change: </span>
					<span> {dayAvg?.priceChangePercent + '%'} </span>
				</>
			)}

			{trades && (
				<>
					<table>
						<tr>
							<th>Price</th>
							<th>Quantity</th>
							<th>Time</th>
						</tr>
						{trades.map(trade => {
							const date = new Date(trade.time)
							return (
								<tr>
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
					</table>
				</>
			)}
		</div>
	)
}
