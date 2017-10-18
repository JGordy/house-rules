import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default class BaseLayout extends Component {
  constructor(props) {
    super(props);
  //bind function for navbar here
  this.navToggle = this.navToggle.bind(this);
  this.handleNaviagation = this.handleNaviagation.bind(this);
  }

  navToggle() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
          x.className += " responsive";
      } else {
          x.className = "topnav";
      }
  }

  handleNaviagation = (endpoint) => {
    console.log("BaseLayout THIS.PROPS.CHILDREN.PROPS.CHILDREN: ", this.props.children.props.children);
    // this.props.history.push(endpoint);
  }

  render () {
    return (
      <div className='BaseLayout'>

          <nav className="topnav" id="myTopnav">

            <Link className="Logo" to='#' onClick={this.handleNaviagation('/')}>House Rules</Link>

            <Link
            className="GamesLink" to='#' onClick={this.handleNaviagation('/games')}><i className="material-icons">casino</i>Games
            </Link>

            <Link className="NewGameLink" to='/newGame'><i className="material-icons">add</i>Add Game</Link>

            <Link className="AboutLink" to='#' onClick={this.handleNaviagation('/about')}><i className="material-icons">local_library</i>About</Link>

            <Link className="LogOutLink" to="#" onClick={this.handleNaviagation('/')}><i className="material-icons">chevron_left</i>Log Out</Link>

            <div id='icon' className="icon" onClick={this.navToggle}>&#9776;</div>
          </nav>
            {this.props.children}
      </div>
    );
  }
};
