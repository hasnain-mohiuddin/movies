/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import MovieCard from './MovieCard';
import { MemoryRouter } from 'react-router-dom';

const movie = {
    "adult": false,
    "backdrop_path": "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
    "id": 436270,
    "title": "Black Adam",
    "original_language": "en",
    "original_title": "Black Adam",
    "overview": "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
    "poster_path": "/3zXceNTtyj5FLjwQXuPvLYK5YYL.jpg",
    "media_type": "movie",
    "genre_ids": [
        28,
        14,
        878
    ],
    "popularity": 5175.846,
    "release_date": "2022-10-19",
    "video": false,
    "vote_average": 7.055,
    "vote_count": 686
}

describe('loads the component', () => {
    beforeAll(() => {
        render(
        <MemoryRouter>
            <MovieCard movie={movie} />
        </MemoryRouter>);
    })
  
    it('renders the correct title', () => {
        expect(screen.getAllByText(movie.title)).toBeInTheDocument;
    });

    it('doesnt render wrong title', () => {
        expect(screen.queryByText('test title')).not.toBeInTheDocument;
    });
  })

