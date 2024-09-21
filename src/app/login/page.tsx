'use client';

import styles from '@/styles/Login.module.css';

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Log in</h1>
      <form className={styles.form}>
        <input type="email" placeholder="Email" className={styles.input} />
        <input type="password" placeholder="Password" className={styles.input} />
        <button type="submit" className={styles.button}>Log in</button>
      </form>
    </div>
  );
}