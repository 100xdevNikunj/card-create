import { useState } from 'react'
import './App.css'
import CardInput from './components/CardInput'
import ShowCard from './components/ShowCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CardInput />
      <ShowCard />
    </>
  )
}

export default App
