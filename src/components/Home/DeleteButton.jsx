import React from 'react'
import Axios from 'axios'
import { deletePost } from '../../services/deletePost'

const DeleteButton = id => {

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