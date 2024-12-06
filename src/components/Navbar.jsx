import { useNavigate } from 'react-router';

export const Navbar = () => {

    const navigate = useNavigate();



    const handleChange = (e) => {
        const selectedContinent = e.target.value;
        if (selectedContinent === 'Global') {
            navigate('/');
        } else {
            navigate(`/continent/${selectedContinent}`);
        }
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-4">
            <select name="regions" id="regions" onChange={handleChange}>
                <option value="Global">Global Population</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </nav>
    )
}