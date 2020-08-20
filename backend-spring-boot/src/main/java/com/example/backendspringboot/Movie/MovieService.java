package com.example.backendspringboot.Movie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {
    private final MovieRepository movieRepository;

    @Autowired
    MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }

    Movie createMovie(Movie movie) {
        return movieRepository.insert(movie);
    }

    Movie findMovieByTmdbMovieId(Integer tmdbMovieId) {
        return movieRepository.findMovieByTmdbMovieId(tmdbMovieId);
    }

    void deleteAllMovies(boolean exists) {
        movieRepository.deleteMoviesByTmdbMovieIdExists(exists);
    }

    List<Movie> getAllMovies(boolean exists) {
        return movieRepository.getMoviesByTmdbMovieIdExists(exists);
    }
    List<Movie> getWatchlist(List<Integer> list) {
        return (List<Movie>) movieRepository.findAllById(list);
    }


}
