import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import FullButton from '../buttons/FullButton';
import { baseURL } from '../../environment';

function MovieEdit(props) {

    const {id} = useParams();
    const [movieTitle, setMovieTitle ] = useState('');
    const [movieGenre, setMovieGenre ] = useState('');
    const [movieRating, setMovieRating ] = useState('');
    const [movieLength, setMovieLength ] = useState('');
    const [movieReleased, setMovieReleased ] = useState('');
    const navigate = useNavigate();


    let ratings = [null, 'G','PG', 'PG-13', 'NC-17', 'R'];

    let genre = [null, 'Comedy','Drama','Action','Horror','Thriller','Family','Documentary'];

    let yearRange = () => { // this is a function to show a dropdown button in the year released button on the browser. We just call it in our input section of the year released
        let years = [null];
        const thisYear = new Date().getFullYear();

        for(let i = thisYear; i >= 1892; i--) years.push(i);

        return(
            <>
                <Input 
                    value={movieReleased}
                    onChange={e => setMovieReleased(e.target.value)}
                    type='select'>
                    {
                        years.map((y, i) => {
                            return <option key={i} value={y}>{y}</option>
                        })
                    }
                </Input>
            </>
        )
    }

    const fetchMovie = async () => { // usually any fetch function is going to be async 
        const url = `${baseURL}/movies/find-one/${id}`;

        const requestOptions = {
            method: 'GET',
            headers: new Headers({
                'Authorization': props.token
            })
        }

        try {
            
            const res = await fetch(url, requestOptions);
            const data = await res.json();
    
            console.log(data.results);
            const { title, genre, length, rating, releaseYear} = data.results;

            setMovieTitle(title);
            setMovieGenre(genre);
            setMovieLength(length);
            setMovieRating(rating);
            setMovieReleased(releaseYear);
    
        } catch (err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        if(props.token) {
            fetchMovie();
        }
    },[props.token])


    async function handleSubmit(e) {
        e.preventDefault();
        
        const url = `${baseURL}/movies/${id}`;

        let body = JSON.stringify({
            title: movieTitle,
            genre: movieGenre,
            length: movieLength,
            rating: movieRating,
            releaseYear: movieReleased
        })

        const requestOptions = {
            headers: new Headers({
                'Authorization': props.token,
                "Content-Type": 'application/json'
            }),
            body,
            method:'PATCH'
        }

        try {
            
            const res = await fetch(url, requestOptions);
            const data = await res.json();

            console.log(data)
            if(data) fetchMovie()

        } catch (err) {
            console.error(err.message);
        }

    }

    const style = {
        textAlign: "center",
        textDecoration: 'underline'
    }

    return (
        <>
            <h1 style={style}>Edit Movie</h1>
            <Container>
                <Row>
                    <Col md="4">
                        <p><b>{movieTitle}</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque corporis nihil architecto recusandae veritatis provident odio laborum, incidunt repellat saepe illum rem, excepturi earum, eum illo minima eius tenetur! Nobis.</p>
                        <FullButton>
                            <Button
                            color='info'
                            outline
                            onClick={() => navigate('/movie')}
                            >Back to Table</Button>
                        </FullButton>
                    </Col>
                    <Col md='8'>
                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label>Title</Label>
                                <Input 
                                    value={movieTitle}
                                    onChange={e => setMovieTitle(e.target.value)}
                                    autoComplete='off'
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Genre</Label>
                                <Input 
                                    value={movieGenre}
                                    onChange={e => setMovieGenre(e.target.value)}
                                    autoComplete='off'
                                    type='select'
                                >
                                    {genre.map((g,i) => (
                                        <option key={i} value={g}>{g}</option>
                                    ))}
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Rating</Label>
                                <Input 
                                    value={movieRating}
                                    onChange={e => setMovieRating(e.target.value)}
                                    autoComplete='off'
                                    type='select'
                                >
                                    {ratings.map((r,i) => (
                                        <option key={i} value={r}>{r}</option>
                                    ))}
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Length</Label>
                                <Input 
                                    value={movieLength}
                                    onChange={e => setMovieLength(e.target.value)}
                                    autoComplete='off'
                                    type='number'
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Year Released</Label>
                                {yearRange()}
                            </FormGroup>
                            <FullButton>
                                <Button color='success'>Update</Button>
                            </FullButton>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

/* 
# useParams()
- Comes from React-Route-DOM
    - Considers the `path` provided within the `<Route>` in `App.jsx`.
    - Recognizes the `:id` as a parameter value in which to respond.
    - We are able to access the key of `id` much in the same way we did with the server.

# useNavigate()
- Comes from React-Router-DOM
    - Simply helps us move from one endpoint to another as we desire.
    - Must pass in the path as an argument
ex:
```jsx
navigate('/sample-endpoint');
```
*/

export default MovieEdit