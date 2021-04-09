import React from 'react';
import styled from 'styled-components';

// define body
const body = ({className, children, isLeft}) => {
  let icon = 'fa fa-angle-double-right';
  if (isLeft) icon = 'fa fa-angle-double-left';

  return (
    <div className={className}>
      <ul>
        <li>{children}</li>
        <li>&nbsp;</li>
        <li>&nbsp;</li>
        <li>
          <i className={icon}></i>
        </li>
      </ul>
    </div>
  );
};

// add styles to body
const IconRight = styled(body)`
  & ul {
    display: flex;
    align-items: center;
    padding-left: 0;
    text-align: center;
    /* justify-content: center; */
    list-style-type: none;
    /* border: 2px solid green; */
    transition: all 0.5s;
  }

  & li {
    width: 2rem;
    height: 2rem;
    margin-left: -2px;
    background-color: ${(props) => props.theme.color.primary};
    /* border: 2px solid green; */
    border-radius: 3rem;
  }

  & li:first-child {
    width: auto;
    padding: 0 0.5rem;
    font-size: 1.2rem;
    /* background-color: #fff; */
    background-color: ${(props) => {
      return props.children ? '#fff' : 'transparent';
    }};
  }

  & li:nth-child(2) {
    width: 1rem;
    height: 1rem;
    filter: brightness(60%);
  }

  & li:nth-child(3) {
    width: 2rem;
    height: 2rem;
    filter: brightness(70%);
  }

  & li:nth-child(4) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.2rem;
    height: 3.2rem;
    filter: brightness(150%);

    & .fa {
      color: ${(props) => props.theme.color.primary};
      font-size: 2rem;
      filter: brightness(40%);
    }
  }

  & ul:hover {
    cursor: pointer;

    & .fa {
      /* color: red; */
      font-size: 2;
      filter: brightness(50%);
    }
  }
`;

const bodyLeft = ({className, children}) => {
  return (
    <IconRight className={className} isLeft={true}>
      {children}
    </IconRight>
  );
};
const IconLeft = styled(bodyLeft)`
  & ul {
    flex-direction: row-reverse;
  }
`;

export {IconRight, IconLeft};
