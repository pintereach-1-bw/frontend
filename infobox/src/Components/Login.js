import React from 'react'
import infobox from '../infobox.png'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Subtitle = styled.h2`
  font-family: 'Quattrocento', serif;
  font-size: 2rem;
  margin-top: 10px;
  color: #9CEAEF;
`


export function Login() {

    return (
        <div>
        <Link to='/'><img className='smallinfobox' src={infobox} alt='small title'></img></Link>
        <Subtitle>Login</Subtitle>
        </div>
    )
}