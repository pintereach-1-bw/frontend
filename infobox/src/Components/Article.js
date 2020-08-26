import React, { useEffect } from 'react'
// import axios from 'axios'
import styled from 'styled-components'
import { deleteArticle, populateForm } from '../Actions'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'

const ArticleCard = styled.div`
    width: 200px;
    height: auto;
    border-radius: 12px;
    text-align: center;
    background-color: #1F7A8C;
    color: white;
    margin: 15px;
    padding: 10px;
    order: ${(props) => props.id};
`

const Category = styled.div`
    width: 150px;
    height: 40px;
    border-radius: 7px;
    background-color: #F4B942;
    color: #063740;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
`

function Article(props) {

    useEffect(() => {
        console.log(props)
    }, [])

   const history = useHistory()

    return (
        <ArticleCard id={props.article.id}>
            <div><img className="article-img" src={props.article.image_url} alt="article pic"></img></div>
            <h3>{props.article.title}</h3>
            <a className="read" href={props.article.article_url}>Read Article</a>
            <p>{props.article.summary}</p>
            <Category>{props.article.category}</Category>
            <br></br>
            <button onClick={() => {
                props.populateForm(props.article)
                history.push('/editarticle') 
            }
            }>Edit</button>
            <button onClick={() => props.deleteArticle(props.article.id) }>Delete</button>
        </ArticleCard>
    )
}

export default connect(null, {deleteArticle, populateForm})(Article)