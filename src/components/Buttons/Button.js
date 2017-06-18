import styled from 'styled-components';

const Button = styled.button `
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.active? props.theme.palette.primary1 : props.theme.palette.accent1};
  font-family: ${props => props.theme.fonts.display};
  font-size: 1rem;

  &:hover {
    color: ${props => props.theme.palette.text};
  }
`;

export default Button;
