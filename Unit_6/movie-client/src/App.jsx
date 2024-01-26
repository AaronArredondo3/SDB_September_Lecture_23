import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './components/auth/Auth';
import { useEffect, useState } from 'react';

function App() {

  const [ sessionToken, setSessionToken ] = useState('');

  console.log('App:', sessionToken);

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
      <Routes>
        <Route 
          path='/'
          element={<Auth updateToken={updateToken} />}
        />
        <Route 
          path='/movie'
          element={<h2>Movie Section Placeholder</h2>} // this is the routes so it can move into the next page.
        />
      </Routes>
    </div>
  );
}

export default App;
