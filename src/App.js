import React, { useEffect, useState } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [movies, Setmovies] = useState([]);

    const getMovies = async () => {
        const response = await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
        );
        const json = await response.json();
        Setmovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);

    console.log(movies);
    return <div>
        {loading ?
            <h1>Loading...</h1>
            : (
                <div>
                    {movies.map(item =>
                        <div key={item.id}>
                            <img src={item.medium_cover_image} />
                            <h2>{item.title}</h2>
                            <ul>
                                {item.genres.map(g =>
                                    <li key={g}>{g}</li>)}
                            </ul>
                            <p>{item.summary}</p>
                        </div>)}
                </div>
            )
        }
    </div>;
}

export default App;