import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { useLocation } from 'react-router-dom'
import { editPost } from '../services/editPost'
import { getPost } from '../services/getPost'

const EditFormPost = () => {

    const location = useLocation();
    //corto la url y guardo el id
    const currentPath = location.pathname;
    var id = currentPath.substr(14);

    var PostX = {
        Title: '',
        Body: ''
    }

    const [Title, setTitle] = useState('')
    const [Body, setBody] = useState('')

    useEffect((id) => {

        /* const getPost = async () => {
            console.log(id)

            try {
                Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                    .then((res) => {
                        setTitle(res.data.title)
                        setBody(res.data.body)

                        console.log(res.data);
                    })
                    .catch(err => {
                        setTitle("No existe el post")
                        console.log(err)
                    })
            }
            catch(err) {
                console.log(err)
            }
        } */

        PostX = getPost(id)

        setTitle(PostX.Title);
        setBody(PostX.Body);

    }, [])


    return (
        <div className="my-3">
            <h2>Editar Post</h2>
            <form onSubmit={e => editPost(id, Title, Body, e)}>
                <label htmlFor="title" className="col-form-label-lg">Titulo</label>
                <input 
                    type="text" 
                    className="form-control" 
                    onChange={e => setTitle(e.target.value)}
                    value={Title}
                />
                <label htmlFor="body" className="col-form-label-lg">Contenido</label>
                <input 
                    type="text" 
                    className="form-control" 
                    onChange={e => setBody(e.target.value)}
                    value={Body}
                />
                <input type="submit" className="btn btn-primary mt-4 float-right" value="Enviar"/>
            </form>
        </div>
    )
}

export default EditFormPost
