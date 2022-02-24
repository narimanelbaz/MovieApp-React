import { Link } from "react-router-dom";
import React from "react";
import { useSelector} from 'react-redux'

function Navbar() {

    const FavArr = useSelector((state) => state.favoriteMovies);
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand"  to="/Movies">Movies</Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Movies">Movies</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link" to="/Favorites">
           Favorites
           <button type="button" className="btn btn-warning position-relative" style={{height:'26px'}}>{FavArr.length}</button>
          </Link>
          
        </li>
      </ul>
         <li className="nav-item">
         <Link className="nav-link " to="/Login">Login</Link>
         </li>
         <li className="nav-item">
         <Link className="nav-link" to="/Register">Register</Link>
         </li>
    </div>
  </div>
</nav>
    </>
  );
}

export default Navbar;
