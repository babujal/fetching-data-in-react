import { useEffect, useState } from 'react'
import { Link, Route, Routes } from "react-router-dom"
import Starships from './Components/starships'
import StarshipSearch from './Components/StarshipSearch'
import axios from 'axios'
import './App.css'

function App() {
  const [starShips, setStarShips] = useState([])
  const [starShip, setStarShip] = useState()

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/starships/')
      .then(v => {
        setStarShips(v.data.results)
      })
      .catch(error => {
        console.log('Error:', error)
      })
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<Starships starShips={starShips} />}/>
        <Route path='/search' element={<StarshipSearch starShips={starShips} />}/>
      </Routes>
    </>
  )
}

export default App
