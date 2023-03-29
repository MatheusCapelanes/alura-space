import banner from './banner.png'
import Menu from '../../componentes/Menu';
import styles from './PaginaInicial.module.scss'


export default function Banner() {
  return (
    <>
      <main>
        <section className={styles.principal}>
          <Menu />
          <div className={styles.principal__imagem}>
            <h1>A galeria mais completa do espaço</h1>
            <img src={banner} alt="A imagem da terra vista do espaço" />
          </div>
        </section>
      </main>
    </>
  );
}