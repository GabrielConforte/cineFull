import React from 'react'
import { Link } from 'react-router-dom'
export default function Navegation() {
    return (
        <div className="m-md-2 m-sm-0">
          <nav className="navbar navbar-expand-md navbar-dark bg-dark" aria-label="Fourth navbar example">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsDrop" aria-controls="navbarsDrop" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

      <div className="collapse navbar-collapse" id="navbarsDrop">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
          <Link className="nav-link"  to="/"> HOME </Link>
          </li>
          
        </ul>
        
      </div>
    </div>
  </nav></div>

    )
}
