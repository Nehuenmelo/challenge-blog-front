import Axios from 'axios'

const getPost = async (id) => {
    
    const res = await Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    
    return res.data
}

export default getPost