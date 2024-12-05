/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {


    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);;
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-4">
            
            {/* <Link 
                className="navbar-brand" 
                to="/"
            >
                Population Data Query
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({isActive}) => `nav-item nav-link ${ isActive } ? 'active' : '' `} 
                        to="/countries"
                    >
                        Countries
                    </NavLink>

                </div>
            </div> */}
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