import React, { useState } from 'react'
import { useHistory } from "react-router-dom";


const DetailButton = id => {

    const [AskShowDetail, setAskShowDetail] = useState(false);
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