import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom' 
import video from './library.mp4'
import infobox from './infobox.png'
import styled from 'styled-components'

import {Signup} from './Components/Signup'
import {Login} from './Components/Login'
import Articles from './Components/Articles'
import ArticleForm from './Components/ArticleForm'
import EditArticle from './Components/EditArticle';

const InfoboxLanding = styled.div`
  position: fixed;
  top: 18%;
  background: rgba(0, 0, 0, 0.7);
  color: #f1f1f1;
  width: 100%;
  padding: 20px;
  text-align: center;
`

const Subtitle = styled.h2`
  font-family: 'Quattrocento', serif;
  font-size: 2rem;
  margin-top: 10px;
  color: #9CEAEF;
`

const Button = styled.button`
  width: 180px;
  height: 85px;
  margin: 15px;
  padding: 20px;
  background-color: #9CEAEF;
  border-radius: 15px;
  border: 3px solid #1F7A8C;
  font-family: 'Quattrocento', serif; 
  color: #1F7A8C;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:hover {
      background-color: #ADA7C9;
      color: #4A2040;
    }

  a {
    color: #1F7A8C;
    font-size: 1.3rem;
    text-decoration: none;

    &:hover {
      color: #4A2040;
    }
  }
`

function App() {
  return (
    <div className="App">
    
     
        <Route exact path='/'>
          <video autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
          </video>

          <InfoboxLanding>
          <Link to='/'><img src={infobox} alt='infobox'></img></Link>
          <br></br>
          <Subtitle>Saving &#038; Organizing Important Web Articles For You</Subtitle>
          
          <div className="links">
          <a href="marketingpage"><Button>What is Infobox?</Button></a>
          <Link className="link" to='/signup'><Button>Sign Up</Button></Link>
          <Link className="link" to='/login'><Button>Login</Button></Link>
          </div>
          </InfoboxLanding>
          </Route>
      
      <Route path='/signup'>
        <Signup />
      </Route>

      <Route path='/login'>
        <Login />
      </Route>

      <Route path='/myarticles'>
        <Articles />
      </Route>

      <Route path='/newarticle'>
        <ArticleForm />
      </Route>

      <Route path='/editarticle'>
        <EditArticle />
      </Route>
      
      

      
    </div>
  );
}

export default App;
