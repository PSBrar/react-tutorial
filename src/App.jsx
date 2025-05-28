import {useEffect, useState} from 'react'
import './App.css'

//function App() {}

// using the props title below to change what's displayed in the card component

const Card = ({ title }) => {
    const [count, setCount] = useState(0)


    //useState is a hook, allowing for states, this is the way to make it
    const [hasLiked, setHasLiked] = useState(false);

    useEffect(() => {
        console.log(`${title} has been liked ${hasLiked} times`);
    }, [hasLiked, title]); //deps allow use to only run this useEffect if the var passed in changes

    useEffect(() => {
        console.log('card rendered')
    }, []);



    return(
        //inline styles take priority over css in files, something to remember
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



        //something to remember is to never alter the value of the state by using the state itself
        //instead use another () function and alter the prevState
        <div className="card" onClick={() => setCount((prevState) => prevState+1) }/*onClick={() => setCount(count + 1)}*/>
            <h2>{title} <br/> {count ? count: null}</h2>
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
