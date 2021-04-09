import React from 'react';
import styled from 'styled-components';

// define body
const body = ({className, children}) => {
  return (
    <div className={className}>
      <img src="/frame-mobile.svg" alt="" />
      {children}
    </div>
  );
};

// add styles to body
const FrameMobile = styled(body)``;

export default FrameMobile;
