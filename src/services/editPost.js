import React from 'react'
import Axios from 'axios'

export const editPost = async (id, Title, Body, e) => {

    e.preventDefault()

    if(!Title.trim() || !Body.trim()){
        alert("Complete todos los campos")
        return
    } 

    try {
        await Axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            id: id,
            title: Title,
            body: Body,
            userId: 1
        }).then(res => {
            console.log("post editado")
        }).catch(e => {
            console.log(e);
        });
    } catch (err){
        console.log(err)
    }

    
    
}