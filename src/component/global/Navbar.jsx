import { NavLink } from "react-router-dom"
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
    return (
        <div className="topnav">
            <ul className="reset">
                <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/#about" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/#experience" className={({ isActive }) => (isActive ? 'active' : '')}>Experience</NavLink>
                </li>
                <li>
                    <NavLink to="/#projects" className={({ isActive }) => (isActive ? 'active' : '')}>Projects</NavLink>
                </li>
                <li>
                    <HashLink smooth to='/#contact' >Contact</HashLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;