import React from 'react';
import styled from 'styled-components';
import Thumb from './Thumb';
import Frame from './Frame';
// import Body from './Body';
import {H1, IconLeft} from '../Elements/Elements';

const list = [
  'Umesh Kadam (Portfolio)',
  'Tailwindcss cheatsheet',
  'TechNotes',
  'React Refresh App',
  'Bookmarks',
  'MarkedIT',
];

// define body
const body = ({className, children}) => {
  return (
    <div className={className}>
      <H1>Projects</H1>
      <div className="frame">
        <Frame>
          {list.map((item) => (
            <Thumb key={item}>{item}</Thumb>
          ))}
        </Frame>
      </div>

      {/* <IconLeft>Home</IconLeft> */}
    </div>
  );
};

// add styles to body
const Project = styled(body)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  min-height: 80vh;
  padding-top: 1rem;
  color: ${(props) => props.theme.color.text};
  /* border: 3px solid green; */

  & .frame {
    width: 50%;
  }

  @media ${(props) => props.theme.breakpoint.lg} {
    & .frame {
      width: 60%;
    }
  }

  @media ${(props) => props.theme.breakpoint.md} {
    & .frame {
      width: 100%;
    }
  }

  @media ${(props) => props.theme.breakpoint.sm} {
    & .frame {
      width: 100%;
    }
  }
`;

export default Project;
