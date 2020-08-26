import {GET_ARTICLES, GET_ARTICLES_FAILURE, CREATE_ARTICLE, DELETE_ARTICLE, EDIT_ARTICLE, POPULATE_FORM} from "./Actions"

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
            console.log(action.payload.articles)
            return {
                ...state,
                articles: (action.payload.articles || []),
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
            console.log(state.articles.filter((article) =>  (article.id !== action.payload)))
            console.log({
                ...state,
                articles: state.articles.filter((article) =>  (article.id !== action.payload))
            })
            
            return {
                ...state,
                articles: state.articles.filter((article) =>  (article.id !== action.payload))
            }

        case EDIT_ARTICLE:
            console.log(action.payload)
            return {
                ...state,
                articles: state.articles.map((article) => {
                    if (article.id === action.payload.id) {
                        return action.payload
                    } else {
                        return article
                    }
                })
            }

        case POPULATE_FORM:

            return {
                ...state,
                article: action.payload
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