import { render } from 'react-dom';
import React from 'react';

import App from './components/App';

require('./global.styl');

render(<App />, document.getElementById('root'));
