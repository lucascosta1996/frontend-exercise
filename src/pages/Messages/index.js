import React from 'react';
import { useSelector } from 'react-redux';
import List from '../../components/List';

function Messages() {
  const requests = useSelector(state => state.data.supportRequests);

  return (
    <div>
      <List data={requests} />
    </div>
  );
}

export default Messages;
