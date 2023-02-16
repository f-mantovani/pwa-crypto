import { Trades, DayInfo, Sorter } from '../utils/types'
import { SmallText, LargeText, MediumText } from '../styles/text.style'
import { RowCentered, ColumnCentered, Spacer } from '../styles/containers.style'
import DataTable from 'react-data-table-component'

type ResultProps = {
	trades: Trades[]
	dayInfo: DayInfo
	sortData: (sortBy: Sorter['lastPick']) => void
	sorter: Sorter
}

interface DataRow {
	price: string
	quantity: string
	time: string
} 

const columns = [
	{
		name: 'PRICE',
		selector: (row: DataRow) => row.price,
		sortable: true,
	},
	{
		name: 'QUANTITY',
		selector: (row: DataRow) => row.quantity,
		sortable: true,
	},
	{
		name: 'TIME',
		selector: (row: DataRow) => row.time,
		sortable: true,
	},
]

export const SearchResults = ({ trades, dayInfo, sortData, sorter }: ResultProps) => {
	const convertData = trades?.map(trade => {
		const date = new Date(trade.time)
		const newTime = `${date.getHours().toString().padStart(2, '0')}:
										 ${date.getMinutes().toString().padStart(2, '0')}:
										 ${date.getSeconds().toString().padStart(2, '0')}`

		const newObj = { price: trade.price, quantity: trade.qty , time: newTime }
		return newObj
	})

	return (
		<div>
			{dayInfo && (
				<RowCentered gap={2} mb={2}>
					<ColumnCentered>
						<SmallText left> Ticker: </SmallText>
						<LargeText> {dayInfo?.symbol} </LargeText>
					</ColumnCentered>
					<ColumnCentered>
						<SmallText left> 24h%: </SmallText>
						<MediumText change={dayInfo.priceChangePercent}>
							{dayInfo?.priceChangePercent + '%'}
						</MediumText>
					</ColumnCentered>
				</RowCentered>
			)}

			<Spacer>
				{trades && (
					<DataTable columns={columns} data={convertData} theme='dark' striped dense fixedHeader />
				)}
			</Spacer>

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
