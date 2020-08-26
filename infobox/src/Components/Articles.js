import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import infobox from '../infobox.png'
import {useHistory, Link} from 'react-router-dom'
// import {axiosWithAuth} from '../Utils/axiosWithAuth' 
import Article from './Article'
import {connect} from 'react-redux'
import {getArticles} from '../Actions'



const Subtitle = styled.h2`
  font-family: 'Quattrocento', serif;
  font-size: 2rem;
  margin-top: 10px;
  color: #9CEAEF;
`




 const Articles = (props) => {

    const history = useHistory()

    const logout = () => {
        localStorage.clear('token');
        history.push('/')
      }

    useEffect(() => {
        props.getArticles()
        
    }, [])
    

    //   const [articles, setArticles] = useState([])

      const [search, setSearch] = useState('')

    //   useEffect(() => {
    //       axiosWithAuth()
    //       .get('https://pintereach10.herokuapp.com/api/articles')
    //       .then(res => {
    //           console.log(res)
    //           setArticles(res.data)       
    //       })
    //       .catch(err => {
    //           console.log(err)
    //       })
    //   },[])
      
      const changeSearch = e => {
          
          setSearch(e.target.value)  
      }

      console.log(props)
      const searchedArticles = props.articles.filter(article => {
          return article.category.indexOf(search) !== -1            
       }          
       )


    return (
        <div>
            <div className="header-container">
                <div className="header">
                    <Link to='/'><img className="header-logo" src={infobox} alt="infbox"></img></Link>
                    <div className="header-right">
                        <div className="welcome">Welcome {props.username}</div>
                        <button onClick={logout} className="basic-button">Logout</button>
                    </div>
                </div>
            </div>
            

           

            <div className="articles-body">

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

                <div className="article-cards">

                {props.error}
                    
                {searchedArticles.map(article => {                
                        return(
                            
                                <Article article={article} key={article.id} />
                            
                        )                
                })}
                </div>
                <Link className="add-article" to='/newarticle'><button className="basic-button-2">Add An Article</button></Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => {

    return {
       username: state.username,
       articles: state.articles,
       error: state.error
    }
  
  }
  
  export default connect(mapStateToProps, {getArticles})(Articles)