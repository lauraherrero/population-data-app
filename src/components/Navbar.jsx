import { useNavigate } from "react-router";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleChange = (e) => {
    const selectedContinent = e.target.value;
    if (selectedContinent === "Global") {
      navigate("/");
    } else {
      navigate(`/continent/${selectedContinent}`);
    }
  };

  return (
    <div className="bg-dark text-light p-4 d-flex justify-content-between align-items-center">
      <h1>Population Data App</h1>
      <nav className="navbar navbar-expand-sm navbar-dark mr-2">
        <select
          className="custom-select"
          style={{
            maxWidth: "200px",
            padding: "10px",
            fontSize: "1rem",
            borderRadius: "5px",
            border: "none",
            outline: "none",
            cursor: "pointer",
          }}
          name="regions"
          id="regions"
          onChange={handleChange}
        >
          <option value="Global">Global Population</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </nav>
    </div>
  );
};
