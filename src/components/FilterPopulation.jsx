export const FilterPopulation = ({ value, onChange, placeholder }) => {
  return (
    <div className="text-center">
      <input
        style={{
          padding: "10px",
          fontSize: "1rem",
          borderRadius: "5px",
          border: "1px solid #ddd",
          outline: "none",
          width: "200px",
          marginLeft: "20px",
        }}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
