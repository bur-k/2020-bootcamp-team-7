package com.example.backendspringboot.Movie;

import net.minidev.json.JSONArray;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;


public class Movie {
    @Field(name = "backdrop_path")
    public String backdropPath;
    public JSONArray genres;
    @Id
    @Field(name = "id")
    public Integer tmdbId;
    @Field(name = "imdb_id")
    public String imdbId;
    public String overview;
    @Field(name = "poster_path")
    public String posterPath;
    @Field(name = "release_date")
    public String releaseDate;
    public Integer runtime;
    public String tagline;
    public String title;

    public Movie(String backdropPath, JSONArray genres, Integer tmdbId, String imdbId, String overview, String posterPath, String releaseDate, Integer runtime, String tagline, String title) {
        this.backdropPath = backdropPath;
        this.genres = genres;
        this.tmdbId = tmdbId;
        this.imdbId = imdbId;
        this.overview = overview;
        this.posterPath = posterPath;
        this.releaseDate = releaseDate;
        this.runtime = runtime;
        this.tagline = tagline;
        this.title = title;
    }

    public String getBackdropPath() {
        return backdropPath;
    }

    public void setBackdropPath(String backdropPath) {
        this.backdropPath = backdropPath;
    }

    public JSONArray getGenres() {
        return genres;
    }

    public void setGenres(JSONArray genres) {
        this.genres = genres;
    }

    public Integer getTmdbId() {
        return tmdbId;
    }

    public void setTmdbId(Integer tmdbId) {
        this.tmdbId = tmdbId;
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

    public int getRuntime() {
        return runtime;
    }

    public void setRuntime(int runtime) {
        this.runtime = runtime;
    }

    public String getTagline() {
        return tagline;
    }

    public void setTagline(String tagline) {
        this.tagline = tagline;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
