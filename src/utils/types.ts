export interface ListMovies {
    title: string
    poster_path: string,
}

export interface FetchMovieListResponse {
    results: ListMovies[],
}

export interface SearchMovie {
    setSearchMovie: (name: string) => void;
}


