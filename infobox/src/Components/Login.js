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
  padding: 20px;
  text-align: center;
`
//------------------------------------------

const initialLogin = {
    username: '',
    password: ''
}


export function Login() {

    const [user, setUser] = useState(initialLogin)

    const history = useHistory()


    function handleChange(e) {

        setUser({
            ...user,
            [e.target.name]: e.target.value,
        })
    }


    const login = (e) => {
        e.preventDefault();
        axios
          .post("https://pintereach10.herokuapp.com/api/auth/login", user)
          .then((res) => {
            console.log(res);
            localStorage.setItem("token", JSON.stringify(res.data.token));
            history.push("/myarticles");
          })
          .catch((err) => console.log(err));

          setUser({
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
        <Subtitle>Login</Subtitle>

        <form onSubmit={login}>
            <input
                id="username"
                name="username"
                type="text"
                placeholder="Username"
                value={user.username}
                onChange={handleChange}
                />
            <br></br>
            <input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={user.password}
                onChange={handleChange}
                />
            <br></br>
            <button type="submit">Login!</button>
        </form>
        </InfoboxLanding>
        </div>
    )
}