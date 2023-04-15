import React from 'react';
import { HeadTitle } from '../../UI/HeadTitle';
import { SearchBlock } from '../SearchBlock';
import styles from './header.css';



export function Header() {
  return (
    <div className={styles.header}>
      <HeadTitle title='Head Title' />
      <SearchBlock />
    </div>
  );
}
