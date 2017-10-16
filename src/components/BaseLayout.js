import React, { Component } from 'react';
// import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default class BaseLayout extends Component {
  constructor(props) {
    super(props);
  //bind function for navbar here
  this.navToggle = this.navToggle.bind(this);
  }

  navToggle() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
          x.className += " responsive";
      } else {
          x.className = "topnav";
      }
  }

  render () {
    return (
      <div className='BaseLayout'>

          <nav className="topnav" id="myTopnav">

            <Link className="Logo" to='/'>House Rules</Link>

            <Link
            className="GamesLink" to='/games'><i className="material-icons">casino</i>Games
            </Link>

            <Link className="NewGameLink" to='/newGame'><i className="material-icons">add</i>Add New Game</Link>

            <Link className="LogOutLink" to="/"><i className="material-icons">chevron_left</i>Log Out</Link>

            <div id='icon' className="icon" onClick={this.navToggle}>&#9776;</div>
          </nav>
            {this.props.children}
      </div>
    );
  }
};
