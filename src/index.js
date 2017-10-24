import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

// additional imports from react-router-dom and redux
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers/reducer';

// import components here
import BaseLayout from './components/BaseLayout';
import GameList from './containers/GameList';
import GameForm from './components/GameForm';
import SingleGame from './containers/SingleGame';
import About from './components/About';

// Only chrome can handle the redux dev tool
// redux compose cannot handle a null or undefined middleware


const store = createStore(
    reducers,
    compose(
        applyMiddleware(reduxThunk)
    )
);

ReactDOM.render(
<Provider store={store}>
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/House_Rules" component={App} />
        <Route exact path='/House_Rules/games/:id' component={SingleGame} />
        <Route exact path='/House_Rules/games' component={GameList} />
        <Route exact path='/House_Rules/newGame' component={GameForm} />
        <Route exact path='/House_Rules/about' component={About} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
</Provider>, document.getElementById('root'));
registerServiceWorker();
