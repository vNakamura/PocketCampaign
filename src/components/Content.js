import React, { PropTypes } from 'react';
import TiThMenu from 'react-icons/lib/ti/th-menu';
import isNil from 'lodash/isNil';
import style from './Content.styl';

// Components
import Topbar from './Topbar';
import Scrollable from './Scrollable';
import ChatInput from './ChatInput';

const Content = (props) =>
  <div className={style.content}>
    <Topbar
      leftButtonContent={isNil(props.menuButtonAction) ? null : <TiThMenu />}
      leftButtonAction={props.menuButtonAction}
      titleText="A really long title that would make the line break on a small screen"
    />
    <Scrollable>
      {props.children}
    </Scrollable>
    <ChatInput />
  </div>;

Content.propTypes = {
  menuButtonAction: PropTypes.func,
  children: PropTypes.node,
};

export default Content;
