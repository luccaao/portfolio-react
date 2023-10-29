import { useParams } from "react-router-dom"
import posts from "../../json/posts.json"
import PostCard from "componentes/PostCard";
import PostModelo from "componentes/PostModelo";
import NaoEncontrada from "componentes/NaoEncontrada";

export default function Post () {
    const parametros = useParams()
    const post = posts.find((post) => {
        return post.id === Number(parametros.id)
    })

    if(!post) {
        return <NaoEncontrada/>
    }
    return (
       <PostModelo
       fotoCapa={`video-3.1/posts/${post.id}/capa.png`}
       titulo={post.titulo}>
        <img fotoCapa={`video-3.1/posts/${post.id}/capa.png`}/>
        
           
        {post.texto}

       </PostModelo>
    ) 
}