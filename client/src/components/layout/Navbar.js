import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary container" >
        <a className="navbar-brand" href="#">React Crud</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            
          </ul>
         
        </div>
        <Link className='btn btn-outline-light w-25' to="/user/add">Add Users</Link>
      </nav>
    )
}

export default Navbar;
