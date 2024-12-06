/* eslint-disable react/prop-types */
export const FilterPopulation = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Filter by population"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
