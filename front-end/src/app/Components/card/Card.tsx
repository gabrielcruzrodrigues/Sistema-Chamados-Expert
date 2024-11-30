import React from 'react';
import styles from './Card.module.sass';

interface CardProps {
  title: string;
  value: string;
  description: string;
  percentage: string;
}

const Card: React.FC<CardProps> = ({ title, value, description, percentage }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h4>{title}</h4>
        <span className={styles.percentage}>{percentage}</span>
      </div>
      <div className={styles.content}>
        <h2>{value}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
