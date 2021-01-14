import React, { useState } from 'react'
import Axios from 'axios'

const FormPost = () => {

    const [ModoEdicion, setModoEdicion] = useState(false)
    const [Title, setTitle] = useState('')
    const [Body, setBody] = useState('')

    const agregar = async (e) => {

        e.preventDefault()
    
        if(!Title.trim() || !Body.trim()){
            alert("Complete todos los campos")
            return
        } 

        try {
            Axios.post('https://jsonplaceholder.typicode.com/posts', {
                title: Title,
                body: Body
            }).then(res => {
                // Respuesta del servidor
                console.log("post agregado")
            }).catch(e => {
                console.log(e);
            });
        } catch (err){
            console.log(err)
        }
        
    }

    return (
        <div className="my-3">
            <h2>Agregar Post</h2>
            <form onSubmit={agregar}>
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

export default FormPost
