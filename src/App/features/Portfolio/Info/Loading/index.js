import { Elipse, Icon, Wrapper } from "./styled";

export const Loading = () => (
  <Wrapper>
    <Icon>
      {" "}
      <Elipse />
    </Icon>
    <p>Please wait, projects are being loaded...</p>
  </Wrapper>
);
