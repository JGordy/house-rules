import React, { Component } from 'react';

export default class GameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'card',
      objective: '',
      original_rules: '',
      alternate_rules: ''
    }
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleObjectiveChange = this.handleObjectiveChange.bind(this);
    this.handleOriginalRulesChange = this.handleOriginalRulesChange.bind(this);
    this.handleAlternateRulesChange = this.handleAlternateRulesChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    })
  }

  handleCategoryChange(event) {
    this.setState({
      category: event.target.value
    })
  }

  handleObjectiveChange(event) {
    this.setState({
      objective: event.target.value
    })
  }

  handleOriginalRulesChange(event) {
    this.setState({
      original_rules: event.target.value
    })
  }

  handleAlternateRulesChange(event) {
    this.setState({
      alternate_rules: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      title: event.target.value,
      category: event.target.value,
      objective: event.target.value,
      original_rules: event.target.value,
      alternate_rules: event.target.value
    })
    let gameItem = JSON.stringify(this.state);
    console.log("THIS.STATE", this.state);

    if ((this.state.title !== "") && (this.state.category !== "") && (this.state.objective !== "") && (this.state.original_rules !== "") && (this.state.alternate_rules !== "")) {
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
      this.props.history.push('/games');
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

  render() {
    return (
      <div className="gameForm" onLoad={this.props.navToggle}>
          <div className="form-group">
            <input className="form-control" onChange={this.handleTitleChange} placeholder="Game title" required autofocus/>
          </div>
          <fieldset className="form-group">
           <legend>Game Category</legend>

           <div className="radio_buttons_cat">

             <div className="form-check">
               <label className="form-check-label">
                 <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios1" value="card" checked={this.state.category === 'card'} onChange={this.handleCategoryChange} />
                  Card
               </label>
               <div className="check"><div className="inside"></div></div>
             </div>

             <div className="form-check">
             <label className="form-check-label">
                 <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios2" value="board"
                 checked={this.state.category === 'board'} onChange={this.handleCategoryChange} />
                  Board
               </label>
               <div className="check"><div className="inside"></div></div>
             </div>

             <div className="form-check">
             <label className="form-check-label">
                 <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios3" value="dice"
                 checked={this.state.category === 'dice'} onChange={this.handleCategoryChange} />
                  Dice
               </label>
               <div className="check"><div className="inside"></div></div>
             </div>

             <div className="form-check">
             <label className="form-check-label">
                 <input type="radio" className="form-check-input" name="optionsRadios" id="optionsRadios3" value="recreational sports" checked={this.state.category === 'recreational sports'} onChange={this.handleCategoryChange} />
                  Recreational Sports
               </label>
               <div className="check"><div className="inside"></div></div>
             </div>

           </div>
         </fieldset>
          <div className="form-group">
            <input className="form-control" onChange={this.handleObjectiveChange} placeholder="Game Objective" required/>
          </div>
          <div className="form-group">
            <textarea className="form-control" onChange={this.handleOriginalRulesChange} placeholder="Normal Rules" required></textarea>
          </div>
          <div className="form-group">
            <textarea className="form-control" onChange={this.handleAlternateRulesChange} placeholder="House Rules" required></textarea>
          </div>
          <button className="btn" onClick={this.handleSubmit}>Submit</button>

      </div>
    )
  }
}
