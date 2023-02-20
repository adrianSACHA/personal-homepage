import {
  Name,
  Description,
  List,
  ListItem,
  LinksValue,
  Link,
  Links,
  LinksRow,
} from "./styled";

export const Repositories = ({ repositories }) => (
  <List>
    {repositories.map(({ id, name, description, homepage, html_url }) => (
      <ListItem key={id}>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <Links>
          {!!homepage && (
            <LinksRow>
              <dt>Demo:</dt>
              <LinksValue>
                <Link target="_blank" rel="norefferrer" href={homepage}>
                  {homepage}
                </Link>
              </LinksValue>
            </LinksRow>
          )}
          <LinksRow>
            <dt>Code:</dt>
            <LinksValue>
              <Link target="_blank" rel="norefferrer" href={html_url}>
                {html_url}
              </Link>
            </LinksValue>
          </LinksRow>
        </Links>
      </ListItem>
    ))}
  </List>
);

export default Repositories;
