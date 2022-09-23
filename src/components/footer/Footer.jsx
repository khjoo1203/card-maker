import React, { memo } from 'react';
import styles from './Footer.module.css';

const Footer = memo(() => {
  return (
    <Footer className={styles.footer}>
      <p className={styles.title}>Code your dream</p>
    </Footer>
  );
});

export default Footer;
