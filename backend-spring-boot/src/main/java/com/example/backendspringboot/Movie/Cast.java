package com.example.backendspringboot.Movie;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Cast {
    public String character;
    @JsonProperty("id")
    public Integer tmdbPersonId;
    public String name;
    @JsonProperty("profile_path")
    public String profilePath;

    public Cast() {
    }

    public Cast(String character, Integer tmdbPersonId, String name, String profilePath) {
        this.character = character;
        this.tmdbPersonId = tmdbPersonId;
        this.name = name;
        this.profilePath = profilePath;
    }

    public String getCharacter() {
        return character;
    }

    public void setCharacter(String character) {
        this.character = character;
    }

    public Integer getTmdbPersonId() {
        return tmdbPersonId;
    }

    public void setTmdbPersonId(Integer tmdbPersonId) {
        this.tmdbPersonId = tmdbPersonId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProfilePath() {
        return profilePath;
    }

    public void setProfilePath(String profilePath) {
        this.profilePath = profilePath;
    }
}
