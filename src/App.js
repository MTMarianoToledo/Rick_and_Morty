import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav/Nav';
import { useState } from 'react';

const example = {
   id: 1,
   name: 'Rick Sanchez',
   status: 'Alive',
   species: 'Human',
   gender: 'Male',
   origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
   },
   image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};
 

function App() {

   const onSearch = () => {
      setCharacters ([...characters, example])
   }

   const [characters, setCharacters] = useState([])
   return (
      <div className='App'>
         <Nav onSearch = {onSearch} />
         <Cards characters={characters} />
         <Card onClose={() => window.alert('Emulamos que se cierra la card')} />
      </div>
   );
}

export default App;
