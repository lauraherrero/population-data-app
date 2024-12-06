/* eslint-disable react/prop-types */
export const FilterPopulation = ({ value, onChange, placeholder }) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
