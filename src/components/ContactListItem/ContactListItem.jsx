export const ContactListItem = ({ id, name, number, index, deleteContact }) => {
  return (
    <li>
      {index + 1}. {name}: {number}
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};
