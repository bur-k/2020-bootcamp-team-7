package com.example.backendspringboot.Movie;

import com.google.gson.Gson;
import net.minidev.json.JSONArray;
import net.minidev.json.parser.JSONParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/movies")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping(value = "/{tmdbId}", produces = "application/json")
    public Movie getMovie(@PathVariable Integer tmdbId) {
        return movieService.findByTmdbId(tmdbId);
    }

    @GetMapping(value = "/", produces = "application/json")
    public List<Movie> getAllMovie() {
        return movieService.getAll();
    }

    @DeleteMapping(value = "/", produces = "application/json")
    public void deleteAllMovie() {
        movieService.deleteAll();
    }

    @PostMapping(produces = "application/json")
    public Movie createMovie(@RequestBody Map<String, Object> body) {
        Movie movie = null;
        try {
            movie = new Movie(
                    (String) body.get("backdrop_path"),
                    (JSONArray) (new JSONParser()).parse((new Gson()).toJson(body.get("genres"), ArrayList.class)),
                    (Integer) body.get("id"),
                    (String) body.get("imdb_id"),
                    (String) body.get("overview"),
                    (String) body.get("poster_path"),
                    (String) body.get("release_date"),
                    (Integer) body.get("runtime"),
                    (String) body.get("tagline"),
                    (String) body.get("title")
            );
            movieService.createMovie(movie);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return movie;
    }
}
