import React, {useState, useLayoutEffect} from 'react';
import styled from 'styled-components';

import theme from './Themes/global';
import {ThemeProvider} from 'styled-components';
import Layout from './Layout';

import {IconRight, IconLeft} from './Elements/Elements';

const Body = ({className}) => {
  const [isProject, setIsProject] = useState(false);
  const handleClick = () => {
    setIsProject(!isProject);
    // window.scrollTo(0, 0);
    // window.scroll({top: 0, behavior: 'smooth'});
  };

  useLayoutEffect(() => {
    window.scroll({top: 0, behavior: 'smooth'});

    return () => {};
  }, [isProject]);

  return (
    <div className={className}>
      <ThemeProvider theme={theme}>
        <Layout isProject={isProject} />
        <div className="icon" onClick={handleClick}>
          {!isProject && <IconRight>Projects</IconRight>}
          {isProject && <IconLeft>Home</IconLeft>}
        </div>
      </ThemeProvider>
    </div>
  );
};

const App = styled(Body)`
  /* height: 100vh; */
  /* border: 3px solid gray; */
  width: 100vw;
  overflow: hidden;

  & .icon {
    display: flex;
    justify-content: center;
    /* text-align: center; */
    /* border: 1px solid #000; */
  }
`;
export default App;
