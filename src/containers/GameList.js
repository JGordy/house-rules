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

// setting the state of the filter based on an icon that is clicked
  handleFilterChange = (filter) => {
    this.setState({filter: filter});
  };

// Function for the api 'GET' call. Returns the entire game list
  componentDidMount() {
    this.props.getGameList();
  };

  render () {

    // map over game data array
    let gamesList;
    if (this.state.filter === 'all') {
      gamesList = this.props.gamesList.map((game) => {

        let gameCategory = game.category;
        let gameIcon;

        switch (gameCategory) {
          case "card":
            gameIcon = 'style';
            break;
          case "board":
            gameIcon = 'dashboard';
            break;
          case "dice":
            gameIcon = 'casino';
            break;
          case "recreational sports":
            gameIcon = "golf_course";
            break;
          default:
            gameIcon = "widgets"
        }

        return <div key={game.id} className="each_game card-block card">
                  <Link to={`/house-rules/games/${game.id}`}>
                    <div className="game_initial"><i className="material-icons group" id={game.category}>{gameIcon}</i></div>
                    <div>
                       <h4 className="game_title card-title">{game.title}</h4>
                       <p className="game_category"> {game.alternates.length < 1 ? "1 way to play" : `${game.alternates.length + 1} ways to play`} </p>
                    </div>
                 </Link>
               </div>;
      })
    } else {
      let filteredGames = this.props.gamesList.filter(game => {

        return game.category === this.state.filter;
      });
      gamesList = filteredGames.map((game) => {

        let gameCategory = game.category;
        let gameIcon;

        switch (gameCategory) {
          case "card":
            gameIcon = 'style';
            break;
          case "board":
            gameIcon = 'dashboard';
            break;
          case "dice":
            gameIcon = 'casino';
            break;
          case "recreational sports":
            gameIcon = "golf_course";
            break;
          default:
            gameIcon = "widgets"
        }

        return <div key={game.id} className="each_game card-block card">
                  <Link to={`/house-rules/games/${game.id}`}>
                    <div className="game_initial"><i className="material-icons group" id={game.category}>{gameIcon}</i></div>
                    <div>
                       <h4 className="game_title card-title">{game.title}</h4>
                       <p className="game_category">{game.alternates.length < 1 ? "1 way to play" : `${game.alternates.length + 1} ways to play`}</p>
                    </div>
                 </Link>
               </div>;
      })
    }
    return (
      <div className="GameList">

        <div className="filter-bar">
          <h5 className="filter_header"> Filter Game Types</h5>

          <Link to="#" onClick={() => this.handleFilterChange('all')}>
            <i className="material-icons all_games_filter">dns</i>
            <p><span className="">All</span></p>
          </Link>

          <Link to="#" onClick={() => this.handleFilterChange('card')}>
            <i className="material-icons card_hand">style</i>
            <p><span className="">Card</span></p>
          </Link>

          <Link to="#" onClick={() => this.handleFilterChange('board')}>
            <i className="material-icons">dashboard</i>
            <p><span className="">Board</span></p>
          </Link>

          <Link to="#" onClick={() => this.handleFilterChange('dice')}>
            <i className="material-icons">casino</i>
            <p><span className="">Dice</span></p>
          </Link>

          <Link to="#" onClick={() => this.handleFilterChange('recreational sports')}>
            <i className="material-icons">golf_course</i>
            <p><span className="">Sports</span></p>
          </Link>

        </div>

        {gamesList}

        <div>
          <Link to='/house-rules/newGame'>
            <i className="material-icons md-36 FAB">add</i>
          </Link>
        </div>
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
