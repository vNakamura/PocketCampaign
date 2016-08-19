import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import ChatInput from '../ChatInput';

storiesOf('ChatInput', module)
  .addWithInfo('default', 'The sendAction will run whenever the "Send" button is pressed or the hotkey [cmd+enter/crtl+enter] is pressed. Sent content will be trimmed', () => (
    <ChatInput
      sendAction={action('Message sent!')}
    />
  ), { propTables: [ChatInput], inline: true });
