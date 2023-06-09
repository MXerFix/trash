import React from 'react';
import styles from './likescounter.css';

export function LikesCounter() {
  return (
    <div className={styles.likes}>
      <button className={styles.likes_btn}>
        <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className={styles.likes_svg_path_plus} d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4" />
        </svg>
      </button>
      <span className={styles.likes_span}>334</span>
      <button className={styles.likes_btn} id={styles.rotate}>
        <svg width="19" height="10" viewBox="0 0 19 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className={styles.likes_svg_path_minus} d="M9.5 0L0 10H19L9.5 0Z" fill="#C4C4C4" />
        </svg>
      </button>
    </div>
  );
}
