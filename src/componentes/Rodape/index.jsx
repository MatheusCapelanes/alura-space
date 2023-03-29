import facebook from './facebook.svg'
import twitter from './twitter.svg'
import instagram from './instagram.svg'
import styles from './Rodape.module.scss'

export default function Rodape(){
    return(
        <>
            <div className={styles.rodape}>
                <div className={styles.icones}>
                    <img src={facebook} alt="icone Facebook" />
                    <img src={twitter} alt="Icone Twitter" />
                    <img src={instagram} alt="Icone Instagram" />
                </div>
                <p className={styles.texto}>Desenvolvido por Matheus Capelanes</p>
            </div>
        </>
    )
}