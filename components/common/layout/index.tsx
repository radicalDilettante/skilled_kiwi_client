import React, { ReactChild } from 'react';

import AuthService from '../../../utils/modules/auth';
import Footer from '../footer';
import Header from '../header';
import styles from './style.module.css';

interface IProps {
  children: ReactChild;
  date: Date;
  authService: AuthService;
}

export default function Layout({ children, date, authService }: IProps) {
  return (
    <div className={styles.container}>
      <Header authService={authService} />
      <section className={styles.contents}>{children}</section>
      <Footer date={date} />
    </div>
  );
}
