import styled from "styled-components";

export const Container = styled.main`
  padding: 20px;
  margin: 0 auto;
  display: grid;
  gap: 72px;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    gap: 48px;
  }
`;
