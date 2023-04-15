import React from 'react';
import styles from './headtitle.css';

interface IHeadTitleProps {
  title: string
}

export function HeadTitle(props: IHeadTitleProps) {
  return (
    <h2 className={styles.headtitle}>
      {props.title}
    </h2>
  );
}
