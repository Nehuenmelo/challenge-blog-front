import { Fragment, useEffect } from 'react'
import Axios from 'axios'
import Post from '../components/Post'

export const detailPost = (props) => {

        

        const getPost = async () => {
            try {
                Axios.get(`https://jsonplaceholder.typicode.com/posts/:${props.id}`)
                    .then((res) => {
                        
                        console.log(res.data);
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
            catch(err) {
                console.log(err)
            }
        }

        getPost()


    return (
        <Fragment>
            <Post item={props.item}/>

        </Fragment>
    )
}