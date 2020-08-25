import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import infobox from '../infobox.png'
import {useHistory} from 'react-router-dom'
import {axiosWithAuth} from '../Utils/axiosWithAuth' 
import {Article} from './Article'



const Subtitle = styled.h2`
  font-family: 'Quattrocento', serif;
  font-size: 2rem;
  margin-top: 10px;
  color: #9CEAEF;
`




 export function Articles() {

    const history = useHistory()

    const logout = () => {
        localStorage.clear('token');
        history.push('/')
      }

    

      const [articles, setArticles] = useState([])
      const [search, setSearch] = useState('')

      useEffect(() => {
          axiosWithAuth()
          .get('https://pintereach10.herokuapp.com/api/articles')
          .then(res => {
              console.log(res)
              setArticles(res.data)       
          })
          .catch(err => {
              console.log(err)
          })
      },[])
      
      const changeSearch = e => {
          
          setSearch(e.target.value)  
      }


      const searchedArticles = articles.filter(article => {
          return article.title.indexOf(search) !== -1            
       }          
       )


    return (
        <div>
            <div className="header-container">
                <div className="header">
                    <img className="header-logo" src={infobox} alt="infbox"></img>
                    <div className="header-right">
                        <div>Welcome user</div>
                        <button onClick={logout} className="basic-button">Logout</button>
                    </div>
                </div>
            </div>
            <Subtitle>My Articles</Subtitle>

            <div>
            <input
            type='text'
            value={search}
            name='search'
            onChange={changeSearch}
            placeholder='Filter By Category'
            />
            </div>

            {searchedArticles.map(article => {                
                    return(
                        <Article article={article} searchValue={search} key={article.id} />
                    )                
            })}
            <button className="basic-button-2">Add An Article</button>
            <button className="basic-button-2">Filter By Category</button>
        </div>
    )
}