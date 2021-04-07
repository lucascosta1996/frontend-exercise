import styled from 'styled-components';

const ResultsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  margin: 0;
  width: 100%;

  @media (max-device-width: 768px) {
    padding: 24px 0;
  }

  .result-charts-title {
    color: #354052;
    font-size: 14px;
    margin-bottom: 32px;
  }

  .result-charts {
    align-items: center;
    display: flex;


    header {
      display: flex;
      flex-direction: column;

      .followers-count-wrapper {
        align-items: flex-start;
        display: flex;
        margin-bottom: 6.5px;

        .followers-quantity {
          font-size: 16px;
          color: #37394c;
        }

        .followers-label {
          color: #8a96a0;
          font-size: 14px;
          line-height: 22px;
          letter-spacing: 0.05px;
          margin-left: 6.3px;
        }
      }
    }

    .bar-chart {
      height: auto;
      max-width: 270px;
      width: 100%;

      @media (max-device-width: 768px) {
        max-width: 218px;
      }
    }

    .pie-chart {
      height: auto;
      margin-left: 32px;
      max-width: 108px;
      width: 100%;

      @media (max-device-width: 768px) {
        max-width: 75px;
      }
    }
  }
`;

export default ResultsWrapper;
