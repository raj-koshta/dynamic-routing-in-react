import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from '../components/UI/Card';

const Movie = () => {

  const movieStyle = {
    padding: "9.6rem 2.4rem",
    display: "grid",
    height: "15.6rem",
    gridTemplateColumns: "repeat(4, 1fr)",

  }

  const moviesData = useLoaderData();
    return(
      <ul style={{display: "grid", gridTemplateColumns: "repeat(4, 1fr)"}}>
      {moviesData &&
        moviesData.Search.map((curMovie) => {
          return <Card key={curMovie.imdbID} curMovie={curMovie} />;
        })}
    </ul>
    )
}

export default Movie
