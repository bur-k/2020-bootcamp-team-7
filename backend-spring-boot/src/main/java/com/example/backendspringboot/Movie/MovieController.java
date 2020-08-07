package com.example.backendspringboot.Movie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/movies")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping(value = "/{tmdbMovieId}", produces = "application/json")
    public Movie getMovie(@PathVariable Integer tmdbMovieId) {
        return movieService.findByTmdbMovieId(tmdbMovieId);
    }

    @GetMapping(produces = "application/json")
    public List<Movie> getAllMovie() {
        return movieService.getAll();
    }

    @DeleteMapping(produces = "application/json")
    public void deleteAllMovie() {
        movieService.deleteAll();
    }

    @PostMapping(produces = "application/json")
    public Movie createMovie(@RequestBody Movie movie) {
        movieService.createMovie(movie);
        return movieService.findByTmdbMovieId(movie.getTmdbMovieId());
    }
}
