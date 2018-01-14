import React from 'react';
import { Link } from 'react-router';
import '../../styles/Header.css';
class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand" href="#">NewsPage</Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-md-0">
            <li className="nav-item">
              <Link className="nav-link active" href="#">World</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">U.S.</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">N.Y.</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Business</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Opinion</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Tech</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Science</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Health</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Sports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Arts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Style</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Food</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Travel</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="#">Magazine</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
            <button className="btn btn-outline my-2 my-sm-0" type="submit"><i className="fa fa-search"></i></button>
          </form>
        </div>
      </nav>
    )
  }
}

export default Header;
