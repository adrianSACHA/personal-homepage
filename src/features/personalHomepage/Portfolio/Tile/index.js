import {
  StyledHeader,
  StyledParagraph,
  List,
  ListItem,
  StyledLink,
  TileWrapper,
  TileRepo,
  StyledName,
} from "./styled";

const Tile = ({ projects }) => (
  <TileWrapper>
    {projects.map(
      (project) =>
        project.homepage && (
          <TileRepo key={project.id}>
            <StyledHeader>
              {project.name
                .replace(/\b[a-z]/g, (letter) => letter.toUpperCase())
                .replace(/-/g, " ")}
            </StyledHeader>
            <StyledParagraph>{project.description}</StyledParagraph>
            <List>
              <ListItem>
                <StyledName>Demo:</StyledName>
                <StyledLink target="_blank" href={project.homepage}>
                  {project.homepage}
                </StyledLink>
              </ListItem>
              <ListItem>
                <StyledName>Code:</StyledName>
                <StyledLink target="_blank" href={project.html_url}>
                  {project.html_url}
                </StyledLink>
              </ListItem>
            </List>
          </TileRepo>
        )
    )}
  </TileWrapper>
);

export default Tile;
