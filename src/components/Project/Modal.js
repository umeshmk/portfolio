import React from 'react';
import styled from 'styled-components';
import {H1, Link, IconLeft, IconRight} from '../Elements/Elements';

// define body
const body = ({
  className,
  children,
  content,
  projectIndex,
  maxProjectIndex,
  handleClick,
}) => {
  return (
    <div className={className}>
      <div className="content">
        <H1>{content.name}</H1>
        <h3 className="description">{content.description}</h3>
        <div className="wrapper">
          {/* <div className="techstack">
            {content.techstack.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
          <div className="link">
            <Link href={content.github} target="blank">
              {content.github}
            </Link>
          </div> */}
        </div>
      </div>
      <div className="close" onClick={() => handleClick(-1)}>
        <i className="fa fa-close"></i>
      </div>
      {projectIndex > 0 && (
        <div className="iconLeft" onClick={() => handleClick(projectIndex - 1)}>
          <IconLeft />
        </div>
      )}
      {maxProjectIndex != projectIndex && (
        <div
          className="iconRight"
          onClick={() => handleClick(projectIndex + 1)}>
          <IconRight />
        </div>
      )}
    </div>
  );
};

// add styles to body
const Modal = styled(body)`
@keyframes fadein {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
};
  position: absolute;
  top: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${() => document.body.scrollHeight + 'px'};
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  animation: fadein 0.5s;

  & .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    height: 70%;
    padding-top: 1rem;
    background-color: #fff;
  }

  & .description {
    padding: 1rem 4rem;
  }

  & .close {
    position: absolute;
    top: 0;
    right: 1rem;
    color: ${(props) => props.theme.color.primary};
    font-size: 5rem;
    cursor: pointer;
  }

  & .wrapper {
    width: 100%;
    background-color: ${(props) => props.theme.color.primary};
  }

  & .techstack {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 2rem 3rem;
    font-size: 1.4rem;
    /* font-style: italic; */
    /* background-color: ${(props) => props.theme.color.primary}; */
    background-color: inherit;

    & span {
      margin: 0.6rem 1rem;
      padding: 0.1rem 0.8rem;
      color: skyblue;
      text-shadow: 2px 1px 0 #000;
      /* background-color: #fff; */
      background-color: inherit;
      border-radius: 1rem;
      filter: drop-shadow(6px 6px 0 skyblue) brightness(120%);
    }
  }

  & .link {
    padding: 1.4rem;
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
    background-color: #fff;
  }

  & .iconLeft {
    position: absolute;
    left: 1rem;
  }

  & .iconRight {
    position: absolute;
    right: 1rem;
  }

  @media ${(props) => props.theme.breakpoint.sm} {
    align-items: start;
    width: 100%;

    & .content {
      width: 100%;
      height: 50%;
      /* margin-top: 50%; */
      margin-top: 10rem;
    }

    & .close {
      top: 1.5%;
      right: auto;
      left: auto;
    }

    & .iconLeft {
      top: 2.5%;
    }

    & .iconRight {
      top: 2.5%;
    }
  }
`;

export default Modal;
