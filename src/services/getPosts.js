import Axios from 'axios'

const getPosts = async (id) => {
    
    const res = await Axios.get(`https://jsonplaceholder.typicode.com/posts`)
    
    return res.data
}

export default getPosts