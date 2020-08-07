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

    void createMovie(Movie movie) {
        movieRepository.insert(movie);
    }

    Movie findByTmdbId(Integer tmdbId) {
        return movieRepository.findByTmdbId(tmdbId);
    }

    void deleteAll() {
        movieRepository.deleteAll();
    }

    List<Movie> getAll() {
        return movieRepository.findAll();
    }
}
