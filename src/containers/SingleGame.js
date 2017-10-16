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

          <h3 className='card-title'>{game.title}</h3>

          <p className='game_category'>{game.category}</p>

          <h4>How to Win: <span>{game.objective}</span></h4>


          <div className='house_rules alert normal_rules'>
            <p><span>The normal rules:</span><br/>{game.original_rules}</p>
            <button className='btn' data-toggle="collapse" data-target="#demo" onClick={this.arrowToggle}><i className="material-icons" id="myArrow">expand_more</i></button>
          </div>

          <p id="demo" className="collapse alt_rules alert"><span>The house rules:</span><br/>{game.alternate_rules}</p>

        </div>
      </div>
    );
  }
};
