import React from 'react';
import styled from 'styled-components';

// define body
const body = ({className, children}) => {
  return <div className={className}>{children}</div>;
};

// add styles to body
const Thumb = styled(body)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 10rem;
  margin: 1rem;
  /* padding: 1rem;; */
  font-size: 1.2rem;
  text-align: center;
  border: 15px solid ${(props) => props.theme.color.primary};
  border-radius: 5em;
  cursor: pointer;
  transition: all 0.1s;

  &:hover {
    filter: brightness(130%);
  }
`;

export default Thumb;
