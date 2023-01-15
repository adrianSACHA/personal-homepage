const List = ({ listContent }) => (
  <ul>
    {listContent.map(({ id, content }) => (
      <li key={id}>{content}</li>
    ))}
  </ul>
);

export default List;
