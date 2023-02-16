import styled from 'styled-components'

interface ButtonProps {
  children: string | unknown
}

export const Input = styled.input`
  margin-left: 1rem;
  background-color: transparent;
  color: var(--font-color);
  border: none;
  border-bottom: 1px solid var(--font-color);
  max-width: 35px;
  text-align: center;
`

export const Button = styled.button<ButtonProps>`
  font-family: inherit;
  background-color: var(--darker-bg);
  color: var(--font-color);
  padding: .5rem .75rem;
  border-radius: 8px; 
  border: ${({children}) => children === 'Search' ? '1px solid var(--font-color)' : 'none'} ;
  margin-left: 4rem;
  margin-bottom: 1rem;
`