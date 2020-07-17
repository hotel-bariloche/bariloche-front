import React from 'react';
import './MemoryGame.css';
import Table from './Table';
import Header from './Header';
import construirBaraja from './utils/construirBaraja';
import InstructionMemory from './InstructionMemory';
import CloseButtonMemory from './CloseButtonMemory';


//import useWindowDimensions from './windowHandler'

// TESTING TO AVOID DOING ALL THE GAME UNTIL HAVING FINISHED :
//- change state.winner to "true"
//- delete the function set to calculte the result in Header.js

const initialState = () => {
  const deck = construirBaraja();
  return {
    deck,
    selectedCouple: [],
    itsComparing: false,
    tryes: 0,
    winner: false,
    score: 0,
  };
}

class MemoryGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState()
    console.log(construirBaraja)
  }

  render() {
    return(
      <div className="memory-body">
        <div className="memoryIcons">
            <div><InstructionMemory /></div>
            <div><CloseButtonMemory /></div>
          </div>
        <Header
        tryes={this.state.tryes}
        gameFinished={this.state.winner}
        resetGame={() => this.resetGame()}
        />
        <Table
        deck={this.state.deck}
        selectedCouple={this.state.selectedCouple}
        selectCard={(card) => this.selectCard(card)}
        />
      </div>
    )
  }
//method to select card
  selectCard(card){
    if (
      this.state.itsComparing ||
      this.state.selectedCouple.indexOf(card) > -1 ||
      card.wasGuessed
    ) {
      return;
    }

    const selectedCouple = [...this.state.selectedCouple, card];
    this.setState({
      selectedCouple
    });
    if (selectedCouple.length === 2) {
      this.compareCouple(selectedCouple)
    }
  }

  //method to compare the couple selected
  compareCouple(selectedCouple) {
    this.setState({itsComparing: true});
    setTimeout(() =>{
      const [firstCard, secondCard] = selectedCouple;
      let deck = this.state.deck;

      if(firstCard.icon === secondCard.icon) {
        deck = deck.map((card) => {
          if(card.icon !== firstCard.icon) {
            return card;
          }

          return {...card, wasGuessed: true}
        })
      }
      const score = Math.round(10 / this.props.tryes * 10)
      this.verifyIfWinner(deck);
      this.setState({
        selectedCouple :[],
        deck,
        itsComparing: false,
        tryes: this.state.tryes + 1,
        score
      })
    }, 1000)
  }

//method to verify if there is a winner
  verifyIfWinner(deck) {
    if (deck.filter((card) => !card.wasGuessed).length === 0) {
      if(this.context.state.user.results !== undefined){
        //SaveScore(this.state.correctAnswers, this.context.state.user.results[0].user_id, "memory_score")
    }
      this.setState({
          winner: true
      });
    }
  }

  //method to reset the game
  resetGame() {

    this.setState(
      initialState()
    );
  }
}

export default MemoryGame;
