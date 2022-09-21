import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Editor from '../editor/Editor';
import Preview from '../preview/Preview';
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
        <div className={styles.container}>
            <Editor />
            <Preview />
        </div>
        <Footer />
    </section>
  )
}

export default Maker;