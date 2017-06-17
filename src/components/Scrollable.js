import styled from 'styled-components';

const Scrollable = styled.div `
  flex: 1;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export default Scrollable;
