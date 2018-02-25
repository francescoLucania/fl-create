import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import '../node_modules/normalize.css/normalize.css';

ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));

registerServiceWorker();
