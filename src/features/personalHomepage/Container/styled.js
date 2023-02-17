import styled from "styled-components";

export const Container = styled.main`
  padding: 20px;
  margin: 0 auto;
  display: grid;
  grid-gap: 72px;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    grid-gap: 48px;
  }
`;
