import React, { Fragment, useEffect, useState } from 'react'
import Axios from 'axios'
import { useLocation, useHistory } from 'react-router-dom'

const Post = () => {

    const location = useLocation();
    let history = useHistory();
    
    //corto la url y guardo el id
    const currentPath = location.pathname;
    var id = currentPath.substr(9);
    
    const [Title, setTitle] = useState('')
    const [Body, setBody] = useState('')

    

    
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

    const goBack = () => {

        

        history.push("/");
    }
    

    return (
        <Fragment>
            
            <h2> {Title} </h2>
            <p>{Body}</p>

            <button onClick={goBack} className="btn btn-dark float-right">Volver</button>
           
        </Fragment>
    )
}

export default Post
