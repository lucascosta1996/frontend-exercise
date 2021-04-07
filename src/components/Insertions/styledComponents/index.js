import styled from 'styled-components';

const InsertionsWrapper = styled.div`
  align-items: center;
  display: flex;

  @media (max-device-width: 768px) {
    flex-direction: column;
  }

  p {
    color: #aab2c0;
    font-size: 14px;
    margin-left: 15px;

    span {
      color: #354052;
    }
  }

  .bar {
    background-color: #c7cdd9;
    border-radius: 1.7px;
    height: 2.5px;
    position: relative;
    width: 151px;
  }

  .bar-filling {
    background-color: #0077ff;
    border-radius: 1.7px;
    height: 2.5px;
    max-width: 151px;
    position: absolute;
    z-index: 2;
    width: ${({ percentage }) => percentage}%;
  }
`;

export default InsertionsWrapper;