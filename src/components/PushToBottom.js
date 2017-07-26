// @flow

import styled from 'styled-components';

const PushToBottom = styled.div`
  flex: ${props => props.flex};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 100%;
`;
PushToBottom.defaultProps = {
  flex: '1 0 auto',
};

export default PushToBottom;
