import Axios from 'axios'

export const deletePost = async (id) => {

    await Axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log("Eliminado " + res)
        })
        .catch(err => {
            console.log(err)
        })

}