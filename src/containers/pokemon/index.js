import React, {useState, useEffect} from 'react';
import Loader from '../../components/loader';
import Pokemon from '../../components/pokemon';
import Pagination from '../../components/pagination';

import PokeService from '../../services/pokeservice';

import './pokemon-container.css';
import pokeservice from '../../services/pokeservice';



const PokemonContainer = () => {

  //const pokemons = loadPokemons();

  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);

  const loadPokemons = (pokemons) => {
    
  }

  useEffect(() => {
    console.log("boi");
    setLoading(true);
    setPage(page);
    pokeservice.getPokemons(page)
      .then(response => {
        console.log("response");
        console.log(response);
        setLoading(false);
        setPokemons(response);
      })
      .catch(error => {
        setLoading(false);
        console.log("Fetch failed", error);
      });
  }, [page]);

  const changePage = (newPage) => {
    setPage(newPage > 0 ? newPage : 0);
  }

  return (
    <div className="pokemon-container">
      {
        loading ?
          <Loader /> :
          <div style={{textAlign: "center"}}>
            {
              pokemons.map(pokemon => {
                return <Pokemon pokemon={pokemon} />
              })
            }
            <Pagination nextPage={changePage} previousPage={changePage} page={page} />
          </div>
      } 
    </div>
  )
};

export default PokemonContainer;