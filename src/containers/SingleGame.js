import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SingleGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {},
      alternates: []
    }
    this.arrowToggle = this.arrowToggle.bind(this);
    this.handleDeleteGame = this.handleDeleteGame.bind(this);
  }

  arrowToggle() {
    var backArrow = document.getElementById('myArrow');
    if (backArrow.className === "material-icons") {
      backArrow.className += " rotate";
      this.props.history.push('#demo');
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
    this.props.history.push('/games');
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
      console.log("SingleGame data: ", data);
      this.setState({game: data, alternates: data.alternates})
    })
  }

  render() {
    console.log("THIS.STATE.GAME.ALTERNATES: ", this.state.game.alternates
);
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
        <div key={game.id}>
          <h4>{game.title}</h4>
          <h5>{game.objective}</h5>
          <p>{game.rules}</p>
        </div>
      )
    })

    return (
      <div className="singleGame">
        <div className='card card-block'>
          <div className="title_block">
            <div>
              <h2 className='card-title alert'>{game.title}</h2>
              {/*<p className='game_category alert'>{game.category}</p>*/}
            </div>
            <div className="arrow_container">
              <Link to='/games'>
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
            <h5>How to Win:</h5>
            <p>{game.objective}</p>
          </div>

          <div className='house_rules alert normal_rules'>
            <div>
              <h4>The normal rules:</h4>
              <p>{game.rules}</p>
            </div>
            <button className='btn' data-toggle="collapse" data-target="#demo" onClick={this.arrowToggle}><i className="material-icons" id="myArrow">add</i></button>
          </div>

          <div id="demo" className="collapse alt_rules">
            <h4 className="alert">Add a form here later to add house rules variations</h4>
          </div>

          <div>
            {alternatesList}
          </div>

        </div>
        <Link to="#" id="delete_button" className="btn" onClick={() => this.handleDeleteGame(`${game.id}`)}><i className="material-icons">delete</i></Link>
      </div>
    );
  }
};
