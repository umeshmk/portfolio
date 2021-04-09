import styled from 'styled-components';

const Link = styled.a.attrs((props) => ({
  href: props.href,
}))`
  color: purple;

  &:visited {
    /* color: green; */
  }
`;

export default Link;
