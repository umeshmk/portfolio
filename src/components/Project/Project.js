import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Thumb from './Thumb';
import Frame from './Frame';
import Modal from './Modal';

// import Body from './Body';
import {H1} from '../Elements/Elements';
import DataList from './project-data.json';
import { githubRepos } from './data';

// define body
const Body = ({className, children}) => {
  const [showModal, setShowModal] = useState(false);
  const [projectIndex, setProjectIndex] = useState(-1);

  const handleClick = (index) => {
    setProjectIndex(index);
    if (index == -1) {
      setShowModal(!showModal);
    }
  };

  useEffect(() => {
    if (projectIndex == -1) {
      setShowModal(!showModal);
    }

    window.scroll({top: 0, behavior: 'smooth'});
  }, [projectIndex]);

  return (
    <div className={className}>
      <H1>Projects</H1>
      <div className="frame">
        <Frame>
          {Object.keys(githubRepos).map((item, index) => (
            <Thumb handleClick={handleClick} projectIndex={index} key={index}>
              {githubRepos[item].name}
            </Thumb>
          ))}
          {/* {DataList.map((item, index) => (
            <Thumb handleClick={handleClick} projectIndex={index} key={index}>
              {item.name}
            </Thumb>
          ))} */}
        </Frame>
      </div>

      {showModal && projectIndex > -1 && (
        <Modal
          content={DataList[projectIndex]}
          projectIndex={projectIndex}
          maxProjectIndex={DataList.length - 1}
          handleClick={handleClick}
        />
      )}
    </div>
  );
};

// add styles to Body
const Project = styled(Body)`
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
      /* border: 1px solid red; */
    }
  }

  @media ${(props) => props.theme.breakpoint.sm} {
    & .frame {
      width: 100%;
    }
  }
`;

export default Project;
