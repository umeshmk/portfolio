import styled from 'styled-components';

let Button = styled.button`
  padding: 1rem 2rem;
  color: ${(props) => props.theme.color.primary || 'gray'};
  background-color: transparent;
  border: 3px dashed ${(props) => props.theme.color.primary || 'gray'};

  &:hover {
    filter: brightness(85%);
  }
`;

export default Button;
