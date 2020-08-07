package com.example.backendspringboot.Movie;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Crew {
    @JsonProperty("id")
    public Integer tmdbPersonId;
    public String job;
    public String name;
    @JsonProperty("profile_path")
    public String profilePath;

    public Crew(Integer tmdbPersonId, String job, String name, String profilePath) {
        this.tmdbPersonId = tmdbPersonId;
        this.job = job;
        this.name = name;
        this.profilePath = profilePath;
    }

    public Integer getTmdbPersonId() {
        return tmdbPersonId;
    }

    public void setTmdbPersonId(Integer tmdbPersonId) {
        this.tmdbPersonId = tmdbPersonId;
    }

    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
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
