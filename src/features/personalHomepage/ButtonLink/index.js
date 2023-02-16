import styled from "styled-components";

export const StyledButtonLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  gap: 16px;
  width: fit-content;
  background: ${({ theme }) => theme.color.buttonBackground};
  border: 1px solid ${({ theme }) => theme.color.dividerBackground};
  border-radius: 4px;
  color: ${({ theme }) => theme.color.buttonText};
  font-weight: 600;
  font-size: 20px;
  text-decoration: none;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 2px -2px 0px #8cc2ff, -2px 2px 0px #8cc2ff, 2px 2px 0px #8cc2ff,
      -2px -2px 0px #8cc2ff;
  }
  &:active {
    box-shadow: inset 0px 2px 0px #14462033;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tablet}px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 12px;
    background: ${({ theme }) => theme.color.buttonBackground};
    font-size: 18px;
    line-height: 1.4;
  }
`;
