import React from 'react'
import { NavLink, useLoaderData, useParams } from 'react-router-dom'

const MovieDetails = () => {

    const movieData = useLoaderData();
    console.log(movieData);
    const { Title, Plot, Poster, Writer, imdbRating, Released, Actors } = movieData;

    return (

        <div className='row'>
            <div className='col-3 ms-5 mt-5' style={{ marginBottom: "150px" }}>
                <div className="card" style={{ width: "18rem" }}>
                    <img src={Poster} className="card-img-top rounded-3" />
                    <div className="card-body text-center fw-bold fs-4">
                        <NavLink to={"/dynamic-routing-in-react"} className="card-link">{Title}</NavLink>
                    </div>
                </div>
            </div>
            <div className='col-6' style={{marginTop: "70px"}}>
                <ul className="list-group list-group-flush">
                    <h5 className="card-title">{Title}</h5>
                    <p className="card-text">{Plot}</p>
                    <p className="card-text"><b>Actors :</b> {Actors}</p>
                    <hr />
                    <p className="card-text"><b>Writer :</b> {Writer}</p>
                    <hr />
                    <p className="card-text"><b>Released :</b> {Released}</p>
                    <hr />
                    <p className="card-text"><b>Rating :</b> {imdbRating}</p>
                </ul>
            </div>
        </div>
    )
}

export default MovieDetails
