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
            <NavLink activeClassName="selected" className="Logo" to="/">House Rules</NavLink>
            <NavLink activeClassName="selected" className="GamesLink" to="/games">Games</NavLink>
            <NavLink activeClassName="selected" className="NewGameLink" to="/newGame">Add New Game</NavLink>
            <NavLink activeClassName="selected" className="LogOutLink" to="#about">Log Out</NavLink>
            <NavLink activeClassName="selected" to="javascript:void(0);" id='icon' className="icon" onClick={this.navToggle}>&#9776;</NavLink>
          </div>
        </header>
      </div>
    );
  }
};
