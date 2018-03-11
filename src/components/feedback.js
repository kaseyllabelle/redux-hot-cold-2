import React from 'react';

export default function Feedback(props) {
	console.log(props);

    const difference = Math.abs(props.feedbackProp - props.randomNumber);

    let feedback;
    if (difference >= 50) {
      feedback = 'You\'re Ice Cold...';
    } else if (difference >= 30) {
      feedback = 'You\'re Cold...';
    } else if (difference >= 10) {
      feedback = 'You\'re Warm.';
    } else if (difference >= 1) {
      feedback = 'You\'re Hot!';
    } else {
      feedback = 'Winner! Winner! Chicken dinner!';
    }
    if (!props.feedbackProp) {
    	feedback = '';
    }

	return (
		<div>
			{feedback}
		</div>
	)
}