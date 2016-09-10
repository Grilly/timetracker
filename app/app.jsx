import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';
import tracks from './data/tracks';

ReactDOM.render(
  <App tracks={tracks} name="Michael Westrich" age={24} bio="Blablabla" />,
  document.getElementById('root')
);
