import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { seedStore } from '../../store/actions/supportRequestsActions';
import useGetRequests from '../../hooks/useGetRequests';
import AppContainer from './styledComponents';
import Sidebar from '../Sidebar';
import MainHeader from '../MainHeader';
import DataOverview from '../../pages/DataOverview';
import Chat from '../../pages/Chat';
import Messages from '../../pages/Messages';
import Settings from '../../pages/Settings';
import Files from '../../pages/Files';

function App() {
  const { data } = useGetRequests('/api/requests');
  const supportRequests = useSelector(state => state.data.supportRequests);
  const dispatch = useDispatch();

  useEffect(() => {
    if ( data && !supportRequests ) {
      seedStore(data, dispatch);
    }
  }, [data, dispatch, supportRequests]);

  return (
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
  );
}

export default App;
