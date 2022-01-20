import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/home.module.css';

const Home: NextPage = () => {
  const pageList = [
    {
      bg: '/img/card01.jpg',
      msg: () => (
        <div className={styles.msg_left}>
          I need a hand.
          <br />
          <b>Skilled hands!</b>
          <div>
            <button>Find Someone to help</button>
          </div>
        </div>
      ),
    },
    {
      bg: '/img/card02.jpg',
      msg: () => (
        <div className={styles.msg_right}>
          <b>Skilled Kiwis</b>
          <br />
          helps each other
          <br />
          in the community
          <div>
            <button>Find Requests</button>
            <button>Post a Request</button>
          </div>
        </div>
      ),
    },
    {
      bg: '/img/card03.jpg',
      msg: () => (
        <div className={styles.msg_left}>
          Earn extra income
          <br />
          in your spare time.
          <br />
          <b>We need you!</b>
          <div>
            <button>Make extra money</button>
          </div>
        </div>
      ),
    },
  ];
  const [page, setPage] = useState(0);

  const turnPage = () => {
    if (page < pageList.length - 1) {
      setPage(page + 1);
    } else {
      setPage(0);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Skilled Kiwi || I need or I am</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.card}>
        <img src={pageList[page].bg} />
        <div className={styles.msg_wrapper}>{pageList[page].msg()}</div>
        <ul className={styles.button_wrapper}>
          {pageList.map((page, index) => (
            <li
              key={index}
              onClick={() => {
                setPage(index);
              }}
            >
              ·
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
