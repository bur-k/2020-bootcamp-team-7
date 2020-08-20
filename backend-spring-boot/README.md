
## Quick start

1.  cd backend-spring-boot
2.  .\gradlew.bat bootRun

## Endpoints
### MovieController
#### GET http://localhost:8080/api/movies/{movieId}
```
{
   "credits":{
      "cast":[
         {
            "character":"Andromache of Scythia / Andy",
            "name":"Charlize Theron",
            "id":6885,
            "profile_path":"/gd7ShD0yt4bsR2STeQ19KQ6hvXL.jpg"
         },
         {
            "character":"Nile Freeman",
            "name":"KiKi Layne",
            "id":1884703,
            "profile_path":"/aqQNDmRLlpJvbmbpqpU4bYRXEtb.jpg"
         },
         {
            "character":"Booker",
            "name":"Matthias Schoenaerts",
            "id":73381,
            "profile_path":"/56abqjiihp8XS2kiktfRHXNat7w.jpg"
         },
         {
            "character":"Yusuf Al-Kaysani / Joe",
            "name":"Marwan Kenzari",
            "id":935235,
            "profile_path":"/66903sgNtyzHN0Mi3D88UYgbH86.jpg"
         },
         {
            "character":"Nicky",
            "name":"Luca Marinelli",
            "id":509344,
            "profile_path":"/iJiJX41y12aOoT8ZDU0pkW9W0IA.jpg"
         },
      ],
      "crew":[
         {
            "job":"Producer",
            "name":"Charlize Theron",
            "id":6885,
            "profile_path":"/gd7ShD0yt4bsR2STeQ19KQ6hvXL.jpg"
         },
		{
		  "job": "Stunt Coordinator",
		  "name": "Adam Kirley",
		  "id": 7052,
		  "profile_path": null
		},
		{
		  "job": "Costume Design",
		  "name": "Mary E. Vogt",
		  "id": 9616,
		  "profile_path": null
		},
		{
		  "job": "Second Unit Director",
		  "name": "Jeff Habberstad",
		  "id": 9624,
		  "profile_path": null
		},
      ]
   },
   "genres":[
      {
         "id":28,
         "name":"Action"
      },
   ],
   "overview":"Four undying warriors who've secretly protected humanity for centuries become targeted for their mysterious powers just as they discover a new immortal.",
   "runtime":124,
   "tagline":"Forever is harder than it looks",
   "title":"The Old Guard",
   "backdrop_path":"/m0ObOaJBerZ3Unc74l471ar8Iiy.jpg",
   "imdb_id":"tt7556122",
   "poster_path":"/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg",
   "release_date":"2020-07-10",
   "id":547016
}
```

#### GET http://localhost:8080/api/discover
```
{
  "page": 1,
  "total_results": 10000,
  "total_pages": 500,
  "results": [
    {
      "popularity": 83.268,
      "vote_count": 441,
      "video": false,
      "poster_path": "/jHo2M1OiH9Re33jYtUQdfzPeUkx.jpg",
      "id": 385103,
      "adult": false,
      "backdrop_path": "/fKtYXUhX5fxMxzQfyUcQW9Shik6.jpg",
      "original_language": "en",
      "original_title": "Scoob!",
      "genre_ids": [
        12,
        16,
        35,
        10751
      ],
      "title": "Scoob!",
      "vote_average": 7.5,
      "overview": "In Scooby-Doo’s greatest adventure yet, see the never-before told story of how lifelong friends Scooby and Shaggy first met and how they joined forces with young detectives Fred, Velma, and Daphne to form the famous Mystery Inc. Now, with hundreds of cases solved, Scooby and the gang face their biggest, toughest mystery ever: an evil plot to unleash the ghost dog Cerberus upon the world. As they race to stop this global “dogpocalypse,” the gang discovers that Scooby has a secret legacy and an epic destiny greater than anyone ever imagined.",
      "release_date": "2020-07-08"
    },
    {
      "popularity": 80.757,
      "vote_count": 14346,
      "video": false,
      "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      "id": 475557,
      "adult": false,
      "backdrop_path": "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
      "original_language": "en",
      "original_title": "Joker",
      "genre_ids": [
        80,
        18,
        53
      ],
      "title": "Joker",
      "vote_average": 8.2,
      "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
      "release_date": "2019-10-02"
    },
    {
      "popularity": 77.294,
      "vote_count": 19348,
      "video": false,
      "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      "id": 299536,
      "adult": false,
      "backdrop_path": "/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
      "original_language": "en",
      "original_title": "Avengers: Infinity War",
      "genre_ids": [
        28,
        12,
        878
      ],
      "title": "Avengers: Infinity War",
      "vote_average": 8.3,
      "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
      "release_date": "2018-04-25"
    },
    {
      "popularity": 69.553,
      "vote_count": 26852,
      "video": false,
      "poster_path": "/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
      "id": 27205,
      "adult": false,
      "backdrop_path": "/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
      "original_language": "en",
      "original_title": "Inception",
      "genre_ids": [
        28,
        12,
        878
      ],
      "title": "Inception",
      "vote_average": 8.3,
      "overview": "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
      "release_date": "2010-07-15"
    },
    {
      "popularity": 69.266,
      "vote_count": 16650,
      "video": false,
      "poster_path": "/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
      "id": 271110,
      "adult": false,
      "backdrop_path": "/7FWlcZq3r6525LWOcvO9kNWurN1.jpg",
      "original_language": "en",
      "original_title": "Captain America: Civil War",
      "genre_ids": [
        28,
        12,
        878
      ],
      "title": "Captain America: Civil War",
      "vote_average": 7.4,
      "overview": "Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.",
      "release_date": "2016-04-27"
    },
    {
      "popularity": 62.051,
      "vote_count": 1718,
      "video": false,
      "poster_path": "/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg",
      "id": 547016,
      "adult": false,
      "backdrop_path": "/m0ObOaJBerZ3Unc74l471ar8Iiy.jpg",
      "original_language": "en",
      "original_title": "The Old Guard",
      "genre_ids": [
        28,
        14
      ],
      "title": "The Old Guard",
      "vote_average": 7.3,
      "overview": "Four undying warriors who've secretly protected humanity for centuries become targeted for their mysterious powers just as they discover a new immortal.",
      "release_date": "2020-07-10"
    },
  ]
}
```
### UserController
#### GET http://localhost:8080/api/users //@RequestHeader(value = "Authorization")
```
{
   "watchList":[
      475557,
      271110,
      27205,
      385103,
      546554
   ],
   "watchedList":[
      594718
   ],
   "id":"T1wD6qvLncep19rKu391uzqHGrt2",
   "uname":"Burak Koç",
   "uemail":"bkoc.work@gmail.com",
   "ubio":"Existence is pain!",
   "uphoto":"https://lh5.googleusercontent.com/-ajLXTWM1cxQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnHQp5ZAr1T_BRusCVAWMtW5CQUEA/photo.jpg",
   "ubirthday":null,
   "unationality":null
}
```
### ReviewController
#### POST http://localhost:8080/api/reviews/{tmdbMovieId} //@RequestHeader(value = "Authorization"), @RequestBody UserReview
```
{
   "tmdbMovieId":429617,
   "userReviews":[
      {
         "userId":"T1wD6qvLncep19rKu391uzqHGrt2",
         "userName":"Burak Koç",
         "reviewTitle":"This is a title",
         "review":"This is a review",
         "score":5
      }
   ]
}
```
#### DELETE http://localhost:8080/api/reviews/{tmdbMovieId} //@RequestHeader(value = "Authorization")
```
{
   "tmdbMovieId":429617,
   "userReviews":[ ]
}
```

### SocialController
#### GET http://localhost:8080/api/social/{userId}
```
{
   "followers":[ ],
   "following":[ ],
   "userId":"T1wD6qvLncep19rKu391uzqHGrt2"
}
```
#### POST http://localhost:8080/api/social/follow/{userId} //@RequestHeader(value = "Authorization")
```
{
   "followers":[ ],
   "following":[
      {
         "id":"WdWXD1vFYKfNzoMnEbKLtvt4Ht03",
         "name":"Oğuz Mert Çaylar"
      }
   ],
   "userId":"T1wD6qvLncep19rKu391uzqHGrt2"
}
```
---
```
{
   "followers":[
      {
         "id":"T1wD6qvLncep19rKu391uzqHGrt2",
         "name":"Burak Koç"
      }
   ],
   "following":[

   ],
   "userId":"WdWXD1vFYKfNzoMnEbKLtvt4Ht03"
}
```
#### POST http://localhost:8080/api/social/unfollow/{userId} //@RequestHeader(value = "Authorization")
```
{
   "followers":[ ],
   "following":[ ],
   "userId":"T1wD6qvLncep19rKu391uzqHGrt2"
}
```
