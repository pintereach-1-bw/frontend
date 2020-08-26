import React, {useState} from 'react'
import infobox from '../infobox.png'
import styled from 'styled-components'
import {useHistory, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {createArticle} from '../Actions'


const Subtitle = styled.h2`
  font-family: 'Quattrocento', serif;
  font-size: 2rem;
  margin-top: 10px;
  color: #9CEAEF;
`

const initialNewArticle = {
    title: '',
    category: '',
    article_url: '',
    image_url: '',
    summary: ''
}


function ArticleForm(props) {

    const history = useHistory()

    const logout = () => {
        localStorage.clear('token');
        history.push('/')
      }


    const [newArticle, setNewArticle] = useState(initialNewArticle)



    function handleChange(e) {

        setNewArticle({
            ...newArticle,
            [e.target.name]: e.target.value,
        })
    }


    const addNewArticle = (e) => {
        e.preventDefault();
        props.createArticle(newArticle)
        history.push('/myarticles')

          setNewArticle({
            title: '',
            category: '',
            article_url: '',
            image_url: '',
            summary: ''
          })
          
      };


    return (

        <div>
            <div className="header-container">
                <div className="header">
                    <Link to='/'><img className="header-logo" src={infobox} alt="infbox"></img></Link>
                    <div className="header-right">
                        <div>Welcome {props.username}</div>
                        <button onClick={logout} className="basic-button">Logout</button>
                    </div>
                </div>
            </div>

            <div className="article-form-body">
            <Subtitle>Add New Article</Subtitle>
            <form onSubmit={addNewArticle}>
                <label htmlFor="title">Title:</label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    value={newArticle.title}
                    onChange={handleChange}
                />
                <br></br><br></br>
                <label htmlFor="category">Category:</label>
                <input
                    id="category"
                    type="text"
                    name="category"
                    value={newArticle.category}
                    onChange={handleChange}
                />
                <br></br><br></br>
                <label htmlFor="articleurl">Article URL:</label>
                <input
                    id="articleurl"
                    type="text"
                    name="article_url"
                    value={newArticle.article_url}
                    onChange={handleChange}
                />
                <br></br><br></br>
                <label htmlFor="imageurl">Image URL:</label>
                <input
                    id="imageurl"
                    type="text"
                    name="image_url"
                    value={newArticle.image_url}
                    onChange={handleChange}
                />
                <br></br><br></br>
                <label htmlFor="summary">Summary:</label>
                <textarea
                    id="summary"
                    type="text"
                    name="summary"
                    value={newArticle.summary}
                    onChange={handleChange}
                />
                <br></br><br></br>
                <button type="submit">Submit</button>

            </form><br></br>
            <Link to='/myarticles'><button className="basic-button-2">Back to Articles</button></Link>
            </div>
        </div>

    )
}


  
  export default connect(null, {createArticle})(ArticleForm)