import React from 'react';
import { DropDownFilter } from '../../components/DropDownFilter';
import { Header } from '../../components/Header';
import styles from './head.css';


export function Head() {
  return (
    <div className={styles.head}>
      <Header />
      <DropDownFilter />
    </div>
  );
}
