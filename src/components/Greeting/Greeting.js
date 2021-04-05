import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Neue Haas Grotesk Text Pro',
    'Helvetica Neue', Helvetica, Arial, sans-serif !important;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  text-shadow: 0 1px 5px rgb(0 0 0 / 10%);
  cursor: default;
`;

export default function Greeting({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}
