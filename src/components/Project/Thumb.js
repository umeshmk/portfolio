import React from 'react';
import styled from 'styled-components';

// define body
const body = ({className, children, handleClick, projectIndex}) => {
  return (
    <div onClick={() => handleClick(projectIndex)} className={className}>
      {children}
    </div>
  );
};

// add styles to body
const Thumb = styled(body)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 10rem;
  margin: 1rem;
  color: #222;
  padding: 1rem;;
  font-size: 1.2rem;
  text-align: center;
  text-decoration: none;
  border: 2.5px solid ${(props) => props.theme.color.primary};
  border-radius: 5em;
  cursor: pointer;
  box-shadow: inset 0 0 0px 0px  ${(props) => props.theme.color.primary};
  transition: all 0.1s;

  &:hover {
    color: #000;
    /* color: #fff; */
    /* filter: brightness(130%); */
    /* border:6px solid  ${(props) => props.theme.color.primary}; */
    box-shadow: inset 0 0 0px 10px  ${(props) => props.theme.color.primary};
    transition: all 0.351s;
  }

  &:active {
    filter: brightness(100%);
  }
`;

export default Thumb;
