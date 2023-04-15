import React from 'react';
import { LikesCounter } from '../../../../UI/LikesCounter';
import { OpenComments } from '../../../../UI/OpenComments';
import { OpenDropDown } from '../../../../UI/OpenDropDown';
import { SavePost } from '../../../../UI/SavePost';
import { SharePost } from '../../../../UI/SharePost';
import styles from './cardactions.css';

export function CardActions() {
  return (
    <div className={styles.card_actions}>
      <div className={styles.dropdown}><OpenDropDown /></div>
      <div className={styles.likes_counter}><LikesCounter /></div>
      <div className={styles.open_comments}><OpenComments /></div>
      <div className={styles.card_actions_post}>
        <SharePost />
        <SavePost />
      </div>
    </div>
  );
}
