import { useState } from 'react'

export const Search = ({ getPairInfo }) => {
	const [first, setFirst] = useState('')
	const [against, setAgainst] = useState('')

	const handleSubmit = e => {
		e.preventDefault()

    const pair = first.toUpperCase() + against.toUpperCase()

		getPairInfo(pair)
	}

	return (
		<form
			onSubmit={handleSubmit}
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
				alignItems: 'center',
				marginTop: '2rem',
			}}
		>
			<label>
				Ticker:
				<input type='text' onChange={e => setFirst(e.target.value)} />
			</label>
			<label>
				Against:
				<input type='text' onChange={e => setAgainst(e.target.value)} />
			</label>

			<button> Search </button>
		</form>
	)
}
