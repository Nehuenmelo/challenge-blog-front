import React, { Fragment, useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import getPost from '../services/getPost'

const Post = () => {

    const location = useLocation();
    let history = useHistory();
    
    //corto la url y guardo el id
    const currentPath = location.pathname;
    var id = currentPath.substr(9);
    
    const [title, setTitle] = useState('dad')
    const [body, setBody] = useState('')
    
    useEffect(() => {

        getPost(id).then(postX => {
            setTitle(postX.title)
            setBody(postX.body)
        })
        .catch(err => {
            console.log(err)
        })
        

    }, [])

    const goHome = () => {

        history.push("/");
    }
    

    return (
        <Fragment>
            
            <h2> {title} </h2>
            <p>{body}</p>

            <button onClick={goHome} className="btn btn-dark float-right">Volver</button>
           
        </Fragment>
    )
}

export default Post
