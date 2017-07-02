// @flow

import styled from 'styled-components';

const Input = styled.input `
  font-family: ${props => props.theme.fonts.copy};
  font-size: 1rem;
  padding: .4em;
  border-radius: .4rem;
`;

export default Input;
