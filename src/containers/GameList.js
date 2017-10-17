import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getGameList } from '../actions/action';
import { Link } from 'react-router-dom';

class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      games: [],
      filter: 'all'
    }
  }

// filtering game list data
  generateGameList = (filter) => {
    // if (filter === 'all') {
    //   this.setState({games: this.props.gamesList});
    // } else {
    //   let filteredGames = this.props.gamesList.filter(game => {
    //     return game.category === filter;
    //   });
    //   console.log("filteredGames", filteredGames)
    //   this.setState({games: filteredGames});
    // }
    this.setState({filter: filter});
  };

  componentDidMount() {
    this.props.getGameList();
  }

  render () {
    // map over game data array
    // console.log('THIS.STATE.GAMES: ', this.state.games);
    // console.log('THIS.PROPS.gamesList:', this.props.gamesList);
    let gamesList;

    if (this.state.filter === 'all') {
      gamesList = this.props.gamesList.map((game) => {
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
    } else if (this.state.filter !== 'all') {
      let filteredGames = this.props.gamesList.filter(game => {
        return game.category === this.state.filter;
      });
      gamesList = filteredGames.map((game) => {
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
    }
    return (
      <div className="GameList">
        <h5 className="filter_header"> Filter Game Types</h5>
        <div className="filter-bar">

          <Link to="#" onClick={() => this.generateGameList('all')}>
          <i className="material-icons all_games_filter">dns</i>
          <p><span className="">All</span></p>
          </Link>

          <Link to="#" onClick={() => this.generateGameList('card')}>
          <i className="material-icons card_hand">style</i>
          <p><span className="">Card</span></p>
          </Link>

          <Link to="#" onClick={() => this.generateGameList('board')}>
          <i className="material-icons">dashboard</i>
          <p><span className="">Board</span></p>
          </Link>

          <Link to="#" onClick={() => this.generateGameList('dice')}>
          <i className="material-icons">casino</i>
          <p><span className="">Dice</span></p>
          </Link>

          <Link to="#" onClick={() => this.generateGameList('recreational sports')}>
          <i className="material-icons">golf_course</i>
          <p><span className="">Rec Sports</span></p>
          </Link>

        </div>
        {gamesList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {

  return {
    gamesList: state.gamesList,
    filter: state.filter
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getGameList: () => dispatch(getGameList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameList);
