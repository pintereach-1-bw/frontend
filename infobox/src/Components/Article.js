import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'

const ArticleCard = styled.div`
    width: 200px;
    height: 300px;
    border-radius: 12px;
    text-align: center;
    background-color: #1F7A8C;
    color: white;
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

export function Article(props) {

    return (
        <ArticleCard>
            <div><img className="article-img" src={props.article.image_url} alt="article image"></img></div>
            <h3>{props.article.title}</h3>
            <p>{props.article.article_url}</p>
            <p>{props.article.summary}</p>
            <Category>{props.article.category}</Category>
        </ArticleCard>
    )
}