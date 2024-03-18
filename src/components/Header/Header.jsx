import React from 'react'
import './style.css'

function Header() {
  return (
    <header >
      <nav class="navbar navbar-expand-lg bg-black">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><img src="https://be-practical.com/images/Be-logo.png" alt="" width={180}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Works</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">faqs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">one Place</a>
        </li>
      
      </ul>
      <form class="d-flex" role="search">
        <a class="btn btn-light p-2 px-5 fs-5 rounded-pill" type="submit" href='https://edubepractical4623.graphy.com/sessions/What-after-degree-65f7f229c26f7353cabdcf38'>Get Started</a>
      </form>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Header
