import React from 'react';

export default function PreviousGuesses(props) {

	const guesses = props.previousGuesses.map((item, index) => {
		return (
			<span key={index}>{item} </span>
		)
	})

	return (
		<div>
			Previous Guesses: {guesses}
		</div>
	)
}