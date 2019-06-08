import React from 'react';
import Character from './Character';



function CharacterList(props) {
	console.log(props)
	return (
		<div className="character-list">
			{ props.starwarsChars.map(character => {
				return (
					<Character charName={character.name} /> 
				);
			})}
		</div>
	);
}

export default CharacterList;


// props.starwarsChars.results 