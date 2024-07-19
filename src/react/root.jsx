import Router from 'preact-router';
import {html} from 'htm/preact';
import {Home} from './views/Home.jsx';
const data = {message: "Hello World!"}


function Root() {
  
  return (
    <Router>
      <Home path="/" />
    </Router>
  )
}

export {Root};
