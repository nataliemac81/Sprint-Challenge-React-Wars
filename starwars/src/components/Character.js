import React from 'react';
import CharacterList from './CharacterList';


function Character(props) {
	return (
		<div className="char">
			<p className="name-style">{props.charName}</p>
		</div>
	);
}

export default Character;
