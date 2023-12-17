import "./navbar.css"
function Navbar() {
    return (
        <nav className='navbar container'>
            <div className="navbar__brand">
                <p className="rose-700 logo__text">Moviefix</p>
            </div>
            <div className="navbar__search">
                <input type="search" placeholder="Search for a movie" className="searchbar ft-white" />
            </div>
        </nav>
    )
}

export default Navbar