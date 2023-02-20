import { Elipse, Icon, Memo, Wrapper } from "./styled";

export const Loading = () => (
  <Wrapper>
    <Memo>Please wait, projects are being loaded...</Memo>
    <Icon>
      {" "}
      <Elipse />
    </Icon>
  </Wrapper>
);
