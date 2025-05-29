import React, {useState, useEffect} from 'react'
import Search from "./components/Search.jsx";
import Spinner from "./components/Spinner.jsx";
import MovieCard from "./components/MovieCard.jsx";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
}

const App = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [errorMsg, setErrorMsg] = useState('');
    const [movieList, setMovieList] = useState([])
    const [isLoading, setIsLoading] = useState(false);

    const fetchMovies = async() => {
        setIsLoading(true);
        setErrorMsg('');

        try{
            const endpoint= `${API_BASE_URL}/discover/movie?sort_by+popularity.desc`;

            const response = await fetch(endpoint, API_OPTIONS);

            if(!response.ok){
                throw new Error("Error fetching movies");
            }

            const data = await response.json();

            if(data.Response === "False"){
                setErrorMsg(data.Error || "Error fetching movies");
                setMovieList([]);
                return;
            }

            setMovieList(data.results || []);
            console.log(data);

        }
        catch(e){
            console.error(e, "ERROR");
            setErrorMsg("Error fetching movies");
        }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchMovies();

    }, []) //empty deps will mean that will only one run once, at loadtime

    return (
        <main>

            <div className="pattern"/>

            <div className="wrapper">
                <header>
                    <img src={"./public/hero.png"} alt="Hero Baner" />
                    <h1>Find <span className="text-gradient"> Movies </span>
                        You'll Enjoy Without The Hassle</h1>

                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </header>

                <section className={"all-movies"}>
                    <h2 className="mt-[40px]">All Movies</h2>


                    {isLoading ? (
                        <p className={"text-white"}>
                            <Spinner/>
                        </p>
                    ) : errorMsg ? (
                        <p className={"text-red-500"}>
                            {errorMsg}
                        </p>
                    ) : (
                        <ul>
                            {movieList.map((movie) => {
                                return (
                                    <MovieCard movie={movie}/>
                                )
                            })}
                        </ul>
                    )
                    }
                </section>
            </div>
        </main>
    )
}
export default App
