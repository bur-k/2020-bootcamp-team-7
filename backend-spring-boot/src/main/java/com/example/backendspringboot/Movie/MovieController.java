package com.example.backendspringboot.Movie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping("api/movies")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping(value = "/{tmdbMovieId}", produces = "application/json")
    public Movie getMovie(@PathVariable Integer tmdbMovieId) {
        Movie movie = movieService.findMovieByTmdbMovieId(tmdbMovieId);
        if (movie == null) {
            String uri = "https://api.themoviedb.org/3/movie/" + tmdbMovieId + "?api_key=c27a471ab79060886b0f3aadcf79bef8&language=en-US&append_to_response=credits";
            movie = createMovie((new RestTemplate()).getForObject(uri, Movie.class));
        }
        return movie;
    }

    @GetMapping(value = {"/discover", "/discover/{page}"}, produces = "application/json")
    public Object getDiscover(@PathVariable(required = false) Integer page) {
        final String uri = "https://api.themoviedb.org/3/movie/popular?api_key=c27a471ab79060886b0f3aadcf79bef8&language=en-US&page=" + (page == null ? 1 : page);
        return (new RestTemplate()).getForObject(uri, Object.class);
    }

    @GetMapping(produces = "application/json")
    public List<Movie> getAllMovies() {
        return movieService.getAllMovies(true);
    }

    @DeleteMapping(produces = "application/json")
    public void deleteAllMovies() {
        movieService.deleteAllMovies(true);
    }

    @PostMapping(produces = "application/json")
    public Movie createMovie(@RequestBody Movie movie) {
        Movie movie1 = movieService.findMovieByTmdbMovieId(movie.getTmdbMovieId());
        if (movie1 == null)
            movie1 = movieService.createMovie(movie);
        return movie1;
    }
}
