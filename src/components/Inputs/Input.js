// @flow

import styled from 'styled-components';

const Input = styled.input`
  font-family: ${props => props.theme.fonts.copy};
  font-size: 1rem;
  padding: .4em;
  border: none;
  border-radius: 0;
  text-align: ${props => (props.centered ? 'center' : 'left')}
`;

export default Input;
