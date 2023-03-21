import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () =>  {
    return (
        <> 
          <nav className="navbar text-light fixed-top navbar-expand-lg bg-dark">
            <div className="container-fluid">
              <Link className="text-light navbar-brand" to="/">World News</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item"><Link className="nav-link text-light" aria-current="page" to="/">Home</Link></li>
                  <li className="nav-item"><Link className="nav-link text-light" to="/business">business</Link></li>
                  <li className="nav-item"><Link className="nav-link text-light" to="/entertainment">entertainment</Link></li>
                  <li className="nav-item"><Link className="nav-link text-light" to="/health">health</Link></li>
                  <li className="nav-item"><Link className="nav-link text-light" to="/sports">sports</Link></li>
                  <li className="nav-item"><Link className="nav-link text-light" to="/technology">technology</Link></li>
                </ul>
              </div>
            </div>
          </nav>
        </>
    )
  
}


export default NavBar

  

