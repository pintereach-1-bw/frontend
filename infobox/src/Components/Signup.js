import React, {useState} from 'react'
import infobox from '../infobox.png'
import styled from 'styled-components'
import {Link, useHistory} from 'react-router-dom'
import axios from 'axios'


// Styled Components -------------------------- //
const Subtitle = styled.h2`
  font-family: 'Quattrocento', serif;
  font-size: 2rem;
  margin-top: 10px;
  color: #9CEAEF;
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
        <Link to='/'><img className='smallinfobox' src={infobox} alt='small title'></img></Link>
        <Subtitle>Sign Up</Subtitle>

        <form onSubmit={signupandlogin}>
            <input
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                value={newUser.username}
                onChange={handleChange}
                />
            <br></br>
            <input
                id="password"
                name="password"
                type="text"
                placeholder="Password"
                value={newUser.password}
                onChange={handleChange}
                />
            <br></br>
            <button type="submit">Sign Up!</button>
        </form>

        </div>
    )
}