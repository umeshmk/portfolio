import React, {useState} from 'react';
import styled from 'styled-components';
import Thumb from './Thumb';
import Frame from './Frame';
import Modal from './Modal';

// import Body from './Body';
import {H1, IconLeft} from '../Elements/Elements';
import DataList from './project-data.json';

// define body
const Body = ({className, children}) => {
  const [showModal, setShowModal] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);

  const handleClick = (index) => {
    index == projectIndex && setShowModal(!showModal);
    index != projectIndex && setProjectIndex(index);
  };

  return (
    <div className={className}>
      <H1>Projects</H1>
      <div className="frame">
        <Frame>
          {DataList.map((item, index) => (
            // <Thumb handleClick={() => handleClick(index)} key={index}>
            <Thumb handleClick={handleClick} projectIndex={index} key={index}>
              {item.name}
            </Thumb>
          ))}
        </Frame>
      </div>
      {showModal && (
        <Modal
          content={DataList[projectIndex]}
          projectIndex={projectIndex}
          maxProjectIndex={DataList.length - 1}
          handleClick={handleClick}>
          {children}
        </Modal>
      )}
      {/* <IconLeft>Home</IconLeft> */}
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
    }
  }

  @media ${(props) => props.theme.breakpoint.sm} {
    & .frame {
      width: 100%;
    }
  }
`;

export default Project;
