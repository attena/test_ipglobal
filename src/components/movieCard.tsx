import { ListMovies } from '../utils/types'
import { URL_IMG } from '../config/enviroment'

const MovieCard = (props: ListMovies) => {
    const { title, poster_path } = props
    return (
        <div className="block p-2 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-5">
            <img className="w-full aspect-video ..." src={`${URL_IMG}${poster_path}`} alt={title} />
            <p className="font-normal text-gray-700 dark:text-gray-400 text-center">{title}</p>
        </div>
    );

}

export default MovieCard;