import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AddAlternate from '../components/AddAlternate';

export default class SingleGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {},
      alternates: []
    }
    this.arrowToggle = this.arrowToggle.bind(this);
  }

  arrowToggle() {
    var backArrow = document.getElementById('myArrow');
    if (backArrow.className === "material-icons") {
      backArrow.className += " rotate";
    } else {
      backArrow.className = "material-icons";
    }
  }


  handleDeleteGame = (gameId) => {
    fetch(`https://house-rules-jgwrbs.herokuapp.com/api/game/${gameId}/delete`, {
      method: "DELETE"
    })
    .then(response => {
      console.log("DELETE SUCCESSFUL: ", response);
    })
    .catch(error => {
      console.log("Failure to delete: ", error);
    })
    this.props.history.push('/House_Rules/games');
  }


  componentDidMount() {
    let match = this.props.match;
    const id = match.params.id;
    const URL = `https://house-rules-jgwrbs.herokuapp.com/api/game/${id}`;
    fetch(URL)
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({game: data, alternates: data.alternates})
    })
  }

  render() {
    let game = this.state.game;
    let gameCategory = this.state.game.category;
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

    let alternatesList = this.state.alternates.map((game) => {
      return (
        <div className="each_alternate card-block" key={game.id}>
          <div className="alt_game_label">
            <div>
              <h3 className="alternate_initial">{game.title[0]}</h3>
            </div>
            <div>
              <h4 className="alternate_title">{game.title}</h4>
            </div>

            <button className='btn arrowButton' data-toggle="collapse" data-target={"#" + game.id}><i className="material-icons" id="myArrow">add</i></button>
          </div>

          <div id={game.id} className="collapse alt_rules">
            <h5 className="game_labels">Objective</h5>
            <h4>{game.objective}</h4>
            <h5 className="game_labels">New Rules</h5>
            <p>{game.rules}</p>
          </div>

        </div>
      )
    })

    return (
      <div className="singleGame">
        <div className='card card-block'>
          <div className="title_block">
            <div>
              <h2 className='card-title alert'>{game.title}</h2>
            </div>
            <div className="arrow_container">
              <Link to='/House_Rules/games'>
                <i className="material-icons md-36">arrow_back</i>
              </Link>
            </div>
          </div>

          <div className='alert icon_bar'>
          <div>
            <i className="material-icons group" id={game.category}>{gameIcon}</i>
            <p>Category</p>
            <p>{game.category}</p>
          </div>
            <div>
              <i className="material-icons group">group</i>
              <p>Players</p>
              <p className=''>{game.numberOfPlayers}</p>
            </div>
            <div>
              <i className="material-icons face">face</i>
              <p>Ages</p>
              <p className=''>{game.playerAgeRange}</p>
            </div>
          </div>

          <div className='alert game_objective'>
            <h5>How to Win</h5>
            <p>{game.objective}</p>
          </div>

          <div className='house_rules alert normal_rules'>
            <div>
              <h4>Traditional rules</h4>
              <a className="alt_games_link" href="#altGamesList">...how about a different spin on the game?</a>
            </div>
          </div>

          <p id="game_rules">{game.rules}</p>

          <button className='btn arrowButton' data-toggle="collapse" data-target="#demo"onClick={this.arrowToggle}>Add Rules<i className="material-icons" id="myArrow">add</i></button>

          <div id="demo" className="collapse">
            <AddAlternate game={this.state.game} history={this.props.history} arrowToggle={() => this.arrowToggle()} />
          </div>

          <div id="altGamesList">
            <h3 className="alt_list_header">House Rules</h3>
              {alternatesList}
          </div>

        </div>
        <Link to="#" id="delete_button" className="btn" onClick={() => this.handleDeleteGame(`${game.id}`)}><i className="material-icons">delete</i></Link>
      </div>
    );
  }
};
