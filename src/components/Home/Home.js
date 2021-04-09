import React from 'react';
import styled from 'styled-components';
import Avatar from './Avatar';
import Frame from './Frame/Frame';
import Body from './Body';
import {H1, IconRight} from '../Elements/Elements';

// define body
const body = ({className, children}) => {
  return (
    <div className={className}>
      <Avatar />
      <H1>Umesh Kadam</H1>
      <div className="frame">
        <Frame>
          <Body />
        </Frame>
      </div>

      {/* <IconRight>Projects</IconRight> */}
    </div>
  );
};

// add styles to body
const Home = styled(body)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 80vh;
  padding-top: 1rem;
  color: ${(props) => props.theme.color.text};
  /* border: 1px solid red; */
  /* stylelint-disable-line value-keyword-case */
  /* height: ${(props) => {
    if (props.isProject) return '0';
    return 'auto';
  }}; */
  & .frame {
    width: 40%;
  }

  @media ${(props) => props.theme.breakpoint.lg} {
    & .frame {
      width: 50%;
    }
  }

  @media ${(props) => props.theme.breakpoint.md} {
    & .frame {
      width: 75%;
    }
  }

  @media ${(props) => props.theme.breakpoint.sm} {
    & .frame {
      width: 100%;
    }
  }
`;

export default Home;
