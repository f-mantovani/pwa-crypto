import styled from 'styled-components'

interface CenterProps {
	gap?: number
	mt?: number
	mb?: number
	row?: boolean
	column?: boolean
	form?: boolean

}

export const FlexContainer = styled.div<CenterProps>`
	display: flex;
	margin: .75rem 0 .75rem .5rem;

	${({ row }) => row && `
		align-items: flex-start;
		justify-content: flex-start;
	`}

	${({ column }) => column && `
		flex-direction: column;
		align-items: center;
		justify-content: center;
	`}
	
	gap: ${({ gap }) => `${gap}rem`};
	margin-bottom: ${({ mb }) => `${mb}rem`};
	margin-top: ${({ mt }) => `${mt}rem`};
`

export const Spacer = styled.div`
	margin: 1rem;
`
