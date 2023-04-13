import React from 'react'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">
            <li className="nav-item active">
                <a className="nav-link text-black text-uppercase ml-5" href="/">
                    Map Query&nbsp;<i class="fas fa-home"></i> <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-black text-uppercase ml-5" href="/Stats">Stats </a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-black text-uppercase ml-5" href="/Prediction">Prediction </a>
            </li>
            <li className="nav-item">
                <a className="nav-link text-black text-uppercase ml-5" href="/About">About Us </a>
            </li>
            </ul>

            {/*<form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>*/}
        </div>
        </nav>
    )
}
