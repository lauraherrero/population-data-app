import { Link, NavLink } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-4">
            
            <Link 
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
            </div>
        </nav>
    )
}