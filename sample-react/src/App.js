import logo from './logo.svg';
import './App.css';

import {useEffect} from 'react'

import rollupSample from 'rollup-sample'

import { JSONPlaceholder } from 'freepi'

const jsonWrapper = new JSONPlaceholder()


function App() {
  useEffect(() => {
  
      console.log('running')
      jsonWrapper.getTodoById('nu').then((data)=>{
        if(data.response.status >= 400) {
          throw new Error(data)
        }
        console.log(data.response)
      })
      .catch((error)=> {
        if (error.response) {
          console.log('erro')
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          console.log(error.response)
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
    })
      jsonWrapper.getCommentsByPost('true')
      .then(data=>console.log(data))
      .catch(e=>console.log(e))
      const post = {something:"something"}
      jsonWrapper.createPost(post).then(data=>console.log(data)).catch(e=>console.log(e))

  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {rollupSample.eat('nachos')}
        </a>
      </header>
    </div>
  );
}

export default App;
