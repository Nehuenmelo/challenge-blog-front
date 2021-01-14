import React, { useEffect, useState } from 'react'
import Axios from 'axios'

import DeleteButton from './Home/DeleteButton'
import EditButton from './Home/EditButton'
import DetailButton from './Home/DetailButton'



const Home = () => {

    const [Posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                Axios.get('https://jsonplaceholder.typicode.com/posts')
                    .then((res) => {
                        console.log("Posts actualizados");
                        setPosts(res.data);
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
            catch(err) {
                console.log(err)
            }
        }

        getPosts()
        
    }, [])

    

    return (
        <div className="my-3">
        <h2>Posts</h2>
        <ul className="list-group">

        
        {
            Posts.map(item => (
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
