import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function DataFetchingOne() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                setLoading(false)
                setPost(res.data)
                setError('')
            })
            .catch(err => {
                setLoading(false)
                setPost({})
                setError('Something Went Wrong!!!')
            })
    }, [])

    return (
        <>
            <h1>Data Fetching One</h1>
            { loading ? 'Loading' : post.title }
            { error ? error : null }
        </>
    )
}