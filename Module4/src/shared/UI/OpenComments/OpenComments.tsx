import React from 'react';
import styles from './opencomments.css';

export function OpenComments() {
  return (
    <div className={styles.open_comments}>
      <img src="http://web-project-test.ru/img-for-react/comment.svg" alt="" />
      <span className={styles.open_comments_span}>22</span>
    </div>
  );
}
