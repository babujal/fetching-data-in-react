import React, { useEffect, useState } from "react"
import axios from 'axios'
import '../App.css'

const Starships = (props) => {

    console.log('Component props:', props.starShips)

    if (props.starShips) {
        const starShips = props.starShips
        return (
            <>
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