import React from "react";
import { Link } from "react-router-dom"

const StarshipSearch = (props) => {
    const ship = props.starShip

    const handleResetState = () => {
        props.setStarShip(
            {
                name: '',
                starship_class: '',
                manufacturer: '',
                model: ''
            }
        )
    }

    return (
        <>
            <Link to='/' onClick={handleResetState}>Home</Link>
            <h2>Search Reasult</h2>
            <div className="cardsSpace">
                <div className="cardsDiv">
                    <div className="cardHeader"><h3>Starship:</h3></div>
                    <p><strong>Name:</strong> {ship.name}</p>
                    <p><strong>Class:</strong> {ship.starship_class}</p>
                    <p><strong>Manufacturer:</strong> {ship.manufacturer}</p>
                    <p><strong>Model:</strong> {ship.model}</p>
                </div>
            </div>
        </>
    )
}

export default StarshipSearch;