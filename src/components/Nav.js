import React from 'react';
import SearchBox from "./SearchBox";
import "../styles/Nav.css"

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

       <div className="search-area col-4">
        <SearchBox />
    </div>
</nav>
    );
}
export default Nav;