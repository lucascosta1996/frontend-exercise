import React from 'react';
import ListWrapper from './styledComponents';

function List({ data }) {
  return (
    <ListWrapper>
      {
        data && data.map(item => (
          <li
            key={item.name}
            className="message"
          >
            <header className="message-sender">
              {item.name}
            </header>
            <p className="message-content">
              {item.message.text}
            </p>
          </li>
        ))
      }
    </ListWrapper>
  );
}

export default List;
