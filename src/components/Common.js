import styled from 'styled-components';

export const Scrollable = styled.div `
  flex: 1;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Avatar = styled.img `
  width: 10vmin;
  max-width: 50px;
  height: 10vmin;
  max-height: 50px;
  border-radius: 50%;
  margin: .4rem;
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
