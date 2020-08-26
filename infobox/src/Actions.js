import {axiosWithAuth} from './Utils/axiosWithAuth'
// import {useParams} from 'react-router-dom'


export const GET_ARTICLES = 'GET_ARTICLES';
export const EDIT_ARTICLE = 'EDIT_ARTICLE';
export const DELETE_ARTICLE = 'DELETE_ARTICLE';
export const CREATE_ARTICLE = 'CREATE_ARTICLE';
export const GET_ARTICLES_FAILURE = 'GET_ARTICLES_FAILURE';
export const POPULATE_FORM = 'POPULATE_FORM';

export const getArticles = () => dispatch => {

    axiosWithAuth() 
        .get('https://pintereach10.herokuapp.com/api/articles')
        .then(res => {
            console.log(res.data)
            dispatch({
                type: GET_ARTICLES, payload: res.data})
        })
        .catch(err => {
            dispatch({
                type: GET_ARTICLES_FAILURE,
                payload: 'Could not load articles.'
            })
        })
}

export const editArticle = (updatedArticle) => dispatch => {

    // const params = useParams()

    axiosWithAuth() 
        .put(`https://pintereach10.herokuapp.com/api/articles/${updatedArticle.id}`, updatedArticle)
        .then(res => {
            console.log(res)
            dispatch({
                type: EDIT_ARTICLE, payload: res.data})
        })
        .catch(err => {
           console.log(err)
        })
}

export const deleteArticle = (id) => dispatch => {

    // const params = useParams()

    axiosWithAuth() 
        .delete(`https://pintereach10.herokuapp.com/api/articles/${id}`)
        .then(res => {
            console.log(res.data)
            dispatch({
                type: DELETE_ARTICLE, payload: Number(res.data.id)})
        })
        .catch(err => {
            console.log(err)
        })

}

export const createArticle = (newArticle) => dispatch => {
    console.log(newArticle)
    axiosWithAuth() 
        .post('https://pintereach10.herokuapp.com/api/articles', newArticle)
        .then(res => {
            console.log(`THIS IS DATA`, res)
            dispatch({
                type: CREATE_ARTICLE, payload: res.data})
        })
        .catch(err => {
            console.log(err)
        })
}


export const populateForm = (article) => {

    return {type: POPULATE_FORM, payload: article }

}
