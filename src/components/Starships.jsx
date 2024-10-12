import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import '../App.css'

const Starships = (props) => {

    console.log('Component props:', props.starShips)
    const navigate = useNavigate()

    if (props.starShips) {
        const starShips = props.starShips

        const handleSubmit = e => {
            e.preventDefault()
            const shipSearch = new FormData(e.target)
            const submitedString = shipSearch.get('starShip').toLowerCase()
            console.log(submitedString)
            axios
                .get(`https://swapi.dev/api/starships/?search=${submitedString}`)
                .then(v => {
                    console.log('Vdata accesing result:', v.data.results[0].name)
                    props.setStarShip(
                        {
                            name: v.data.results[0].name,
                            starship_class: v.data.results[0].starship_class,
                            manufacturer: v.data.results[0].manufacturer,
                            model: v.data.results[0].model
                        }
                    )
                    navigate('/result')
                })
            e.target.reset()
        }

        return (
            <>
                <h1>Starship Search:</h1>
                <form onSubmit={handleSubmit}>
                    Enter Ship Name: <input name="starShip" />
                    <button type="submit">Search</button>
                </form>
                <div className="title"><h1>Displaying {starShips.length} Starships:</h1></div>
                <div className="cardsSpace">
                    {props.starShips.map((ship, index) => {
                        return (
                            <div className="cardsDiv">
                                <div className="cardHeader"><h3>Starship:</h3></div>
                                <p><strong>Name:</strong> {ship.name}</p>
                                <p><strong>Class:</strong> {ship.starship_class}</p>
                                <p><strong>Manufacturer:</strong> {ship.manufacturer}</p>
                                <p><strong>Model:</strong> {ship.model}</p>
                            </div>

                        )
                    })}
                </div>
            </>
        )
    } else {
        return (
            <h1>Loading</h1>
        )
    }
}

export default Starships