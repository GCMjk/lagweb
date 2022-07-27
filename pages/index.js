import Head from "next/head";
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
          Bienvenido al sitio web de{" "}
          <Link href="/">
            <a>Lagalm Industrial</a>
          </Link>
        </h1>

        <p className={styles.description}>
          Estamos trabajando en algunas mejoras
        </p>
      </main>

      <footer className={styles.footer}>
        <Link href="/">
          <a>Derechos reservados Lagalm Industrial S.A. de C.V.</a>
        </Link>
      </footer>
    </div>
  );
}
