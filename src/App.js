import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [movieState, setMovieState] = useState([]);

  useEffect(() => {
    let movies= 'https://api.themoviedb.org/3/search/movie?api_key=7b02a951e8d6e43b5301954a6131550b&query=list'
    axios.get(movies)
    .then((response) => {
      console.log(response.data.results);
      if(response.data.results.length !== 0){
        setMovieState(response.data.results)
      }
    })
    .catch((c1) => console.log(c1))

    console.log("movies",movieState)
  },[]);


  function onClickHandler(id) {

    let movies1= 'https://api.themoviedb.org/3/movie/'+ id +'?api_key=7b02a951e8d6e43b5301954a6131550b&query=list'
    axios.get(movies1)
    .then((response) => {
      console.log(response.data);
      // if(response.data.results.length !== 0){
        console.log(response.data)
        // setMovieState(response.data.results)
      // }
    })
    .catch((c1) => console.log(c1))

    console.log("movies",movieState)
  }

   

  return (
    <div style={{display:'grid', gridAutoRows:'500px', gridTemplateColumns:'repeat(3, 1fr)', padding:10}}>
      {movieState.length !== 0 ? movieState.map((item,i) => {
        return (
          <div style={{width:430, height:420, padding:10, margin:10}} key={i} onClick={() => onClickHandler(item.id)}>
            <img src={'https://image.tmdb.org/t/p/original'+item.poster_path} width={430} height={300} />
            <p>Title: {item.title}</p>
            <p>Ratings: {item.vote_average}</p>
            <p>Release Date: {item.release_date}</p>

          </div>
        )

      }) : null}
      
    </div>
  );
}

export default App;
