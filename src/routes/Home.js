import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
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
                        <Movie
                            key={item.id}
                            coverImg={item.medium_cover_image}
                            title={item.title}
                            genres={item.genres}
                            summary={item.summary} />
                    )}
                </div>
            )
        }
    </div>;
}

export default Home;