import { useState } from 'react'
import { HashLoader } from 'react-spinners'
import { useForm } from 'react-hook-form'

import { FormData, SearchProps } from '../utils/types'

import { FlexContainer } from '../styles/containers.style'
import { ErrorText } from '../styles/text.style'
import { Input, Button, Loader } from '../styles/form.style'


export const Search = ({ getPairData, fetchingError }: SearchProps): JSX.Element => {
	const [isLoading, setIsLoading] = useState<boolean>(false)

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	async function onSubmit({ coin, against }: Partial<FormData>): Promise<void> {

		if (!coin || !against) return

		setIsLoading(true)

		const pair = coin.toUpperCase() + against.toUpperCase()

		await getPairData(pair)
		setIsLoading(false)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<FlexContainer row form>
				<FlexContainer column>
					<label>
						Coin:
						<Input {...register('coin', { required: true })} placeholder='ETH' />
						{errors.coin && <ErrorText> Select a coin </ErrorText>}
					</label>
				</FlexContainer>
				<FlexContainer column>
					<label>
						Against:
						<Input {...register('against', { required: true })} placeholder='BTC' />
						{errors.against && <ErrorText> Select a pair to compare </ErrorText>}
					</label>
				</FlexContainer>

				{isLoading ? (
					<Loader>
						<HashLoader color='#e9dfdf' size={16} />
					</Loader>
				) : (
					<Button type='submit'> Submit </Button>
				)}
			</FlexContainer>
			{!errors.coin && !errors.against && fetchingError && (
				<ErrorText pairNotFound> {fetchingError} </ErrorText>
			)}
		</form>
	)
}
