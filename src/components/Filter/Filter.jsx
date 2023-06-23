export const Filter = ({ filter, onFilter }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" value={filter} onChange={onFilter} />
    </label>
  );
};
