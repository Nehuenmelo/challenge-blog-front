import React from 'react'
import { useHistory } from "react-router-dom";

const EditButton = id => {

    let history = useHistory();

    const showEditForm = (id) => {

        console.log(id)

        history.push(`/edit-post/id=${id.item}`); //Link to EditFormPost Component
        
    }

    return (
        <button 
            className="btn btn-warning float-right ml-1"
            onClick={() => showEditForm(id)}
        >
            Editar
        </button>
    )
}

export default EditButton