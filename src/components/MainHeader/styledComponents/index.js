import styled from 'styled-components';

const MainHeaderWrapper = styled.header`
  align-items: center;
  background-color: #FFFFFF;
  border-bottom: 0.5px solid #ebedf8;
  display: flex;
  height: 70px;
  justify-content: space-between;
  position: fixed;
  z-index: 3;
  width: 100%;

  .left-side-header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: 100%;

    .page-title {
      background-color: transparent;
      border: none;
      border-bottom: 0.5px solid #1880e7;
      color: #1880e7;
      font-size: 14px;
      font-weight: bold;
      height: 100%;
      letter-spacing: 0.05px;
      margin-left: 156px;
      text-transform: capitalize;
      width: auto;

      @media (max-device-width: 768px) {
        margin-left: 75px;
      }
    }

    svg {
      height: auto;
      max-width: 38px;
      margin-left: 24px;
      width: 100%;
    }
  }

  .right-side-header {
    margin-right: 21px;
  }
`;

export default MainHeaderWrapper;
