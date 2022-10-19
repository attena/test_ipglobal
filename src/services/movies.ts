import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_KEY, URL_API } from "../config/enviroment"
import { FetchMovieListResponse } from "../utils/types"



export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${URL_API}` }),
    tagTypes: ['Movies'],
    endpoints: (builder) => ({
        getMovies: builder.query<FetchMovieListResponse, void>({
            query: () => `/3/movie/popular?api_key=${API_KEY}`,
            providesTags: ['Movies']
        }),
        getSearch: builder.query<FetchMovieListResponse, string>({
            query: (name) => `3/search/movie?api_key=${API_KEY}&query=${name}`,
            providesTags: ['Movies']
        }),
    }),
})


export const { useGetMoviesQuery, useGetSearchQuery } = moviesApi