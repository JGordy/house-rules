import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {withRouter} from "react-router-dom";

class BaseLayout extends Component {
  constructor(props) {
    super(props);
  //bind functions for navbar toggle and navigation here
  this.navToggle = this.navToggle.bind(this);
  }


  // opens and closes the nav bar on click
  navToggle() {
      var navBar = document.getElementById("myNavBar");
      if (navBar.className === "topnav") {
          navBar.className += " responsive";
      } else {
          navBar.className = "topnav";
      }
  }

  // this function handles the navigation and then calls the navToggle above to close the navbar
  handleNaviagation = (endpoint) => {
    this.props.history.push(endpoint)
    this.navToggle();
  }

  render () {
    return (
      <div className='BaseLayout'>

          <nav className="topnav" id="myNavBar">

            <Link className="Logo" to='#' onClick={() => this.handleNaviagation('/')}>House Rules</Link>

            <Link
            className="GamesLink" to='#' onClick={() => this.handleNaviagation('/games')}><i className="material-icons">casino</i>Games
            </Link>

            <Link className="NewGameLink" to='#'
            onClick={() => this.handleNaviagation('/newGame')}><i className="material-icons">add</i>Add Game</Link>

            <Link className="AboutLink" to='#' onClick={() => this.handleNaviagation('/about')}><i className="material-icons">local_library</i>About</Link>

            <Link className="LogOutLink" to="#" onClick={() => this.handleNaviagation('/')}><i className="material-icons">chevron_left</i>Log Out</Link>

            <div id='icon' className="icon" onClick={this.navToggle}>&#9776;</div>
          </nav>
            {this.props.children}
      </div>
    );
  }
};

export default withRouter(BaseLayout);
