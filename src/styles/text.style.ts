import styled from 'styled-components'
interface SmallProps {
	bold?: boolean
	left?: boolean
}
interface MediumProps {
	change: string
}

export const SmallText = styled.p<SmallProps>`
	font-style: normal;
	font-size: var(--fs-small);

	${props =>
		props.bold &&
		`
    font-weight: var(--fw-bold);
  `}

	${props =>
		props.left &&
		`
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

	color: ${({ change }) => (+change > 0 ? 'green' : 'red')};
`

export const ErrorText = styled.p`
	color: var(--font-destructive);
	max-width: 80%;
`
