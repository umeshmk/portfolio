import Link from 'next/link';
import styles from './styles.module.scss';

export const Description = () => {
  return (
    <div className={styles.description}>
      {/* <em> */}
      Hello,
      <p />
      My Name is Umesh Kadam and I&apos;m a Frontend Developer.
      <p />I have done 4 years Bachelor of Engineering in Information Technology
      from Mumbai University, India.
      <p />I have been in Web Development since more than half a decade. Take a
      look at my{' '}
      <Link target="_blank" href="https://github.com/umeshmk">
        Github
      </Link>
      ,&nbsp;
      <Link
        target="_blank"
        href="https://stackoverflow.com/users/4681392/umesh-kadam">
        StackOverflow
      </Link>
      &nbsp;and&nbsp;
      <Link
        target="_blank"
        href="https://triplebyte.com/tb/umesh-kadam-wto3lpz/certificate">
        Triplebyte
      </Link>
      &nbsp; accounts.
      <br />
      <p />
      <p>
        My Techstack <br />
        &nbsp;&nbsp;&nbsp;➔ Main :{' '}
        <span>
          Typescript, Next.js, React, Styled-Components, Material-UI, Redux, etc
        </span>
        <br />
        &nbsp;&nbsp;&nbsp;➔ Others :{' '}
        <span>
          Visual Studio Code, TailwindCss, Slack, Git, Jira, Figma, etc
        </span>
      </p>
      {/* Contact Me -&nbsp;   */}
      Feel free to ping me on &nbsp;
      <Link target="_blank" href="mailto:umeshk149@gmail.com">
        umeshk149@gmail.com
      </Link>{' '}
      or &nbsp;
      {/* <Link target='_blank'  href="https://www.reddit.com/user/umeshmk">  Reddit</Link>{' '} */}
      {/* <br/> */}
      <Link target="_blank" href="#">
        umesh_m_k
      </Link>{' '}
      (skype)
      <p />
      {/* </em> */}
    </div>
  );
};
