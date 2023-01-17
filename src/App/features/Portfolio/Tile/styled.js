import styled from "styled-components";

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.color.white};
  border: 6px solid rgba(209, 213, 218, 0.3);
  min-height: 322px;
  max-width: 592px;
  border-radius: 4px;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02),
    0px 16px 58px rgba(9, 10, 51, 0.03);
  text-align: center;
`;
export const StyledHeader = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.color.scienceBlue};
`;
