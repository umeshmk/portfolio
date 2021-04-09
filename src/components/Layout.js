import React, {useState} from 'react';
import styled from 'styled-components';
import Home from './Home/Home';
import Project from './Project/Project';

const body = ({className, isProject}) => {
  return (
    <div className={className}>
      <div className="home">
        <Home />
        {/* {!isProject && <Home />} */}
      </div>
      <div className="project">
        <Project />
        {/* {isProject && <Project />} */}
      </div>
      {/* <div className="home">{!isProject && <Home />}</div>
      <div className="project">{isProject && <Project />}</div> */}
    </div>
  );
};

const Layout = styled(body)`
  /* height: 100vh; */
  /* border: 3px solid gray; */

  /* text-align: center; */
  display: flex;
  width: 200vw;
  /* height: 100vh; */
  /* overflow: hidden; */
  /* border: 3px solid blue; */
  & > div {
    width: 100vw;
    /* margin-left: 0; */

    /* height: 100vh; */
    overflow: hidden;
    transition: all 0.5s;

    @media ${(props) => props.theme.breakpoint.md} {
      transition: all 0.3s height 0.01s;
    }
  }

  & .home {
    margin-left: ${(props) => {
      if (props.isProject) return '-50%';
      return '0';
    }};
  }

  & .project {
    @media ${(props) => props.theme.breakpoint.md} {
      height: ${(props) => {
        if (props.isProject) return 'auto';
        return '0';
      }};
    }
  }
  /* display: none; */
  /* background-color: red; */
`;
export default Layout;
