export const ContactListItem = ({ name, number, index }) => {
  return (
    <li>
      {index + 1}. {name}: {number}
      <button type="button">Delete</button>
    </li>
  );
};
