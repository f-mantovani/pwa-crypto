import { useState } from 'react'
import { ColumnCentered, RowCentered } from '../styles/containers.style'
import { ErrorText } from '../styles/text.style'
import { Input, Button } from '../styles/form.style'
import { HashLoader } from 'react-spinners'

interface SearchProps {
	getPairInfo: (pair: string) => void
	fetchingError: string
}

export const Search = ({ getPairInfo, fetchingError }: SearchProps) => {
	const [first, setFirst] = useState<string>('')
	const [against, setAgainst] = useState<string>('')
	const [error, setError] = useState<string>('')
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsLoading(true)
		setError('')

		if (!first || !against) {
			setError('You must choose a pair of coins')
			setIsLoading(false)
			return
		}

		const pair = first.toUpperCase() + against.toUpperCase()

		await getPairInfo(pair)
		setIsLoading(false)
	}

	return (
		<form onSubmit={handleSubmit}>
			<RowCentered gap={1}>
				<label>
					Coin:
					<Input
						type='text'
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirst(e.target.value)}
						placeholder='ETH'
					/>
				</label>

				<label>
					Against:
					<Input
						type='text'
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAgainst(e.target.value)}
						placeholder='BTC'
					/>
				</label>

				{error && <ErrorText> {error} </ErrorText>}
				{fetchingError && !error && <ErrorText> {fetchingError} </ErrorText>}

				{isLoading ? <HashLoader color='#e9dfdf' size={16} /> : <Button> Search </Button>}
				
			</RowCentered>
		</form>
	)
}
