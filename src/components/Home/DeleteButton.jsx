import React from 'react'
import Axios from 'axios'
import { deletePost } from '../../services/deletePost'

const DeleteButton = id => {

    /* const deletePost = async (id) => {

        await Axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log("Eliminado " + res)
            })
            .catch(err => {
                console.log(err)
            })

    } */


    return (
        <button 
            className="btn btn-danger float-right ml-1"
            onClick={() => deletePost(id)}
        >
        Eliminar
        </button>
    )
}

export default DeleteButton