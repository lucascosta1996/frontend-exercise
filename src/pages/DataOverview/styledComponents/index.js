import styled from 'styled-components';

const DataOverviewWrapper = styled.div`
  @media (max-device-width: 768px) {
    padding-bottom: 100px;
    width: 100%;
  }

  header {
    h1 {
      color: #1a173b;
      display: inline-block;
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 0.07px;
    }
  }

  footer {
    font-size: 14px;
    padding: 23px 0;
    p {
      color: #aab2c0;

      span {
        color: #3f495b;
      }
    }
  }

  .overview-header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding-bottom: 20px;
  }

  .overview-main-card {
    background-color: #FFFFFF;
    border: solid 0.5px #ebedf8;

    @media (max-device-width: 768px) {
      padding-bottom: 100px;
    }
  }

  .overview-charts {
    border-bottom: 0.5px solid #ebedf8;
    display: flex;
    flex-wrap: no-wrap;
    justify-content: space-around;

    @media (max-device-width: 768px) {
      flex-direction: column;
    }
  }

  .overview-table {
    padding: 24px;
  }

  .separator {
    background-color: #ebedf8;
    height: auto;
    width: 0.5px;
  }
`;

export default DataOverviewWrapper;
