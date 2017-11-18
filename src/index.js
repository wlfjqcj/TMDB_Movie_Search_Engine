import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {browserHistory} from 'react-router';
import 'semantic-ui-css/semantic.min.css';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Gallery from './components/Gallery/Gallery.js';
import Search from './components/Search/Search.js';
import DView from './components/DView/DView.js';

ReactDOM.render(<Router>
  <div>
     <Route exact path = "/" component = {App}/>
     <Route exact path = "/Search" component = {Search}/>
     <Route exact path = "/Gallery" component = {Gallery} />
    <Route path = "/DView" component = {DView} />
  </div>
</Router>,
document.getElementById('root'));
registerServiceWorker();
