import React, { useEffect, useState } from 'react';
import { Pokedex } from '../../../helpers/pokedex';

function Home(props) {
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		Pokedex.getPokemonsList({
			offset: 0,
			limit: 10,
		})
			.then(({ results }) =>
				Promise.all(results.map(result => Pokedex.getPokemonByName(result.name))),
			)
			.then(responses => setPokemons(responses));
	}, []);

	console.log(pokemons);

	return (
		<div>
			{pokemons.map(pokemon => (
				<div key={pokemon.name}>
					<div>{pokemon.name}</div>
					<img src={pokemon.sprites.front_default} alt={pokemon.name} />
				</div>
			))}
		</div>
	);
}

export default Home;
