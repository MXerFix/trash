import React from 'react';
import { MessagesPoint } from '../../UI/MessagesPoint';
import { ProfileLink } from '../../UI/ProfileLink';
import { SearchItem } from '../../UI/SearchItem';
import styles from './searchblock.css';

export function SearchBlock() {
  return (
    <div className={styles.searchblock}>
      <ProfileLink />
      <SearchItem />
      <MessagesPoint />
    </div>
  );
}
