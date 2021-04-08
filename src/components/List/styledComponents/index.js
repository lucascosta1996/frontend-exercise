import styled from 'styled-components';

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;

  .message {
    background-color: #e7e9eb;
    border: 0.5px solid #e0e2e6;
    border-radius: 3px;
    margin: 10px 0;
    width: 100%;

    .message-sender {
      background-color: #FFFFFF;
      border-radius: 3px;
      padding: 10px;
    }

    .message-content {
      font-size: 16px;
      padding: 10px;
    }
  }
`;

export default ListWrapper;
