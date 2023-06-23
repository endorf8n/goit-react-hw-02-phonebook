export const Filter = ({ filter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" value={filter} />
    </label>
  );
};
