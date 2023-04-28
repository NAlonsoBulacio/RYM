import './App.css';
import Cards from './components/cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {  Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';



function App() {

   const [characters, setCharacters] = useState([])
   const location = useLocation();

   const navigate = useNavigate();
const [access, setAccess] = useState(false);
const EMAIL = 'ejemplo@gmail.com';
const PASSWORD = '1password';

function login(userData) {
   if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
   }
}

useEffect(() => {
   !access && navigate('/');
}, [access]);




   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => response.data)
      .then(( data ) => {
         if(Number(id) > 826) return ('Error, no existe ese personaje!')
         if (data.name && !characters.some((character) => character.id === data.id)) {
            setCharacters((oldChars) => [...oldChars, data]);
         } 
         else {
            alert('Tenemos a este personaje en pantalla!');
         }

      });
   }
   

   const onClose = (id) => {
      const characterName = characters.find(character => character.id === Number(id))
      const charactersFiltered = characters.filter(character => character.id !== Number(id))
    setCharacters(charactersFiltered)  
    alert(`Eliminaste a ${characterName.name}`)
   }

   return (
      <div className='container'>
         {
         location.pathname !== '/' && <Nav onSearch={onSearch} /> 
         }
      <Routes>
         <Route path='/' element ={<Form login={login} />}></Route>
         <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
         <Route path='/about' element ={<About/>} />
         <Route path='/detail/:id' element={<Detail/>} />
      </Routes>
      </div>
   );
}

export default App;

