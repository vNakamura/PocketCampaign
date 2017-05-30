import styled from 'styled-components';

export const Scrollable = styled.div `
  flex: 1;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`;

export const Avatar = styled.img `
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const Button = styled.button `
  background: none;
  border: none;
  cursor: pointer;
`;

export default {
  Scrollable,
  Button
};
