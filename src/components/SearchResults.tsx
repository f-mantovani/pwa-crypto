import { Trades, DayInfo, Sorter } from '../utils/types'
import { SmallText, LargeText, MediumText } from '../styles/text.styles.js'
import { RowCentered, ColumnCentered } from '../styles/containers.js'
import DataTable from 'react-data-table-component'

type ResultProps = {
	trades: Trades[]
	dayInfo: DayInfo
	sortData: (sortBy: Sorter['lastPick']) => void
	sorter: Sorter
}

const columns = [
	{
		name: 'Price',
		selector: row => row.price,
		sortable: true,
	},
	{
		name: 'Quantity',
		selector: row => row.qty,
		sortable: true,
	},
	{
		name: 'Time',
		selector: row => row.time,
		sortable: true,
	},
]

export const SearchResults = ({ trades, dayInfo, sortData, sorter }: ResultProps) => {
	const convertTime = trades?.map(trade => {
		const date = new Date(trade.time)
		const newTime = `${date.getHours().toString().padStart(2, '0')}:
										 ${date.getMinutes().toString().padStart(2, '0')}:
										 ${date.getSeconds().toString().padStart(2, '0')}`

		return { ...trade, time: newTime }
	})

	return (
		<div>
			{dayInfo && (
				<RowCentered gap={2}>
					<ColumnCentered>
						<SmallText left> Ticker: </SmallText>
						<LargeText> {dayInfo?.symbol} </LargeText>
					</ColumnCentered>
					<ColumnCentered>
						<SmallText left> 24h%: </SmallText>
						<MediumText> {dayInfo?.priceChangePercent + '%'} </MediumText>
					</ColumnCentered>
				</RowCentered>
			)}

			{trades && <DataTable columns={columns} data={convertTime} theme='dark' />}

			{/* {trades && (
				<>
					<table>
						<thead>
							<RowCentered gap={4}>
								<th onClick={() => sortData('price')}>
									<SmallText bold>Price</SmallText>
								</th>
								<th onClick={() => sortData('quantity')}>
									<SmallText bold>Quantity</SmallText>
								</th>
								<th onClick={() => sortData('time')}>
									<SmallText bold> Time</SmallText>
								</th>
							</RowCentered>
						</thead>
						<tbody>
							{trades.map(trade => {
								const date = new Date(trade.time)
								return (
									<RowCentered gap={4} key={trade.id}>
										<td>{trade.price}</td>
										<td> {trade.qty} </td>
										<td>
											{date.getHours().toString().padStart(2, '0')}:
											{date.getMinutes().toString().padStart(2, '0')}:
											{date.getSeconds().toString().padStart(2, '0')}
										</td>
									</RowCentered>
								)
							})}
						</tbody>
					</table>
				</>
			)} */}
		</div>
	)
}
