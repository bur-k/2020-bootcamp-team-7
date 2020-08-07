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

    Movie findByTmdbMovieId(Integer tmdbMovieId) {
        return movieRepository.findByTmdbMovieId(tmdbMovieId);
    }

    void deleteAll() {
        movieRepository.deleteAll();
    }

    List<Movie> getAll() {
        return movieRepository.findAll();
    }
}
