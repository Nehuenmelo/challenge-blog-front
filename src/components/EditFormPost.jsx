import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { useLocation, useHistory } from 'react-router-dom'
import { editPost } from '../services/editPost';

const EditFormPost = () => {

    const location = useLocation();
    let history = useHistory();

    

    const [Title, setTitle] = useState('')
    const [Body, setBody] = useState('')

    //corto la url y guardo el id
    const currentPath = location.pathname;
    var id = currentPath.substr(14);

    useEffect(() => {

        const getPost = async () => {
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
        }

        getPost()

    }, [])

    /* const editar = async (e) => {

        e.preventDefault()
    
        if(!Title.trim() || !Body.trim()){
            alert("Complete todos los campos")
            return
        } 

        try {
            Axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                id: id,
                title: Title,
                body: Body,
                userId: 1
            }).then(res => {
                // Respuesta del servidor
                console.log("post editado")
            }).catch(e => {
                console.log(e);
            });
        } catch (err){
            console.log(err)
        }
        
    } */

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
