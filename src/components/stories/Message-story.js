import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import moment from 'moment';

import Message from '../Message';

const samplesStyle = {
  display: 'block',
  margin: '25px 50px',
}

const author = {
  name: 'Author Name',
}

const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
  + 'Ut convallis sapien et bibendum dignissim.\nMauris auctor tellus et '
  + 'vestibulum venenatis. Maecenas euismod arcu quis tincidunt scelerisque. '
  + 'Etiam ac diam massa. Vestibulum faucibus lacinia enim. Praesent posuere '
  + 'neque ligula, vel porta felis pulvinar vel.\nCurabitur placerat posuere '
  + 'tempor. Integer et lectus dictum, cursus erat quis, porttitor felis. '
  + 'Suspendisse sit amet dui odio. Nunc lectus tellus, euismod eget accumsan '
  + 'volutpat, facilisis interdum arcu.';

storiesOf('Message', module)
  .addDecorator((story) => (
    <div style={samplesStyle}>
      {story()}
    </div>
  ))
  .addWithInfo('speaking', 'Show sender and message', () => (
    <Message
      author={author}
      text={text}
      time={moment().subtract(25, 'seconds').valueOf()}
    />
  ), { propTables: [Message] });
