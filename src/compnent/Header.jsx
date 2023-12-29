import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
<div className='header'>
 <nav class="navbar navbar-expand-lg navbar-light bg-danger py-3">
    <div class="container">
    <a class="navbar-brand text-white fw-bold" href="#"  style={{fontSize:"20px"}}>Crud Operation</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <Link to="/update" class="nav-link active text-white fw-bold" style={{fontSize:"20px"}} href="#">Update</Link>
        </li>
        <li class="nav-item">
          <Link to="/" class="nav-link text-white fw-bold" href="#"  style={{fontSize:"20px"}}>Read</Link>
        </li>
        <li class="nav-item">
          <Link to="/create" class="nav-link text-white fw-bold" href="#"  style={{fontSize:"20px"}}>Create</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
