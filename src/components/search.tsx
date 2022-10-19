import React, { ChangeEvent, useCallback, useState } from "react"
import { SearchMovie } from '../utils/types'

const Search = (props: SearchMovie) => {

    const { setSearchMovie } = props;
    const [textFilter, setTextFilter] = useState('')

    const handleFilterTextChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const newValue = event.target.value;
            setTextFilter(newValue);
        },
        [],
    );

    const handleSendTextFilter = () => (
        setSearchMovie(textFilter)
    );

    return (
        <>
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
            <div className="relative">
                <input type="search" onChange={handleFilterTextChange} id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search movie" required />
                <button type="submit" onClick={handleSendTextFilter} className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </>
    )
}

export default Search;