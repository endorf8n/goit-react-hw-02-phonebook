import PropTypes from 'prop-types';

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

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
