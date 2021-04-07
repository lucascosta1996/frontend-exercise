import React from 'react';
import InsertionsWrapper from './styledComponents';
import useGetRequests from '../../hooks/useGetRequests';

function Insertions() {
  const { data } = useGetRequests('/api/insertions');

  return (
    <InsertionsWrapper
      percentage={80}
    >
      <div className="bar">
        <div className="bar-filling" />
      </div>
      <p>
        <span>{data && data.insertions[0].insertionsCount}</span> insertions needed to complete
      </p>
    </InsertionsWrapper>
  );
}

export default Insertions;
