import { useEffect, useState } from 'react';
import Form from './components/Form.jsx'
import PostsList from './components/PostsList.jsx'
import axios from 'axios';
const apiUrl = import.meta.env.VITE_BASE_API_URL


function App() {

  const [response, setResponse] = useState(null)

  // fetch posts
  const fetchPosts = async () => {
    setResponse(null)
    const url = `${apiUrl}/posts`
    const {data: response} = await axios.get(url)
    setResponse(response)
    // console.log(response)
  }

  // fetch tags 
  const [tags, setTags] = useState([])
  const fetchTags = async () => {
    const url = `${apiUrl}/tags`
    const {data: response} = await axios.get(url)
    setTags(response)
    console.log('Tags:', response)
  }

  // fetch categories
  const [categories, setCategories] = useState([])
  const fetchCategories = async () => {
    const url = `${apiUrl}/categories`
    const {data: response} = await axios.get(url)
    setCategories(response)
    console.log('Categories:', response)
  }

  useEffect(() => {
    fetchPosts()
    fetchTags()
    fetchCategories()
  }, [])

  return (
    <>
      <Form 
        tags={tags}
        categories={categories}
        onCreate= {() =>  {
          fetchPosts()
        }}
      />
      <PostsList 
        response={response}
      />
    </>
  )
}

export default App;
