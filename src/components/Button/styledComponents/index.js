import styled, { css } from 'styled-components';

const Default = css`
  background-color: #0077FF;
  color: #FFFFFF;

  &:hover {
    color: #0077FF;
    background-color: transparent;
  }
`;

const Transparent = css`
  background-color: transparent;
  border-color: #0077FF;
  color: #0077FF;

  &:hover {
    background-color: #0077FF;
    color: #FFFFFF;
  }
`;

const Disabled = css`
  background-color: transparent;
  border-color: #8a96a0;
  color: #0077FF;
`;

const ButtonWrapper = styled.button`
  border: 0.5px solid;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  padding: 8px 16px;
  width: ${({ width }) => width}px;
  ${({ normal }) => normal && Default};
  ${({ transparent }) => transparent && Transparent};
  ${({ disabled }) => disabled && Disabled};

  &:focus {
    outline: none;
  }
`;

export default ButtonWrapper;