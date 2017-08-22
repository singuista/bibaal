'use strict';

import React    													from 'react';
import ReactDOM  													from 'react-dom';
import Routes    													from './Routes';
import { Provider } 												from 'react-redux';
import store 														from './Store';

if ( process.env.NODE_ENV !== 'production' ) {
  // Enable React devtools
  window.React = React;
}

ReactDOM.render(<Provider store={store}>{Routes}</Provider>, document.querySelector('#app'));
