import { Genre } from "core/types/Movie";
import { makePrivateRequest } from "core/utils/request";
import { useEffect, useState } from "react";
import Select from 'react-select';
import './styles.scss';


type Props = {
    genre?: Genre;
    handleChangeGenre: (genre: Genre) => void;
    
}

const MovieFilters = ({ genre, handleChangeGenre }: Props) => {
    const [isLoadingGenre, setIsLoadingGenre] = useState(false);
    const [genres, setGenres] = useState<Genre[]>([]);

    useEffect(() => {
        setIsLoadingGenre(true);
        makePrivateRequest({ url: '/genres' })
            .then(response => setGenres(response.data))
            .finally(() => setIsLoadingGenre(false));
    }, []);

    return (
        <div className="card-base movie-filters-container border-radius-4">
            <Select
                name="genre"
                isLoading={isLoadingGenre}
                options={genres}
                value={genre}
                getOptionLabel={(option: Genre) => option.name}
                getOptionValue={(option: Genre) => String(option.id)}
                className="filter-select-container"
                classNamePrefix="movie-genre-select"
                placeholder="Gêneros"
                inputId="genre"
                onChange={value => handleChangeGenre(value as Genre)}
                isClearable

            />
        </div>
    )
}

export default MovieFilters