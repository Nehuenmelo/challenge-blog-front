import Axios from 'axios'

export const getPost = (id) => {
    console.log(id)

    var PostX = {
        Title: 'holanda',
        Body: 'dadad'
    }

    

    
    Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((res) => {
            PostX.Title = res.data.title;
            PostX.Body = res.data.body;

            console.log(PostX.Title) //guarda el titulo ok
            console.log(res.data);

            
        })
        .catch(err => {
            PostX.Title = "No existe el post";
            console.log(err + "Error peticion")
        })
    
        return PostX
}