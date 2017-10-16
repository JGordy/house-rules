import React, { Component } from 'react';
// import {Link} from 'react-router-dom';

export default class SingleGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {}
    }
    this.arrowToggle = this.arrowToggle.bind(this);
  }

  arrowToggle() {
    var x = document.getElementById('myArrow');
    if (x.className === "material-icons") {
      x.className += " rotate";
    } else {
      x.className = "material-icons";
    }
  }

  componentDidMount() {
    let match = this.props.match;
    const id = match.params.id;
    const URL = `https://dry-forest-51238.herokuapp.com/api/game/${id}`;
    fetch(URL)
    .then(response => {
      return response.json()
    })
    .then(data => {
      this.setState({game: data})
    })
  }

  render() {
    console.log(this.props);
    let game = this.state.game;
    return (
      <div className="singleGame">
        <div className='card card-block'>
          <h2 className='card-title'>{game.title}</h2>
          <p className='game_category'>{game.category}</p>
          <h4>{game.objective}</h4>
          <p>{game.original_rules}</p>
          <div className='house_rules'>
            <button className='btn' data-toggle="collapse" data-target="#demo" onClick={this.arrowToggle}><i className="material-icons" id="myArrow">expand_more</i></button>
            <p id="demo" className="collapse alt_rules">{game.alternate_rules}</p>
          </div>
        </div>
      </div>
    );
  }
};
