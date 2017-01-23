import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Avatar from '../Avatar';
import imageSample from './avatarImageSample';

const samplesStyle = {
  display: 'block',
  margin: '25px auto',
  width: '150px',
  fontSize: '3em'
}

storiesOf('Avatar', module)
  .addDecorator((story) => (
    <div style={samplesStyle}>
      {story()}
    </div>
  ))
  .addWithInfo('without image', 'If `image` prop is not set, a fallback from <http://avatars.adorable.io> is used', () => (
    <Avatar name="This name will be used to generate the avatar" />
  ), { propTables: [Avatar] })
  .addWithInfo('with image', 'Give an path for file or Data-URL is set as `image` prop', () => (
    <Avatar image={imageSample} name="Seulgi 😍" />
  ), { propTables: [Avatar] });
