import React from 'react'
import styled from 'styled-components'

const Subtitle = styled.h2`
  font-family: 'Quattrocento', serif;
  font-size: 2rem;
  margin-top: 10px;
  color: #9CEAEF;
`

 export function Articles() {
    return (
        <div>
            <Subtitle>My Articles</Subtitle>
        </div>
    )
}