import { useState } from 'react'
import {ColumnCentered} from '../styles/containers.js'

type SearchProps = {
  getPairInfo: (pair: string) => void;
}

export const Search = ({ getPairInfo }: SearchProps) => {
	const [first, setFirst] = useState<string>('')
	const [against, setAgainst] = useState<string>('')

	const handleSubmit = e => {
		e.preventDefault()

    const pair = first.toUpperCase() + against.toUpperCase()

		getPairInfo(pair)
	}

	return (
		<form
			onSubmit={handleSubmit}
		
		>
			<ColumnCentered gap={1} mt={2}>
			<label>
				Ticker:
				<input type='text' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFirst(e.target.value)} />
			</label>
			<label>
				Against:
				<input type='text' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAgainst(e.target.value)} />
			</label>

			<button> Search </button>
			</ColumnCentered>
		</form>
	)
}
