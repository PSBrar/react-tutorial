import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//function App() {}

// using the props title below to change what's displayed in the card component

const Card = ({ title }) => {
    return(
        <div>
            <h2>{title}</h2>
        </div>
    )
}

const App = () => {
  return (
      <div>
      <h2>Functional arrow component</h2>

          <Card title = "F&F" actors = {[{name:'Actors'}]}></Card>
          <Card title = "Lion King"></Card>
          <Card title = "Avatar"></Card>
      </div>

  )
}

//props are basically arguments that you can pass to a java function
//props are typically passed onto child nodes from parents


export default App
