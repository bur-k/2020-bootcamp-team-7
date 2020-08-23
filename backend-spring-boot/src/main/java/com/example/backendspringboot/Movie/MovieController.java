package com.example.backendspringboot.Movie;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import com.example.backendspringboot.User.UserService;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/movies")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @Autowired
    private UserService userService;
    
    private String apiKey = ""; // https://www.themoviedb.org/settings/api

    @GetMapping(value = "/watchlist/{id}", produces = "application/json")
    public List<Movie> getWatchlist(@PathVariable String id) {
    	Set<Integer> set = userService.findUserByUserId(id).getWatchList();
    	List<Integer> list = set.stream().collect(Collectors.toList());
    	
    	// inserts movies to database if not present
    	Movie movie = null;
    	for(int i=0; i < list.size(); i++) {
    		int movieId = list.get(i);
    		movie = movieService.findMovieByTmdbMovieId(movieId);
    		if(movie == null) {
    			String uri = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key="+apiKey+"&language=en-US&append_to_response=credits";
                movie = createMovie((new RestTemplate()).getForObject(uri, Movie.class));
    		}
    	}
    	
        return movieService.getWatchlist(list);
    }

    @GetMapping(value = "/watchedlist/{id}", produces = "application/json")
    public List<Movie> getWatchedlist(@PathVariable String id) {
    	Set<Integer> set = userService.findUserByUserId(id).getWatchedList();
    	List<Integer> list = set.stream().collect(Collectors.toList());
    	
    	// inserts movies to database if not present
    	Movie movie = null;
    	for(int i=0; i < list.size(); i++) {
    		int movieId = list.get(i);
    		movie = movieService.findMovieByTmdbMovieId(movieId);
    		if(movie == null) {
    			String uri = "https://api.themoviedb.org/3/movie/" + movieId + "?api_key="+apiKey+"&language=en-US&append_to_response=credits";
                movie = createMovie((new RestTemplate()).getForObject(uri, Movie.class));
    		}
    	}
    	
        return movieService.getWatchedlist(list);
    }
    
    @GetMapping(value = "/{tmdbMovieId}", produces = "application/json")
    public Movie getMovie(@PathVariable Integer tmdbMovieId) {
        Movie movie = movieService.findMovieByTmdbMovieId(tmdbMovieId);
        if (movie == null) {
            String uri = "https://api.themoviedb.org/3/movie/" + tmdbMovieId + "?api_key="+apiKey+"&language=en-US&append_to_response=credits";
            movie = createMovie((new RestTemplate()).getForObject(uri, Movie.class));
        }
        return movie;
    }

    @GetMapping(value = {"/discover", "/discover/{page}"}, produces = "application/json")
    public Object getDiscover(@PathVariable(required = false) Integer page) {
        final String uri = "https://api.themoviedb.org/3/movie/popular?api_key="+apiKey+"&language=en-US&page=" + (page == null ? 1 : page);
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
