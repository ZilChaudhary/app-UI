import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

const rootElement = document.getElementById('root');
const isStrictMod = false;

function AppStrict() {
  return isStrictMod ? (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ) : (
    <App />
  );
}

ReactDOM.render(<AppStrict />, rootElement);
