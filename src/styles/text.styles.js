import styled from "styled-components";

export const SmallText = styled.p`
  font-style: normal;
  font-size: var(--fs-small);

  ${(props) => props.bold && `
    font-weight: var(--fw-bold);
  `}

  ${(props) => props.left && `
    align-self: flex-start; 
  `}

`

export const LargeText = styled.p`
  font-style: normal;
  font-size: var(--fs-large);
`

export const MediumText = styled.p`
  font-style: normal;
  font-size: var(--fs-medium);
`