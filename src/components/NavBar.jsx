import '/src/css/Navbar.css'
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div className="navbar">
        <div className="navbar-brand">
            <Link to='/'>Filmes</Link>
        </div>
        <div className="navbar-links">
            <Link to='/'>Home</Link>
            <Link to='/favorites'>Favoritos</Link>
        </div>
    </div>
  )
}

export default NavBar