import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import minhaFoto from "assets/minha-foto.jpg";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="sobre mim">
      <h3 className={styles.subtitulo}>Ola, eu sou o Lucas!!</h3>

      <img
        src={minhaFoto}
        alt="Foto do Lucas"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Oi, tudo bem? Atualmente estou cursando engenharia de software. No momento, estou estudando pela plataforma Alura, e pela faculdade UNISALES
      </p>
      <p className={styles.paragrafo}>
        Quando começei na programação iniciei com Python no youtube com o canal Curso em Video, ali pude perceber que a programação era algo divertido, e decidi que queria isso pra minha vida!
      </p>
      <p className={styles.paragrafo}>
        Decidi começar pre-vest, e com dois anos de estudo consegui uma bolsa pelo PROUNI 100% na faculdade que estou no momento
      </p>
      <p className={styles.paragrafo}>Meu foco de carreira é atuar como FRONT-END, amo demais design, e me encontrei nesse Stack</p>
    </PostModelo>
  );
}
