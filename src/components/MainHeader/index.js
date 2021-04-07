import React from 'react';
import { useLocation } from "react-router-dom";
import { ReactComponent as Logo } from './assets/logo.svg';
import MainHeaderWrapper from './styledComponents';
import Button from '../Button';

function MainHeader() {
  let location = useLocation();

  return (
    <MainHeaderWrapper>
      <section className="left-side-header">
        <Logo />
        <button
          className="page-title"
        >
          {location.pathname.replace(/['/']/, '')}
        </button>
      </section>
      <section className="right-side-header">
        <Button label="Premium" />
      </section>
    </MainHeaderWrapper>
  );
}

export default MainHeader;
