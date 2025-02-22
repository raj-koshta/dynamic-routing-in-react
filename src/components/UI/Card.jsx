import React from 'react'
import "./Card.css"
import { NavLink } from 'react-router-dom'

const Card = ({ curMovie }) => {
    const { Poster, imdbID, Title } = curMovie
    return (
        <li className="hero-container">
            <div className="main-container">
                <div className="poster-container">
                    <img src={Poster} className="poster" alt={imdbID} />
                </div>
                <div className="ticket-container">
                    <div className="ticket__content">
                    <NavLink to={`/dynamic-routing-in-react/movie/${imdbID}`}>
                        <button className="ticket__buy-btn">Watch Now</button>
                    </NavLink>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Card
