import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './styles/index.css';
import 'antd/dist/antd.css';
import App from './App'; 
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<HashRouter basename={process.env.PUBLIC_URL}>
      <App />
    </HashRouter>,
    document.getElementById('root')
);
serviceWorker.unregister();