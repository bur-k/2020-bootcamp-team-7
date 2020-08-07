package com.example.backendspringboot.Movie;

import com.fasterxml.jackson.annotation.JsonProperty;
import net.minidev.json.JSONArray;
import org.springframework.data.mongodb.core.mapping.Field;

public class Movie {
    @JsonProperty("backdrop_path")
    public String backdropPath;
    public Credits credits;
    public JSONArray genres;
    @JsonProperty("imdb_id")
    public String imdbId;
    public String overview;
    @JsonProperty("poster_path")
    public String posterPath;
    @Field("releaseDate")
    @JsonProperty("release_date")
    public String releaseDate;
    public Integer runtime;
    public String tagline;
    @JsonProperty("id")
    public Integer tmdbMovieId;
    public String title;

    public Movie() {
    }

    public Movie(String backdropPath, Credits credits, JSONArray genres, String imdbId, String overview, String posterPath, String releaseDate, Integer runtime, String tagline, Integer tmdbMovieId, String title) {
        this.backdropPath = backdropPath;
        this.credits = credits;
        this.genres = genres;
        this.imdbId = imdbId;
        this.overview = overview;
        this.posterPath = posterPath;
        this.releaseDate = releaseDate;
        this.runtime = runtime;
        this.tagline = tagline;
        this.tmdbMovieId = tmdbMovieId;
        this.title = title;
    }

    public String getBackdropPath() {
        return backdropPath;
    }

    public void setBackdropPath(String backdropPath) {
        this.backdropPath = backdropPath;
    }

    public Credits getCredits() {
        return credits;
    }

    public void setCredits(Credits credits) {
        this.credits = credits;
    }

    public JSONArray getGenres() {
        return genres;
    }

    public void setGenres(JSONArray genres) {
        this.genres = genres;
    }

    public String getImdbId() {
        return imdbId;
    }

    public void setImdbId(String imdbId) {
        this.imdbId = imdbId;
    }

    public String getOverview() {
        return overview;
    }

    public void setOverview(String overview) {
        this.overview = overview;
    }

    public String getPosterPath() {
        return posterPath;
    }

    public void setPosterPath(String posterPath) {
        this.posterPath = posterPath;
    }

    public String getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(String releaseDate) {
        this.releaseDate = releaseDate;
    }

    public Integer getRuntime() {
        return runtime;
    }

    public void setRuntime(Integer runtime) {
        this.runtime = runtime;
    }

    public String getTagline() {
        return tagline;
    }

    public void setTagline(String tagline) {
        this.tagline = tagline;
    }

    public Integer getTmdbMovieId() {
        return tmdbMovieId;
    }

    public void setTmdbMovieId(Integer tmdbMovieId) {
        this.tmdbMovieId = tmdbMovieId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
