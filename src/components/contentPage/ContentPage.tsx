import React from 'react';
import { ProgressBar } from '../progressBar/ProgressBar';
import { Quiz } from '../quiz/Quiz';
import * as styles from './ContentPage.module.scss';

export const ContentPage = () => {
  return (
    <div className={styles.container}>
      <Quiz />
      <ProgressBar step={2} total={10} />
    </div>
  );
};
