import React from 'react';
import { Card } from '../Card/Card';
import styles from './cardslist.css';

const postDATA = [
  {
    user_info: {
      name: 'Владимир Петров',
      profile_image: 'http://web-project-test.ru/img-for-react/profile-post-1.jpg'
    },
    post_info: {
      title: 'Следует отметить, что новая модель организационной деятельности...',
      post_image: "http://web-project-test.ru/img-for-react/post-1.jpg",
      time: '3 часа назад',
    }
  },
  {
    user_info: {
      name: 'Ирина Зверева',
      profile_image: 'http://web-project-test.ru/img-for-react/profile-post-2.jpg'
    },
    post_info: {
      title: 'С учётом сложившейся международной обстановки',
      post_image: "http://web-project-test.ru/img-for-react/post-2.jpg",
      time: '5 часов назад',
    }
  },
  {
    user_info: {
      name: 'Олег Уткин',
      profile_image: 'http://web-project-test.ru/img-for-react/profile-post-3.jpg'
    },
    post_info: {
      title: 'Мы вынуждены отталкиваться от того, что означает...',
      post_image: "http://web-project-test.ru/img-for-react/post-3.jpg",
      time: '12 часов назад',
    }
  }

]

export function CardsList() {
  return (
    <div className={styles.cardslist}>
      {postDATA.map((post) =>
        <Card post={post} />
      )}
    </div>
  );
}
