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
![Image of a MovieDetails](https://i.imgur.com/bJIwOMb.png)
```
<Row>
  <Col xs={12} lg={{ span: 8, offset: 2 }}>
    <Image style={{ width: '100%' }} src={...} rounded />
    <Card.ImgOverlay style={{ textAlign: 'right' }}>
      <Badge variant="dark">
        <a style={{ color: 'yellow' }} href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank" rel="noopener noreferrer" >
          IMDb
        </a>
      </Badge>
    </Card.ImgOverlay>
  </Col>
</Row>
<Row>
  <Col xs={12} lg={{ span: 8, offset: 2 }}>
    <Table striped bordered hover variant="dark">
      <tbody>
        <tr>
          <td>Title</td>
          <td>
            {movie.title} ({new Date(movie.release_date).getFullYear()})
          </td>
        </tr>
        <tr>
          <td>Duration</td>
          <td>
            {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
          </td>
        </tr>
        <tr>
          <td>Genres</td>
          <td>{movie.genres.map(g => g.name).join(', ')}</td>
        </tr>
        <tr>
          <td style={{ whiteSpace: 'nowrap' }}>Overview</td>
          <td>{movie.overview}</td>
        </tr>
        <tr>
          <td>Tagline</td>
          <td>{movie.tagline}</td>
        </tr>
        <tr>
          <td>Cast</td>
          <td>
            <div className="overflow-auto" style={{ maxHeight: '250px' }} >
              {movie.credits.cast.map(c => (
                <>
                  <span>
                    <b>{c.name}</b> as <em>{c.character}</em>
                  </span>
                  <br />
                </>
              ))}
            </div>
          </td>
        </tr>
        <tr>
          <td>Crew</td>
          <td>
            <div className="overflow-auto" style={{ maxHeight: '250px' }} >
              {movie.credits.crew.map(c => (
                <>
                  <span>
                    <b>{c.name}</b> as <em>{c.job}</em>
                  </span>
                  <br />
                </>
              ))}
            </div>
          </td>
        </tr>
      </tbody>
    </Table>
  </Col>
</Row>
```  
![Image of a Review-1](https://i.imgur.com/NyBthqD.png)  
![Image of a Review-2](https://i.imgur.com/m5AxUpZ.png)
```
<Accordion>
  <Card className="bg-dark text-white">
    <Card.Header>
      <Accordion.Toggle as={NavLink} className="text-white" variant="link" eventKey="0" >
        Leave a review
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
        <Form onSubmit={e => {...} >
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Review Title</Form.Label>
            <Form.Control type="input" placeholder="Title" value={_userReview.reviewTitle} onChange={e => {...} required />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Review</Form.Label>
            <Form.Control as="textarea" rows="3" value={_userReview.review} onChange={...} required />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Rate Movie</Form.Label>
            <Form.Control as="select" value={_userReview.score} onChange={...} >
              <option>5</option>
              <option>4</option>
              <option>3</option>
              <option>2</option>
              <option>1</option>
            </Form.Control>
          </Form.Group>
          <Button type="submit">Submit Review</Button>
        </Form>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card className="bg-dark text-white">
    <Card.Header>
      <Accordion.Toggle as={NavLink} className="text-white" variant="link" eventKey="1" >
        View other users' reviews
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
      {userReviews.map(rev => (
          <>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>
                <Link to={`/user/${rev.userId}`}>{rev.userName}</Link> :{' '}
                {rev.reviewTitle}
              </Form.Label>
              <Form.Control as="textarea" rows="3" readOnly>
                {rev.review}
              </Form.Control>
            </Form.Group>
            <hr />
          </>
      )}
      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
```  
4. UserDetails
> Details of selected user be shown, also users can follow other users on this page  
5. MyAccount
> Users can customize their account using this page
