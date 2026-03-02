import React from 'react'
import {  NavLink} from 'react-router-dom'
const NavBar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-sm navbar-dark bg-dark"
      >
        <div className="container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnH5eikbhX9ffzTKN0VisysB_mwUUPSJYWTQ&s" alt="" height={40} width={40} className='mx-3 rounded-5' />
            <NavLink className="navbar-brand" to="/">Movies</NavLink>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link " to="/" aria-current="page">Home
                            <span className="visually-hidden"></span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/add">Add Movie Here</NavLink>
                    </li>
                   
                </ul>
            </div>
        </div>
      </nav>
      
    </>
  )
}

export default NavBar
