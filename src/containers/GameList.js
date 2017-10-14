import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class GameList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     games: []
  //   }
  // }

  // componentDidMount() {
  //   fetch('https://dry-forest-51238.herokuapp.com/api/games')
  //   .then(response => {
  //     return response.json()
  //   })
  //   .then(data => {
  //     console.log("DATA: ", data);
  //     this.setState({games: data})
  //   })
  // }

  render () {
    // map over game data array
    return (
      <div className="GameList">
        <h1>GameList Component</h1>
      </div>
    );
  }
}
