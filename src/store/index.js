import { createStore, compose } from 'redux';
import supportRequests from './reducers/supportRequestsReducer';

const store = createStore(
  supportRequests,
  compose(typeof window === 'object' &&
    typeof window.devToolsExtension !== 'undefined' ?
      window.devToolsExtension() :
      f => f
  )
  );

export default store;
