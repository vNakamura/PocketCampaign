import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

require('../src/global.styl');
require('./storybook.styl');

function loadStories() {
  require('../src/components/stories/ChatInput-story');
  require('../src/components/stories/Topbar-story');
}

configure(loadStories, module);

(function(){
  var font = document.createElement('link');
  font.type = 'text/css';
  font.rel = 'stylesheet';
  font.href = '//fonts.googleapis.com/css?family=Dosis:300,400|Open+Sans:400,400i,700,700i';
  var s = document.getElementsByTagName('style')[0];
  s.parentNode.insertBefore(font, s);
})();
