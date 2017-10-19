import React, { Component } from 'react';

export default class GameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'card',
      objective: '',
      number_of_players: '1-2',
      player_age_range: '',
      original_rules: '',
      alternate_rules: ''
    }
  }

  handleUpdateState = (field) => {
    return (event) => {
      this.setState({[field]: event.target.value})
    }
  }

  handleSubmit = (endpoint) => {
    return (event) => {
    event.preventDefault();
    this.setState({
      title: event.target.value,
      category: event.target.value,
      objective: event.target.value,
      number_of_players: event.target.value,
      player_age_range: event.target.value,
      original_rules: event.target.value,
      alternate_rules: event.target.value
    })
    let gameItem = JSON.stringify(this.state);
    console.log("THIS.STATE", this.state);

    if ((this.state.title !== "") &&
        (this.state.category !== "") &&
        (this.state.objective !== "") &&
        (this.state.original_rules !== "") &&
        (this.state.alternate_rules !== "") &&
        (this.state.number_of_players !== "") &&
        (this.state.player_age_range !== "")) {
      console.log(this.state);
      fetch("https://dry-forest-51238.herokuapp.com/api/game/new",
        {
          method: "POST",
          body: gameItem,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).then(response => {
        console.log("RESPONSE: ", response);
      }).catch(err => {
        console.log("ERROR: ", err);
      })

      this.setState({
        title: '',
        category: 'card',
        objective: '',
        original_rules: '',
        alternate_rules: ''
      })
      console.log("GAMEFORM THIS.PROPS: ",this.props);
      this.props.history.push(endpoint);
    } else {
      console.log("na ah ah, you didnt say the magic word");
      this.setState({
        title: '',
        category: 'card',
        objective: '',
        original_rules: '',
        alternate_rules: ''
      })
    }
    }
  }

  render() {
    return (
      <div className="gameForm" onLoad={this.props.navToggle}>
          <div className="form-group">
            <input className="form-control" onChange={this.handleUpdateState('title')} value={this.state.title} placeholder="Game title" required autoFocus/>
          </div>
          <fieldset className="form-group">
           <legend>Game Category</legend>

           <div className="radio_buttons_cat">

             <div className="form-check">
               <label className="form-check-label">
                 <input type="radio" className="form-check-input" name="options1" id="optionsRadios1" value="card" checked={this.state.category === 'card'} onChange={this.handleUpdateState('category')} />
                  Card
               </label>
               <div className="check"><div className="inside"></div></div>
             </div>

             <div className="form-check">
             <label className="form-check-label">
                 <input type="radio" className="form-check-input" name="options1" id="optionsRadios2" value="board"
                 checked={this.state.category === 'board'} onChange={this.handleUpdateState('category')} />
                  Board
               </label>
               <div className="check"><div className="inside"></div></div>
             </div>

             <div className="form-check">
             <label className="form-check-label">
                 <input type="radio" className="form-check-input" name="options1" id="optionsRadios3" value="dice"
                 checked={this.state.category === 'dice'} onChange={this.handleUpdateState('category')} />
                  Dice
               </label>
               <div className="check"><div className="inside"></div></div>
             </div>

             <div className="form-check">
             <label className="form-check-label">
                 <input type="radio" className="form-check-input" name="options1" id="optionsRadios4" value="recreational sports" checked={this.state.category === 'recreational sports'} onChange={this.handleUpdateState('category')} />
                  Recreational Sports
               </label>
               <div className="check"><div className="inside"></div></div>
             </div>

           </div>
         </fieldset>



         <fieldset className="form-group">
          <legend>Number of Players</legend>

          <div className="radio_buttons_cat">

            <div className="form-check">
              <label className="form-check-label">
                <input type="radio" className="form-check-input" name="options2" id="optionsRadios5" value="1-2" checked={this.state.number_of_players === "1-2"} onChange={this.handleUpdateState('number_of_players')} />
                 1-2
              </label>
              <div className="check"><div className="inside"></div></div>
            </div>

            <div className="form-check">
            <label className="form-check-label">
                <input type="radio" className="form-check-input" name="options2" id="optionsRadios6" value="3-4"
                checked={this.state.number_of_players === "3-4"} onChange={this.handleUpdateState('number_of_players')} />
                 3-4
              </label>
              <div className="check"><div className="inside"></div></div>
            </div>

            <div className="form-check">
            <label className="form-check-label">
                <input type="radio" className="form-check-input" name="options2" id="optionsRadios7" value="5-6"
                checked={this.state.number_of_players === "5-6"} onChange={this.handleUpdateState('number_of_players')} />
                 5-6
              </label>
              <div className="check"><div className="inside"></div></div>
            </div>

            <div className="form-check">
            <label className="form-check-label">
                <input type="radio" className="form-check-input" name="options2" id="optionsRadios8" value="7+" checked={this.state.number_of_players === "7+"} onChange={this.handleUpdateState('number_of_players')} />
                 7+
              </label>
              <div className="check"><div className="inside"></div></div>
            </div>

          </div>
        </fieldset>






          <div className="form-group">
            <input className="form-control" onChange={this.handleUpdateState('objective')} value={this.state.objective} placeholder="Game Objective" required/>
          </div>
          <div className="form-group">
            <textarea className="form-control" onChange={this.handleUpdateState('original_rules')} value={this.state.original_rules} placeholder="Normal Rules" required></textarea>
          </div>
          <div className="form-group">
            <textarea className="form-control" onChange={this.handleUpdateState('alternate_rules')} value={this.state.alternate_rules} placeholder="House Rules" required></textarea>
          </div>
          <div className="form_submits">
            <button className="btn" onClick={this.handleSubmit('/games')}>Submit</button>
            <p className="another_game_link" onClick={this.handleSubmit('/newGame')}>or submit and add another game</p>
          </div>
      </div>
    )
  }
}
