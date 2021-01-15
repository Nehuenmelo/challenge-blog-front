import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { editPost } from '../services/editPost'
import getPost from '../services/getPost'

const EditFormPost = () => {

    const location = useLocation();
    //corto la url y guardo el id
    const currentPath = location.pathname;
    var id = currentPath.substr(14);

    const [title, setTitle] = useState('')
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


    return (
        <div className="my-3">
            <h2>Editar Post</h2>
            <form onSubmit={e => editPost(id, title, body, e)}>
                <label htmlFor="title" className="col-form-label-lg">Titulo</label>
                <input 
                    type="text" 
                    className="form-control" 
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor="body" className="col-form-label-lg">Contenido</label>
                <input 
                    type="text" 
                    className="form-control" 
                    onChange={e => setBody(e.target.value)}
                    value={body}
                />
                <input type="submit" className="btn btn-primary mt-4 float-right" value="Enviar"/>
            </form>
        </div>
    )
}

export default EditFormPost
