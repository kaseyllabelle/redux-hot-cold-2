import React from 'react';
import {connect} from 'react-redux';
import Guess from './guess';
import Feedback from './feedback';
import PreviousGuesses from './previousGuesses';
import {setUserGuess, setNewGame} from '../actions/game.actions';

export class Game extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			gameWon: false
		};
	}

	userGuessFnc = () => {
		const guessedNumber = parseInt(document.getElementById('user-guess').value, 10);
		if(this.state.gameWon){
			this.props.restartGame();
			this.setState({
				gameWon: false
			});
			return false
		}
		if(guessedNumber === this.props.randomNumber){
			this.setState({
				gameWon: true
			})
		};
		this.props.updateGuesses(guessedNumber);
	}

	render() {
		const feedbackProp = (this.props.userGuess.length) ? this.props.userGuess[this.props.userGuess.length - 1] : 0;
		return (
			<div>
				{this.props.randomNumber}
				<Guess userGuessProp={this.userGuessFnc} gameWon={this.state.gameWon} />
				<PreviousGuesses previousGuesses={this.props.userGuess} />
				<Feedback feedbackProp={feedbackProp} randomNumber={this.props.randomNumber} />
			</div>
		);
	}
}

const mapStateToProps = state => ({
	randomNumber: state.randomNumber,
	userGuess: state.userGuess
});

const mapDispatchToProps = dispatch => ({
	updateGuesses: (guessed) => {
		return dispatch(setUserGuess(guessed))
	},
	restartGame: () => {
		return dispatch(setNewGame())
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);