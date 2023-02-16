import styled from 'styled-components'

export const RowCentered = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
  gap: ${({gap}) => `${gap}rem`};
	margin-bottom: ${({mb}) => `${mb}rem`};
`

export const ColumnCentered = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
  gap: ${({gap}) => `${gap}rem`};
  margin-top: ${({mt}) => `${mt}rem`};
 
`
export const Spacer = styled.div`
 margin: 1rem;
`