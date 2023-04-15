import React from 'react';
import styles from './cardinfo.css';

interface ICardInfoProps {
  name: string,
  time: string,
  profile_image: string
}

export function CardInfo(props: ICardInfoProps) {
  return (
    <div className={styles.cardinfo}>
      <div className={styles.cardinfo_profile}>
        <img className={styles.profile_img} src={props.profile_image} alt="" />
        <a href="#user-profile" className={styles.profile_href}>{props.name}</a>
      </div>
      <span className={styles.profile_span}> <span className={styles.tablet_span}>опубликовано</span> {props.time}</span>
    </div>
  );
}
