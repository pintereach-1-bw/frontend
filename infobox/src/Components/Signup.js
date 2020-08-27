import React, {useState} from 'react'
import infobox from '../infobox.png'
import styled from 'styled-components'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'
import video from '../library.mp4'



// Styled Components -------------------------- //
const Subtitle = styled.h2`
  font-family: 'Quattrocento', serif;
  font-size: 2rem;
  margin-top: 10px;
  color: #9CEAEF;
`

const InfoboxLanding = styled.div`
  position: fixed;
  top: 18%;
  background: rgba(0, 0, 0, 0.7);
  color: #f1f1f1;
  width: 100%;
  padding: 0px;
  text-align: center;
`
//------------------------------------------

const initialSignup = {
    username: '',
    password: ''
}


export function Signup() {

    const [newUser, setNewUser] = useState(initialSignup)

    const history = useHistory()


    function handleChange(e) {

        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value,
        })
    }


    const signupandlogin = (e) => {
        e.preventDefault();
        axios
          .post("https://pintereach10.herokuapp.com/api/auth/register", newUser)
          .then((res) => {
            console.log(res);
            localStorage.setItem("token", JSON.stringify(res.data.token));
            history.push("/myarticles");
          })
          .catch((err) => console.log(err));

          setNewUser({
              username: '',
              password: '' 
          })
          
      };

    return (
        <div>
            <video autoPlay muted loop id="myVideo">
            <source src={video} type="video/mp4" />
            </video>

        <InfoboxLanding>
        <Link to='/'><img className='smallinfobox' src={infobox} alt='small title'></img></Link>
        <Subtitle>Sign Up</Subtitle>

        <form onSubmit={signupandlogin}>
            <input
                required 
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                value={newUser.username}
                onChange={handleChange}
                />
            <br></br>
            <input
                required
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={newUser.password}
                onChange={handleChange}
                />
            <br></br>
            <button type="submit">Sign Up!</button>
        </form>
        </InfoboxLanding>

        </div>
    )
}