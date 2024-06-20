import { useEffect, useState } from 'react';
import Form from './components/Form.jsx'
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
    console.log(response)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      <Form />
    </>
  )
}

export default App;
