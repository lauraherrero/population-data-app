import { useState } from 'react';
import { useNavigate } from 'react-router';

export const Navbar = () => {

    const navigate = useNavigate();


    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
        const selectedContinent = e.target.value;
        navigate(`/continent/${selectedContinent}`);
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-4">
            <select name="regions" id="regions" value={inputValue} onChange={handleChange}>
                <option value="Global">Global Population</option>
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </nav>
    )
}