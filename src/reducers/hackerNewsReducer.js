import axios from "axios";

const initialState = {
    loading: false,
    article: []
}

const PENDING = 'Pending'
const REQUEST_ARTICLES = 'Request Articles'

export const requestArticles = async (dispatch) => {
    dispatch({type: PENDING})
    let articles = await axios.get('/api/hacker-news').then(res => res.data);
    dispatch({ type: REQUEST_ARTICLES, payload: articles})
}

export default function hackerNewsReducer(state=initialState, action) {
    console.log(action)
    switch (action.type) {
        case PENDING:
            return {...state, loading: true}
        case REQUEST_ARTICLES:
            console.log('hit')
            return {loading: false, articles: action.payload}
        default: 
            return state
    }
}