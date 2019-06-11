import React from 'react';
import Character from './Character';



function CharacterList(props) {
	console.log(props)
	return (
		<div className="character-list">
			{ props.starwarsChars.map(character => {
				return (
					<div>
						<Character charName={ character.name } />
						<Character charHeight={ character.height } />
						<Character charMass={ character.mass } />
					</div>
        );
			})}
		</div>
	)
}

export default CharacterList;


