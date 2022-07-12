import React, { useEffect } from 'react'
import axios from 'axios'
import { useReducer } from 'react'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something Went Wrong!!!'
            }
        default:
            return state
    }
}

function DataFetchingTwo() {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/10')
            .then(res => dispatch({ type: 'FETCH_SUCCESS', payload: res.data }))
            .catch(err => dispatch({ type: 'FETCH_ERROR' }))
    }, [])

  return (
    <>
        <h1>Data Fetching Two</h1>
        { state.loading ? 'Loading' : state.post.title }
        { state.error ? state.error : null }
        { state.post.title }
    </>
  )
}

export default DataFetchingTwo