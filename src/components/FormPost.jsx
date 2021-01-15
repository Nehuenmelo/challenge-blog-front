import React, { useState } from 'react'
import Axios from 'axios'

const FormPost = () => {

    
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [error, setError] = useState(false)
    
    const agregar = async (e) => {

        e.preventDefault()
    
        if(!title.trim() || !body.trim()){

            setError(true)
            
            return 
        } 


        try {
            Axios.post('https://jsonplaceholder.typicode.com/posts', {
                title: title,
                body: body
            }).then(res => {
                // Respuesta del servidor
                console.log("post agregado")
                setError(false)
            }).catch(e => {
                console.log(e);
            });
        } catch (err){
            console.log(err)
        }
        
    }

    return (
        <div className="my-5">
            <h2>Agregar Post</h2>
            <form onSubmit={agregar}>
                {
                    error? <h3 className="text-danger">Complete todos los campos</h3> : null
                }
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

export default FormPost
