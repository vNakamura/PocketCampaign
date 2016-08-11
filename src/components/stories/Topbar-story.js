import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Topbar from '../Topbar';

storiesOf('Topbar', module)
  .addWithInfo('with menu button', 'Menu button at the left of the bar', () => (
    <Topbar showMenuButton={true} menuButtonAction={action('Menu button was pressed!')} titleText="My Topbar"/>
  ), { propTables: [Topbar], inline: true })
  .addWithInfo('without button', 'Simple version', () => (
    <Topbar titleText="My Topbar"/>
  ), { propTables: [Topbar], inline: true })
  .addWithInfo('with long title', 'If there is not enought space, the text will be truncated', () => (
    <Topbar titleText="A really long title that would make the line break on a small screen"/>
  ), { propTables: [Topbar], inline: true });
