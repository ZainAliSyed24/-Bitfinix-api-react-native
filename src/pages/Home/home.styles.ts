import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  max-width:${(props) => props.theme.maxWidth};
  align-self: center;
  background-color: ${(props) => props.theme.colors.background};
`;
