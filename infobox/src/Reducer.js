import {GET_ARTICLES, GET_ARTICLES_FAILURE, CREATE_ARTICLE, DELETE_ARTICLE, EDIT_ARTICLE} from "./Actions"

const initialState = {
    username: '',
    articles: [],
    article: {
        id: '',
        title: '',
        category: '',
        article_url: '',
        image_url: '',
        summary: ''
    },
    error: ''
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_ARTICLES:
            return {
                ...state,
                articles: action.payload,
                username: action.payload.username
            }
        
        case CREATE_ARTICLE:
            console.log(action.payload)
            return {
                ...state,
                articles: [...state.articles, action.payload]
            }

        case DELETE_ARTICLE:
            console.log(action.payload)
            return {
                ...state,
                articles: [...state.articles]
            }

        case EDIT_ARTICLE:
            console.log(action.payload)
            return {
                ...state,
                articles: [...state.articles, action.payload]
            }

        case GET_ARTICLES_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        
        default:
            return state;
    }

}