import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// additional imports from react-router-dom and redux
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/reducer';

// import components here
import BaseLayout from './components/BaseLayout';
// import GameList from './components/GameList';
// import GameForm from './components/GameForm';
// import SingleGame from './components/SingleGame';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={App}/>
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
