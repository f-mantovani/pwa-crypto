import styled from 'styled-components'
interface SmallProps {
	bold?: boolean
	left?: boolean
}
interface MediumProps {
	change?: string
}

interface ErrorProps {
	pairNotFound?: boolean
}

export const ExtraSmall = styled.p`
	font-style: normal;
	font-size: var(--fs-xsmall);
	line-height: 1.4;
`

export const SmallText = styled.p<SmallProps>`
	font-style: normal;
	font-size: var(--fs-small);

	${({ bold }) =>bold && `
    font-weight: var(--fw-bold);
  `}

	${({ left }) =>left && `
    align-self: flex-start; 
  `}
`

export const LargeText = styled.p`
	font-style: normal;
	font-size: var(--fs-large);
`

export const MediumText = styled.p<MediumProps>`
	font-style: normal;
	font-size: var(--fs-medium);

	color: ${({ change }) => (change ? (+change > 0 ? 'green' : 'red') : null)};
`

export const ErrorText = styled.p<ErrorProps>`
	color: var(--font-destructive);
	max-width: 150px;
	position: absolute;

	${({ pairNotFound }) =>
		pairNotFound &&
		`
		position: relative;
		max-width: 270px;
		margin-left: 1rem;
		margin-bottom: -1.5rem;
	`}
`
