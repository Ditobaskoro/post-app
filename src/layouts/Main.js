import React from 'react'
import { withRouter, Link } from 'react-router-dom'
import './main.css'


const NavBar = location => {
  return (
    <ul id="navbar">
      <li className={location.location.pathname === "/" ? 'active' : ''}>
        <Link to="/">Post List</Link>
      </li>
      <li className={location.location.pathname === "/new-post" ? 'active' : ''}>
        <Link to="/new-post">New Post</Link>
      </li>
      <li className={location.location.pathname === "/password-generator" ? 'active' : ''}>
        <Link to="/password-generator">Password Generator</Link>
      </li>
    </ul>
  )
}

const Main = ({location, children}) => {
    return (
      <div className="layout-container">
        <NavBar location={location}/>
        {children}
      </div>
    )
}

export default withRouter(Main)