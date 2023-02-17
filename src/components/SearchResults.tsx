import { Trades, DayInfo, Sorter } from '../utils/types'
import { SmallText, LargeText, MediumText } from '../styles/text.style'
import { RowCentered, ColumnCentered, Spacer } from '../styles/containers.style'
import DataTable from 'react-data-table-component'

interface ResultProps {
	trades: Trades[] | null
	dayInfo: DayInfo | null
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

function convertData(tradeArray: ResultProps['trades']){
	if (tradeArray == null) return []
	return tradeArray.map(trade => {
		const date = new Date(trade.time)
		const newTime = `${date.getHours().toString().padStart(2, '0')}:
										 ${date.getMinutes().toString().padStart(2, '0')}:
										 ${date.getSeconds().toString().padStart(2, '0')}`

		const newObj = { price: trade.price, quantity: trade.qty.slice(0, 6), time: newTime }
		return newObj
	})
}

export const SearchResults = ({ trades, dayInfo, sortData, sorter }: ResultProps) => {
	const tradesConverted = convertData(trades)

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
					<DataTable
						columns={columns}
						data={tradesConverted}
						theme='dark'
						striped
						dense
						fixedHeader
					/>
				)}
			</Spacer>

			{/* 
				That piece of code is actually obsolete because of the component DataTable, 
				just left it here to showcase as it has the same sorting functionality, but in a real
				life scenario would have been removed
			*/}

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
