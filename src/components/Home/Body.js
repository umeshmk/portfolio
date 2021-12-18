import React from 'react';
import styled from 'styled-components';
import {Link} from '../Elements/Elements';

// define body
const body = ({className, children}) => {
  return (
    <div className={className}>
      {/* <em> */}
      Hello,
      <p />
      My Name is Umesh Kadam and I'm a Frontend Developer.
      <p />I have done 4 years Bachelor of Engineering in Information Technology
      from Mumbai University, India.
      <p />I have been in Web Development since more than half a decade. Take a
      look at my <Link href="https://github.com/umeshmk">Github</Link>
      ,&nbsp;
      <Link href="https://stackoverflow.com/users/4681392/umesh-kadam">
        StackOverflow
      </Link>
      &nbsp;and&nbsp;
      <Link href="https://triplebyte.com/tb/umesh-kadam-wto3lpz/certificate">
        Triplebyte
      </Link>
      &nbsp; accounts.
      <br />
      <p />
      <p>
        My Techstack <br />
        &nbsp;&nbsp;&nbsp;➔ Main :{' '}
        <span>
          Typescript, React, Redux, Styled-Components, Material-UI, TailwindCss
        </span>
        <br />
        &nbsp;&nbsp;&nbsp;➔ Others :{' '}
        <span>
          Visual Studio Code, Html, Css/Sass, Git, Webpack, Vuepress, Ubuntu
        </span>
      </p>
      {/* Contact Me -&nbsp;   */}
      Feel free to ping me on &nbsp;
      <Link href="mailto:umeshk149@gmail.com">umeshk149@gmail.com</Link> or
      &nbsp;
      {/* <Link href="https://www.reddit.com/user/umeshmk">Reddit</Link>{' '} */}
      {/* <br/> */}
      <Link href="#">umesh_m_k</Link> (skype)
      <p />
      {/* </em> */}
    </div>
  );
};

// add styles to body
const Body = styled(body)``;

export default Body;
