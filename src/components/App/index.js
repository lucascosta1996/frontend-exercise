import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../../store/index';
import AppContainer from './styledComponents';
import Sidebar from '../Sidebar';
import MainHeader from '../MainHeader';
import DataOverview from '../../pages/DataOverview';
import Chat from '../../pages/Chat';
import Messages from '../../pages/Messages';
import Settings from '../../pages/Settings';
import Files from '../../pages/Files';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainHeader />
        <Sidebar />
        <AppContainer>
          <Switch>
            <Route exact path="/">
              <Redirect to="/overview" />
            </Route>
            <Route path="/overview">
              <DataOverview />
            </Route>
            <Route path="/chat">
              <Chat />
            </Route>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/files">
              <Files />
            </Route>
            <Route path="/message">
              <Messages />
            </Route>
          </Switch>
        </AppContainer>
      </Router>
    </Provider>
  );
}

export default App;
