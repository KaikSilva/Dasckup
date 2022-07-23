import React from "react";
import styles from "./Notfound.module.scss";
import config from "config.json";
import img from "assets/web/images/errors-images/notFound.png"

const NotFound = () => {

    const date = new Date();

    return (
        <>
            <main className={styles.content}>
                <div className={styles.content__card}>
                     <h2 className={styles.content__card__title}>
                         4<span>0</span>4
                     </h2>
                    <p className={styles.content__card__title__sub}>
                        Página não encontrada :(
                    </p>
                    <span className={styles.content__card__text}>
                          A págína que você tentou acessar não existe ou está indisponível
                    </span>

                    <div className={styles.content__card__inputs}>
                        <input type="text" placeholder="Buscar algo" className="form-control"/>
                    </div>

                    <div className={styles.content__card__buttons}>
                        <button className="btn btn-primary">Home</button>
                        <button className="btn btn-primary ms-3">Suporte</button>
                    </div>

                    <img src={img} alt=""/>
                </div>

                <footer>
                    Copyright @ {date.getFullYear()} <a href={config.SITE_URL}>{config.NAME}</a> todos os direitos reservados
                </footer>
            </main>
        </>
    );
}



export default NotFound;


