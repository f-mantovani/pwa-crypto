import DataTable from 'react-data-table-component'

import { columns } from '../utils/dataTable'
import { ResultProps } from '../utils/interfaces'
import { convertData } from '../utils/formatData'

import { SmallText, LargeText, MediumText } from '../styles/text.style'
import { Spacer, FlexContainer } from '../styles/containers.style'

export const SearchResults = ({ trades, dayInfo }: ResultProps): JSX.Element => {
	const tradesConverted = convertData(trades)

	return (
		<div>
			{dayInfo && (
				<FlexContainer row gap={2} mb={2} mt={2}>
					<FlexContainer column>
						<SmallText left> Ticker: </SmallText>
						<LargeText> {dayInfo?.symbol} </LargeText>
					</FlexContainer>
					<FlexContainer column>
						<SmallText left> 24h%: </SmallText>
						<MediumText change={dayInfo.priceChangePercent}>
							{dayInfo?.priceChangePercent + '%'}
						</MediumText>
					</FlexContainer>
				</FlexContainer>
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
						defaultSortFieldId={'time'}
						defaultSortAsc={false}
					/>
				)}
			</Spacer>
		</div>
	)
}
