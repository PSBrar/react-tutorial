import { useState } from 'react'
import './App.css'

//function App() {}

// using the props title below to change what's displayed in the card component

const Card = ({ title }) => {
    const [hasLiked, setHasLiked] = useState(false);

    return(
        /*<div style={{
            border: '1px solid black',
            padding: '20px',
            margin: '10px',
            backgroundColor: 'lightblue',
            borderRadius: '10px',
            minHeight: '100px',
        }
        }>*/

        //curly braces make the thing dynamic


        <div className="card">
            <h2>{title}</h2>
            <button onClick={() => setHasLiked(!hasLiked)}>
                {hasLiked ? 'Liked' : 'Like'}
            </button>
        </div>
    )
}

const App = () => {


    return (
      <div className="card-container">
          <Card title = "F&F" actors = {[{name:'Actors'}]}></Card>
          <Card title = "Lion King"></Card>
          <Card title = "Avatar"></Card>
      </div>

    )
}

//props are basically arguments that you can pass to a java function
//props are typically passed onto child nodes from parents


export default App
