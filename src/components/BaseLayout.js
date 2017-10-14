import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
        <header>
          <div className="topnav" id="myTopnav">

            <NavLink activeClassName="selected" className="Logo" exact to='/'>House Rules</NavLink>

            <NavLink activeClassName="selected"
            className="GamesLink" exact to='/games'>Games
            </NavLink>

            <NavLink activeClassName="selected" className="NewGameLink" exact to='/newGame'>Add New Game</NavLink>

            <NavLink activeClassName="selected" className="LogOutLink" exact to="/">Log Out</NavLink>

            <div id='icon' className="icon" onClick={this.navToggle}>&#9776;</div>
          </div>
        </header>
      </div>
    );
  }
};
