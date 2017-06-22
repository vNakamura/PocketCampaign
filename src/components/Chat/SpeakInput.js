// @flow

import React, {Component} from 'react';
import { findDOMNode } from 'react-dom';
import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea';
import MouseTrap from 'mousetrap';

import Button from '../Buttons/Button';

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  padding: .5rem;
`;
const hotkeys: string[] = [
  'command+enter',
  'command+return',
  'ctrl+enter',
  'ctrl+return',
];
const Textarea = styled(TextareaAutosize)`
  flex: 1;
  font-family: ${props => props.theme.fonts.copy}
  font-size: 1rem;
  resize: none;
  padding: .4em;
`;
const SendButton = styled(Button)`
  padding: .5rem;
`;

export default class SpeakInput extends Component {
  state = {
    text: '',
  };
  textarea: HTMLTextAreaElement;
  componentDidMount() {
    this.textarea.focus();
  };

  handleFocus = () => {
    MouseTrap.bind(hotkeys, this.handleSend);
  };
  handleBlur() {
    MouseTrap.unbind(hotkeys);
  };
  handleTextChange = (e:Event) => {
    const target: EventTarget = e.currentTarget;
    if (target instanceof HTMLInputElement) this.setState({ text: target.value });
  }

  handleSend = (e?: Event) => {
    if (e) e.preventDefault();
    const text = this.state.text.trim();
    if (text.length > 0) {
      this.setState({ text: '' });
      this.textarea.focus();
    }
  };

  render() {
    return (
      <Container>
        <Textarea
          className="mousetrap"
          rows={2}
          maxRows={5}
          placeholder="Your message"
          onChange={this.handleTextChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          value={this.state.text}
          ref={ref => {
            const node = findDOMNode(ref);
            if (node instanceof HTMLTextAreaElement) this.textarea = node;
          }}
         />
        {
          this.state.text.length ?
            <SendButton onClick={this.handleSend}>Send</SendButton>
            : null
          }
      </Container>
    );
  };
};
