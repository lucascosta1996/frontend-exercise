import React from 'react';
import { bool, func, string } from 'prop-types';
import ButtonWrapper from './styledComponents';

function Button({
  normal,
  disabled,
  label,
  onClick,
  transparent,
  width,
}) {
  return(
    <ButtonWrapper
      onClick={(e) => onClick(e)}
      disabled={disabled}
      normal={normal}
      transparent={transparent}
      width={width}
    >
      {label}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  normal: bool,
  transparent: bool,
  disabled: bool,
  onClick: func,
  label: string.isRequired,
  width: string,
};

Button.defaultProps = {
  normal: true,
  transparent: false,
  disabled: false,
  onClick: () => {},
  width: '94',
};

export default Button;
