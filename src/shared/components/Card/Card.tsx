import React from 'react';
import styles from './card.css';
import { CardActions } from './components/CardActions';
import { CardContent } from './components/CardContent';
import { CardInfo } from './components/CardInfo';
import CardTitle from './components/CardTitle/CardTitle';


interface ICardProps {
  post: {
    user_info: {
      name: string,
      profile_image: string
    },
    post_info: {
      title: string,
      post_image: string,
      time: string
    }
  }
}



export function Card(props: ICardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.card__info_title_content}>
        <div className={styles.card__info_title}>
          <CardInfo name={props.post.user_info.name} profile_image={props.post.user_info.profile_image} time={props.post.post_info.time} />
          <a className={styles.post_link} href='#post-url'><CardTitle title={props.post.post_info.title} /></a>
        </div>
        <CardContent post_image={props.post.post_info.post_image} />
      </div>
      <CardActions />
    </div>
  );
}
