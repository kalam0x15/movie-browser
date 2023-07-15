import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import Search from './components/search';
import MovieView from './components/movieview';
import { Route ,Routes } from 'react-router-dom';
import { useState , useEffect } from 'react';




function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');

  const api_key = "" //tmdb API key

  useEffect(()=>{
    if(searchText){
    fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=${api_key}`)
      .then(response=>response.json())
      .then(data=>{
        setSearchResults(data.results)
      })}

  },[searchText])

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/search' element={<Search keyword={searchText} searchResults={searchResults}/>} />
        <Route path='/movies/:id' element={<MovieView/>}/>
      </Routes>
     
          
  
    </div>
  );
}

export default App;
