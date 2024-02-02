import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './components/auth/Auth';
import { useEffect, useState } from 'react';
import MovieIndex from './components/movies/MovieIndex';
import MovieEdit from './components/movies/MovieEdit';
import Logout from './components/auth/logout/Logout';

function App() {

  const [ sessionToken, setSessionToken ] = useState('');

  // console.log('App:', sessionToken);

  const updateToken = newToken => { // this will update the token in the browser
    localStorage.setItem('token', newToken)
    setSessionToken(newToken)
  }

  /* 
  # useEffect()
    - Allows us to perform side effects in functional components.
    - Accepts two arguments
      - function
      - dependency
        - optional
        - Can denote a specific event to to trigger

    EXAMPLES:
    useEffect(() => {
      Runs on every render
    });

    useEffect(() => {
      Runs only on the first render
    }, []);

    useEffect(() => {
        Runs on first render
        Runs any time any dependency changes
    }, [state]);
  */

    useEffect(() => { // when we use the useEffect is to control the flow
      if(localStorage.getItem('token')){
        setSessionToken(localStorage.getItem('token'));
      }
    }, [])

  return (
    <div className="App">
      {
        sessionToken !=='' ? 
        <Logout setToken={setSessionToken} /> : null // this is a javascript logic that doesn't display the signout button at our login page
      }
      <Routes>
        <Route 
          path='/'
          element={<Auth updateToken={updateToken} />}
        />
        <Route 
          path='/movie'
          element={<MovieIndex token={sessionToken} />} // this is the routes so it can move into the next page.
        />
        <Route 
          path='/movie/update/:id'
          element={<MovieEdit token={sessionToken} />} 
        />
      </Routes>
    </div>
  );
}

export default App;
