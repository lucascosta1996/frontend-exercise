import styled from 'styled-components';

const SidebarWrapper = styled.nav`
  border-right: 0.5px solid #ebedf8;
  height: 100%;
  position: fixed;
  width: 84px;

  .list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 128px 0 0;
    padding: 0;

    .list-item {
      align-items: center;
      border-right: 1.5px solid transparent;
      box-sizing: border-box;
      display: flex;
      height: 56px;
      justify-content: center;
      margin: 5px 0;
      width: 100%;

      &--active {
        border-right-color: #0077ff;
      }

      &:hover {
        border-right-color: #0077ff;
      }
    }

    svg {
      height: inherit;
      max-width: 24px;
      width: 100%;

      &:hover {
        fill: #0077FF;
      }
    }
  }

  .link {
    height: 100%;
    text-align: center;
    width: 100%;

    &:hover {
      svg {
        fill: #0077FF;
      }
    }
  }
`;

export default SidebarWrapper;
