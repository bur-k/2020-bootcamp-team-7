## Quick start

1.  npm i
2.  npm start

## Pages

1. HomePage
> A page to let users login  
![Image of Sign in with Google component](https://i.imgur.com/muxF8gs.png)
```
<StyledFirebaseAuth
  uiConfig={{
    ...styledFirebaseConfig,
    callbacks: {
      signInSuccessWithAuthResult: e => {...}
    },
  }}
  firebaseAuth={firebase.auth()}
/>
```  

![Image of a Card with text](https://i.imgur.com/cKH0qpU.png)
```
<Card
  className="text-center"
  style={{ marginTop: '50%', marginBottom: '50%' }}
  bg="dark"
  text="white"
>
  <Card.Body>
    <Card.Title>Discover, Watch and Review!</Card.Title>
    <Card.Text>
      Find movies to watch, get updates from your friends and do
      not forget to leave a review.
    </Card.Text>
  </Card.Body>
  <Card.Footer className="text-muted">
    <Button onClick={...} >
      Get Started!
    </Button>
  </Card.Footer>
</Card>
```  
2. Discover
> Listing page which lists movies so users can discover movies and/or add them into lists 
![Image of a MovieCard](https://i.imgur.com/FmTzeMV.png)
```
<Card style={{ height: '100%' }}>
  <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`} />
  <Card.Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} >
    <Card.Title style={{ textAlign: 'center' }}>
      <Link to={`/movie/${props.movie.id}`}>{props.movie.title}</Link>
    </Card.Title>
  </Card.Body>
  <Card.Footer>
    <ButtonGroup style={{ width: '100%' }}>
      <Button variant="primary" onClick={...} >
        Add to Watchlist
      </Button>
      <Button variant="secondary" onClick={...} >
        Mark as Watched
      </Button>
    </ButtonGroup>
  </Card.Footer>
</Card>
```  
3. MovieDetails
> This page includes information about selected movie and allows user to make review and view other user's reviews
4. UserDetails
> Details of selected user be shown, also users can follow other users on this page  
5. MyAccount
> Users can customize their account using this page
