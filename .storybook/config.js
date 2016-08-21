import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

require('../src/global.styl');
require('./storybook.styl');

function loadStories() {
  require('../src/components/stories/Topbar-story');
  require('../src/components/stories/ChatInput-story');
  require('../src/components/stories/Avatar-story');
  require('../src/components/stories/Message-story');
}

configure(loadStories, module);
