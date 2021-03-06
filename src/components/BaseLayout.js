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
  navToggle(endpoint) {
      let navBar = document.getElementById("myNavBar");
      let icon = document.getElementById("icon");

      if ((navBar.className === "topnav") &&
          (endpoint !== "/house-rules/")) {
          navBar.className += " responsive";
      } else {
          navBar.className = "topnav";
      }

      if ((icon.className === "icon") &&
          (endpoint !== "/house-rules/")) {
        icon.className += " rotate";
      } else {
        icon.className = "icon";
      }
  }

  // this function handles the navigation and then calls the navToggle above to close the navbar
  handleNaviagation = (endpoint) => {
    this.props.history.push(endpoint)
    this.navToggle(endpoint);
  }

  render () {
    return (
      <div className='BaseLayout'>

          <nav className="topnav" id="myNavBar">

            <Link className="Logo" to='#' onClick={() => this.handleNaviagation('/house-rules/')}>
            <img src={require('../images/house-rules-white.png')} alt="#"/>
            <span>House Rules</span></Link>

            <Link
            className="GamesLink" to='#' onClick={() => this.handleNaviagation('/house-rules/games')}>
              <i className="material-icons">casino</i>
              Games
            </Link>

            <Link className="NewGameLink" to='#'
            onClick={() => this.handleNaviagation('/house-rules/newGame')}>
              <i className="material-icons">add</i>
              Add Game
            </Link>

            <Link className="AboutLink" to='#' onClick={() => this.handleNaviagation('/house-rules/about')}>
              <i className="material-icons">local_library</i>
              About
            </Link>

            <Link className="LogOutLink" to="#" onClick={() => this.handleNaviagation('/house-rules/')}>
              <i className="material-icons">chevron_left</i>
              Log Out
            </Link>

            <div id='icon' className="icon" onClick={this.navToggle}>&#9776;</div>
          </nav>

            {this.props.children}

      </div>
    );
  }
};

export default withRouter(BaseLayout);
