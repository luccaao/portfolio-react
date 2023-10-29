import styles from "./Banner.module.css";
import circuloColorido from "../assets/circulo_colorido.png"
import minhaFoto from "../assets/profile.jpg"


export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Bem-vindo ao portfolio com Reac!
                </h1>
                <p className={styles.paragrafo}>
                    Meu nome é Lucas, atualmente cursando Engenharia de Software, aqui voce encontrara projetos feitos por mim.
                </p>
            </div>

            <div className= {styles.imagens}>
                    <img className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}>
                    </img>

                    <img className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="foto minha" />
                    
            </div>
        </div>
    )
}