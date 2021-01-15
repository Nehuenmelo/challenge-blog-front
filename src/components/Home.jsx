import React, { useEffect, useState } from 'react'

import DeleteButton from './Home/DeleteButton'
import EditButton from './Home/EditButton'
import DetailButton from './Home/DetailButton'

import getPosts from '../services/getPosts'
import FormPost from './FormPost'

const Home = () => {

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
            
            <FormPost />
            <h2 className="">Posts</h2>
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
                                <DeleteButton item={item.id}/>

                                <EditButton item={item.id}/>
                                <DetailButton item={item.id}/>
                                
                            </div>
                        </div>
                        
                        
                    </li>
                ))
            }
            </ul>

        </div>
    )
}

export default Home
