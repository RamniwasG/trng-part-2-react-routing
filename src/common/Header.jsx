import { useState } from "react";
import { NavLink, Link } from "react-router";

function Header(props) {
    const [selectedMenuItem, setSelectedMenuItem] = useState('home')
  return (
    <nav className="navbar navbar-light m-2">
        <h2>App Logo</h2>
        <div className="navbar-nav flex-row">
            {props.menuList.map((menuItem) => {
                return <NavLink
                    key={menuItem.label}
                    to={menuItem.url}
                    className={menuItem.label === selectedMenuItem ? "nav-item nav-link active" : "nav-item nav-link"}
                    onClick={() => setSelectedMenuItem(menuItem.label)}
                >
                    {menuItem.label}
                </NavLink>
            })}
        </div>
        <Link to="/signin">Sign In</Link>
    </nav>
  );
}

export default Header;