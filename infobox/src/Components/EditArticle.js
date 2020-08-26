import React, {useState} from 'react'
import infobox from '../infobox.png'
import styled from 'styled-components'
import {useHistory, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {editArticle} from '../Actions'


const Subtitle = styled.h2`
  font-family: 'Quattrocento', serif;
  font-size: 2rem;
  margin-top: 10px;
  color: #9CEAEF;
`




function EditArticle(props) {

    const history = useHistory()

    const logout = () => {
        localStorage.clear('token');
        history.push('/')
      }


    const [updatedArticle, setUpdatedArticle] = useState(props.article)



    function handleChange(e) {

        setUpdatedArticle({
            ...updatedArticle,
            [e.target.name]: e.target.value,
        })
    }


    const updateArticle = (e) => {
        e.preventDefault();
        props.editArticle(updatedArticle)
        history.push('/myarticles')

          setUpdatedArticle({
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
            <Subtitle>Edit Article</Subtitle>
            <form onSubmit={updateArticle}>
                <label htmlFor="title">Title:</label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    value={updatedArticle.title}
                    onChange={handleChange}
                />
                <br></br><br></br>
                <label htmlFor="category">Category:</label>
                <input
                    id="category"
                    type="text"
                    name="category"
                    value={updatedArticle.category}
                    onChange={handleChange}
                />
                <br></br><br></br>
                <label htmlFor="articleurl">Article URL:</label>
                <input
                    id="articleurl"
                    type="text"
                    name="article_url"
                    value={updatedArticle.article_url}
                    onChange={handleChange}
                />
                <br></br><br></br>
                <label htmlFor="imageurl">Image URL:</label>
                <input
                    id="imageurl"
                    type="text"
                    name="image_url"
                    value={updatedArticle.image_url}
                    onChange={handleChange}
                />
                <br></br><br></br>
                <label htmlFor="summary">Summary:</label>
                <textarea
                    id="summary"
                    type="text"
                    name="summary"
                    value={updatedArticle.summary}
                    onChange={handleChange}
                />
                <br></br><br></br>
                <button type="submit">Submit</button>

            </form>
            </div>
        </div>

    )
}


const mapStateToProps = state => {

    return {
       username: state.username,
       articles: state.articles,
       article: state.article,
       error: state.error
    }
  
  }

  
  export default connect(mapStateToProps, {editArticle})(EditArticle)