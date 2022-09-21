import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import styles from './Maker.module.css';

const Maker = ({authService}) => {
  const navigate = useNavigate();  
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange(user => {
        if(!user) {
            navigate('/');
        }
    })
  });

  return (
    <section className={styles.maker}>
        <Header onLogout={onLogout} />
        <Footer />
    </section>
  )
}

export default Maker;