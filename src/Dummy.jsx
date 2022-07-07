import React, { useReducer } from 'react';

const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return state + 1;
		case 'decrement':
			return state - 1;
		default:
			return state;
	}
};

export const Dummy = () => {
	const [count, dispatch] = useReducer(reducer, 0);

	return (
		<div>
			{count}
			<button onClick={() => dispatch({ type: 'increment' })}>
				Increment
			</button>
			<button onClick={() => dispatch({ type: 'decrement' })}>
				Decrement
			</button>
		</div>
	);
};
