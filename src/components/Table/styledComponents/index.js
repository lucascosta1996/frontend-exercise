import styled from 'styled-components';

const TableWrapper = styled.div`
  width: 100%;

  .support-requests-header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 100%;

    h2 {
      color: #1a173b;
      font-size: 20px;
      letter-spacing: 0.07px;
    }

    span {
      color: #1880e7;
      cursor: pointer;
      font-size: 14px;
      height: fit-content;
      letter-spacing: 0.07px;
      text-transform: uppercase;

      &:hover {
        font-weight: bold;
      }
    }
  }

  table {
    width: 100%;

    tbody {
      .table-header {
        th {
          color: #b4bac6;
          font-size: 12px;
          font-weight: normal;
          padding: 18px 0;
          text-align: left;
        }

        @media (max-device-width: 768px) {
          display: none;
        }
      }

      .table-row {
        td {
          color: #8a96a0;
          padding: 8px 0;
        }

        .td-name {
          color: #354052;
        }

        .button-table {
          width: 94px;
        }

        @media (max-device-width: 768px) {
          border-bottom: 0.5px solid #ebedf8;
          display: flex;
          flex-direction: column;
          padding-bottom: 6px;
        }
      }
    }
  }
`;

export default TableWrapper;
