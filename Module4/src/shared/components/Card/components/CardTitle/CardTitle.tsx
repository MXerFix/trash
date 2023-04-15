import React from 'react';
import styles from './cardtitle.css';

interface ICardTitleProps {
  title: string
}

export default function CardTitle(props: ICardTitleProps) {
  return (
    <h3 className={styles.title}> {props.title} </h3>
  )
}
