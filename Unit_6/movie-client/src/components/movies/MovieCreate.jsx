import React, {useRef} from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import FullButton from '../buttons/FullButton';
import { baseURL } from '../../environment';

function MovieCreate(props) {
console.log(props)
    const titleRef = useRef();
    const genreRef = useRef();
    const ratingRef = useRef();
    const lengthRef = useRef();
    const yearRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(titleRef.current.value)
        // console.log(genreRef.current.value)
        // console.log(ratingRef.current.value)
        // console.log(lengthRef.current.value)
        // console.log(yearRef.current.value)
        
        const title = titleRef.current.value;
        const genre = genreRef.current.value;
        const rating = ratingRef.current.value;
        const length = lengthRef.current.value;
        const releaseYear = yearRef.current.value;


        
        let url = `${baseURL}/movies`;
        
        /* 
            - Shape object for the body to be sent.
            - Consider Headers
            - Consider request options
            - fetch
        */
        let bodyObj = JSON.stringify({
            title, genre, rating, length, releaseYear
        })

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append('Authorization', props.token)
        
        const requestOptions = {
            headers: myHeaders,
            body: bodyObj,
            method: 'POST'
        }


        try {
            
            const response = await fetch(url, requestOptions);
            const data = await response.json();
            props.fetchMovies()
            
            
            if(data.message === 'test added to collection') {
                console.log(data);
            }else {
                alert(data.message)
            }

        } catch (err) {
            console.error(err.message);
        }



    }

    let ratings = [null, 'G','PG', 'PG-13', 'NC-17', 'R']; // this is an array that we use in the ratings button. 
    
    let yearRange = () => { // this is a function to show a dropdown button in the year released button on the browser. We just call it in our input section of the year released
        let years = [null];
        const thisYear = new Date().getFullYear();

        for(let i = thisYear; i >= 1892; i--) years.push(i);

        return(
            <>
                <Input innerRef={yearRef} type='select'>
                    {
                        years.map((y,i) => {
                            return <option key={i} value={y}>{y}</option>
                        })
                    }
                </Input>
            </>
        )
    }

    return (
        <>
            <h1>Add Movie</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Title</Label>
                    <Input 
                        innerRef={titleRef}
                        autoComplete='off'
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Genre</Label>
                    <Input // this is adding a dropdown button on the Genre button in the browser
                        innerRef={genreRef}
                        type='select'
                        autoComplete='off'
                    >
                        <option value={""}></option>
                        <option value={"Comedy"}>Comedy</option>
                        <option value={"Drama"}>Drama</option>
                        <option value={"Action"}>Action</option>
                        <option value={"Horror"}>Horror</option>
                        <option value={"Thriller"}>Thriller</option>
                        <option value={"Family"}>Family</option>
                        <option value={"Documentary"}>Documentary</option> 
                        </Input> 
                </FormGroup>
                <FormGroup>
                    <Label>Rating</Label>
                    <Input 
                        innerRef={ratingRef}
                        type='select'
                        autoComplete='off'
                    >
                        {ratings.map((r,i) => <option key={i} value={r}>{r}</option>)}
                        </Input>
                </FormGroup>
                <FormGroup>
                    <Label>Length (in minutes)</Label>
                    <Input 
                        innerRef={lengthRef}
                        type='number'
                        autoComplete='off'
                        />
                </FormGroup>
                <FormGroup>
                    <Label>Year Released</Label>
                    {yearRange()}
                </FormGroup>
                <FullButton>
                    <Button color='success'>Add Movie</Button>
                </FullButton>
            </Form>
        </>
    )
}

export default MovieCreate