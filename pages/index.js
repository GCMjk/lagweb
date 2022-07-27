import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lagalm Industrial</title>
        <meta name="description" content="Web Lagalm" />
        <link rel="icon" href="/lagalm.svg" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido al sitio web de <a href="/">Lagalm Industrial</a>
        </h1>

        <p className={styles.description}>
          Estamos trabajando en algunas mejoras
        </p>
      </main>

      <footer className={styles.footer}>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Derechos reservados Lagalm Industrial S.A. de C.V.
        </a>
      </footer>
    </div>
  );
}
