import React, { useEffect, useState } from 'react'

import EditButton from './Home/EditButton'

import getPosts from '../services/getPosts'

const EditForm = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {

        getPosts().then(postX => {
            setPosts(postX)
        })
        .catch(err => {
            console.log(err)
        })
        

    }, [])



    return (
        <div className="my-3">
    
            <h2 className="">Posts</h2>
            
            <div className="form-floating">
                <ul className="list-group">
                
                {
                    posts.map(item => (
                        
                        
                        
                        
                        
                        <li className="list-group-item" key={item.id}>
                            <div className="row">
                                <div className="col-2 mt-2">
                                    <h5>ID: {item.id}</h5>
                                </div>
                                <div className="col-10">
                                    <h3 className="mb-4">{item.title}</h3>
                                    <p>{item.body}</p>

                                    <EditButton item={item.id}/>
                                    
                                </div>
                            </div>
                            
                            
                        </li>
                    ))
                }
                </ul>
            </div>
            

        </div>
    )
}

export default EditForm
