import React  from 'react'
import { useHistory, useState } from "react-router-dom";
/* import   showDetail   from '../../services/useShowDetail'; */


const DetailButton = id => {
    
    let history = useHistory();

    const showDetail = (id) => {

        console.log(id)
 
        history.push(`/post/id=${id.item}`); //Link to FormPost Component
        
    }


    return (
        <button 
            className="btn btn-secondary float-right"
            onClick={() => showDetail(id)}
        >
        Detalle
        </button>
    )
}

export default DetailButton