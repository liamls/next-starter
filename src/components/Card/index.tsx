"use client";

import styles from "./Card.module.css";

export default function Card({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className={styles.card}>
      <h2>{title}</h2>
      <p className={styles.description}>{description}</p>
      <div>{children}</div>
    </section>
  );
}
