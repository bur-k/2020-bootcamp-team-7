/*

example usage:

Movie movie = new Movie.Builder(550)
                    .withImdbId("tt0137523")
                    .withTitle("Fight Club")
                    .
                    .
                    .
                    .build();


*/

public class Movie {

    public static class MovieBuilder {
        public Integer id;
        public String title;
        public String imdbId;
        public String tagline;
        public String overview;
        public Integer runtime;
        public JSONArray genres;
        public String posterPath;
        public String releaseDate;

        public Builder(Integer id) {
            this.id = id;
        }

        public Builder withTitle(String title) {
            this.title = title;
            return this;
        }

        public Builder withImdbId(String imdbId) {
            this.imdbId = imdbId;
            return this;
        }

        public Builder withTagline(String tagline) {
            this.tagline = tagline;
            return this;
        }

        public Builder withOverview(String overview) {
            this.overview = overview;
            return this;
        }

        public Builder withRuntime(Integer runtime) {
            this.runtime = runtime;
            return this;
        }

        public Builder withGenres(JSONArray genres) {
            this.genres = genres;
            return this;
        }

        public Builder withPosterPath(String posterPath) {
            this.posterPath = posterPath;
            return this;
        }

        public Builder withReleaseDate(String releaseDate) {
            this.releaseDate = releaseDate;
            return this;
        }

        public Movie build() {
            Movie movie = new Movie();
            movie.title = this.title;
            movie.imdbId = this.imdbId;
            movie.tagline = this.tagline;
            movie.overview = this.overview;
            movie.runtime = this.runtime;
            movie.genres = this.genres;
            movie.posterPath = this.posterPath;
            movie.releaseDate = this.releaseDate;

            return movie;
        }

    }

    private Movie(MovieBuilder movieBuilder) {
        this.id = movieBuilder.id;
        this.title = movieBuilder.title;
        this.imdbId = movieBuilder.imdbId;
        this.tagline = movieBuilder.tagline;
        this.overview = movieBuilder.overview;
        this.runtime = movieBuilder.runtime;
        this.genres = movieBuilder.genres;
        this.posterPath = movieBuilder.posterPath;
        this.releaseDate = movieBuilder.releaseDate;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getImdbId() {
        return imdbId;
    }

    public void setImdbId(String imdbId) {
        this.imdbId = imdbId;
    }

    public String getTagline() {
        return tagline;
    }

    public void setTagline(String tagline) {
        this.tagline = tagline;
    }

    public String getOverview() {
        return overview;
    }

    public void setOverview(String overview) {
        this.overview = overview;
    }

    public Integer getRuntime() {
        return runtime;
    }

    public void setRuntime(Integer runtime) {
        this.runtime = runtime;
    }

    public JSONArray getGenres() {
        return genres;
    }

    public void setGenres(JSONArray genres) {
        this.genres = genres;
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
}