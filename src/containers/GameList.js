import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: []
    }
  }

  componentDidMount() {
    fetch('https://dry-forest-51238.herokuapp.com/api/games')
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({games: data})
    })
  }

  render () {
    // map over game data array
    let gamesList = this.state.games.map((game) => {
      return <div key={game.id} className="each_game card-block card">
              <Link to={`/games/${game.id}`}>
              <div className="game_initial"><h3>{game.title[0]}</h3></div>
              <div>
               <h4 className="game_title card-title">{game.title}</h4>
               <p className="game_category">{game.category}</p>
              </div>
             </Link>
             </div>;
    })
    return (
      <div className="GameList">
        <h5 className="filter_header"> Filter Game Types</h5>
        <div className="filter-bar">
          <div>
          <i className="material-icons card_hand">style</i>
          <p>Card</p>
          </div>

          <div>
          <i className="material-icons">widgets</i>
          <p>Board</p>
          </div>

          <div>
          <i className="material-icons">casino</i>
          <p>Dice</p>
          </div>

          <div>
          <i className="material-icons">golf_course</i>
          <p>Rec Sports</p>
          </div>

        </div>
        {gamesList}
      </div>
    );
  }
}
