import React, { Fragment, useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import { getPost } from '../services/getPost'

const Post = () => {

    const location = useLocation();
    let history = useHistory();
    
    //corto la url y guardo el id
    const currentPath = location.pathname;
    var id = currentPath.substr(9);
    
    const [Title, setTitle] = useState('')
    const [Body, setBody] = useState('')

    var PostX = {
        Title: '',
        Body: ''
    }
    
    useEffect(() => {

        PostX = getPost(id)
        console.log(PostX.Title + "  postx")
        setTitle(PostX.Title)
        setBody(PostX.Body)

    }, [])

    const goHome = () => {

        history.push("/");
    }
    

    return (
        <Fragment>
            
            <h2> {Title} </h2>
            <p>{Body}</p>

            <button onClick={goHome} className="btn btn-dark float-right">Volver</button>
           
        </Fragment>
    )
}

export default Post
