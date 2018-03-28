import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter} from 'react-router-dom'
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/normalize.css/normalize.css';
import './index.css';

ReactDOM.render(<HashRouter><App/></HashRouter>, document.getElementById('root'));

// registerServiceWorker();
