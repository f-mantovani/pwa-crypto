import styled from 'styled-components'


export const Input = styled.input`
  margin-left: .5rem;
  background-color: transparent;
  color: var(--font-color);
  border: none;
  border-bottom: 1px solid var(--font-color);
  max-width: 50px;
  text-align: center;
`

export const Button = styled.button`
  font-family: inherit;
  background-color: var(--darker-bg);
  color: var(--font-color);
  padding: .25rem .5rem;
  border-radius: 8px; 
  border: 1px solid var(--font-color);
  align-self: center;
  margin-left:.5rem;
`

export const Loader = styled.div`
  align-self: center;
  margin-left: 1.75rem;
`