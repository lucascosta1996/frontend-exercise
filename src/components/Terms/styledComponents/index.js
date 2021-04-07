import styled from 'styled-components';

const TermsWrapper = styled.div`
  padding: 35px 65px;

  @media (max-device-width: 768px) {
    padding: 0px 65px;
  }
  
  .terms-list {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 0;
    list-style: none;

    .terms-list-item {
      display: flex;
      justify-content: space-between;
      margin: 6px;
      width: 134px;

      .term-label {
        color: #999999;
        font-size: 12px;
        letter-spacing: 0.5px;
      }

      .term-number {
        font-size: 12px;
        letter-spacing: 0.5px;
      }
    }
  }
`;

export default TermsWrapper;
