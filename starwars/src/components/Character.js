import React from 'react';
// import CharacterList from './CharacterList';


function Character(props) {
	return (
		<div className="char">
			<p className="name-style"> {props.charName}</p>
			<p className="height-style">{props.charHeight}</p>
			<p className="mass-style">{props.charMass}</p>
		</div>
	);
}

export default Character;
