//import {useState} from 'react';

function PokemonList({ pokedex }) {
  return (
    <>
      {pokedex.map((pokemon) => (
        <li key={pokemon.number}>{pokemon.name}</li>
      ))}
    </>
  );
}

export default PokemonList;
