import React from 'react';
import styles from './cardcontent.css';

interface ICardContentProps {
  post_image: string
}

export function CardContent(props: ICardContentProps) {
  return (
    <div className={styles.card_content}>
      {/* <h3 className={styles.card_title}> {props.title} </h3> */}
      <img className={styles.card_image} src={props.post_image} alt="" />
    </div>
  );
}
