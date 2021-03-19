import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';

import { BASE_URL } from './mocks/constant'


const App = () => {
  const [character, setCharacter] = useState([])
  
  useEffect(() => {
   
      axios.get(`${BASE_URL}`)
      .then(res => {
        const char = res.data
        setCharacter(char)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  


  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      { character.map( char => {
        return <Character key={char.id} person={char} />
   })}
    </div>
  );
}

export default App;
