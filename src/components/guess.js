import React from 'react';

export default function Guess(props) {
	console.log(props);
	const buttonTarget = (props.gameWon) ? 'restart game' : 'submit guess';
	if(props.gameWon){
		document.getElementById('user-guess').value='';
	}
	return (
		<div>
			<input id="user-guess"></input>
			<button id="submit" onClick={props.userGuessProp}>{buttonTarget}</button>
		</div>
	)
}