import React from 'react';
import styled from 'styled-components';

// define body
const body = ({className, children}) => {
  return (
    <div className={className}>
      <div className="img">&nbsp;</div>
      {/* <img src="/avatar.jpg" alt="" /> */}
    </div>
  );
};

// add styles to body
const Avatar = styled(body)`
  /* css */
  & .img {
    display: flex;
    width: 8rem;
    height: 8rem;
    background-image: url(/avatar.jpg);
    background-position: 50% 50%;
    background-size: cover;
    border-radius: 5em;
    /* height: 130px; */
    filter: sepia(100%);
    /* filter: brightness(80%); */

    /* border-style: none; */
  }

  border: 15px solid ${(props) => props.theme.color.primary};
  border-radius: 5em;
  /* filter: brightness(150%); */
`;

export default Avatar;
