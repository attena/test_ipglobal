import React, { useState } from "react"
import MovieCard from "../../components/movieCard"
import Navbar from '../../components/navbar'
import Search from '../../components/search'
import { useGetMoviesQuery, useGetSearchQuery } from '../../services/movies'



const MovieApp = () => {

    const [searchMovie, setSearchMovie] = useState('')
    const { data: movies } = useGetMoviesQuery()
    const { data: singleMovie } = useGetSearchQuery(searchMovie)


    return (
        <div className="container mx-auto">
            <Navbar />
            <Search setSearchMovie={setSearchMovie} />

            {searchMovie.length > 0 ? (
                <div className="gap-8 columns-4 mt-20">
                    {
                        singleMovie?.results.map((movie, index) =>
                            <MovieCard key={index} poster_path={movie.poster_path} title={movie.title} />
                        )}
                </div>
            ) : (
                <div className="gap-8 columns-4 mt-20">
                    {
                        movies?.results.map((movie, index) =>
                            <MovieCard key={index} poster_path={movie.poster_path} title={movie.title} />
                        )
                    }
                </div>
            )

            }
        </div>
    );
}

export default MovieApp;