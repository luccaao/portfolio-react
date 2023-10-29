import { Link } from "react-router-dom";
import styles from "./Post.module.css";

export default function PostCard({ post }) {
  return (
    
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`/video-3.1/posts/${post.id}/capa.png`}
        />

        <h2 className={styles.titulo}>{post.titulo}
        </h2>

        <button className={styles.botaoLer}>Ver Projeto</button>
      </div>
    </Link>
  );
}
