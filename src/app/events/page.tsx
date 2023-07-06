import styles from "@/styles/pages/Events.module.scss";

export default function page() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={`container ${styles.hero__content}`}>
          <h1 className={styles.hero__title}>Discover and attend our events</h1>
          <p className={styles.hero__description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            corporis repellendus cum voluptatem ducimus est nemo voluptates
            explicabo quisquam omnis!
          </p>
        </div>
      </section>
      <section className={`container ${styles.events}`}></section>
    </main>
  );
}
