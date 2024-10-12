import { useEffect, useState } from 'react'
import { Link, Route, Routes } from "react-router-dom"
import Starships from './Components/starships'
import StarshipSearch from './Components/StarshipSearch'
import axios from 'axios'
import './App.css'

function App() {
  const [starShips, setStarShips] = useState([])
  const [starShip, setStarShip] = useState(
    {
      name: '',
      starship_class: '',
      manufacturer: '',
      model: ''
    }
  )

  useEffect(() => {
    console.log('Ship found:', starShip)
  }, [starShip])

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
        <Route path='/' element={<Starships starShips={starShips} setStarShip={setStarShip}/>}/>
        <Route path='/result' element={<StarshipSearch starShip={starShip} setStarShip={setStarShip}/>}/>
      </Routes>
    </>
  )
}

export default App
