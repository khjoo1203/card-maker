import React from 'react';
import styles from './Preview.module.css';
import Card from '../card/Card';

const Preview = ({ cards }) => {
  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <ul className={styles.cards}>
      {cards.map((card) => (
        <Card card={card} />
      ))}
      </ul>
    </section>
  );
};

export default Preview;
