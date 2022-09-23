import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Editor from '../editor/Editor';
import Preview from '../preview/Preview';
import styles from './Maker.module.css';

const Maker = ({ FileInput, authService, cardRepository }) => {
  const navigate = useNavigate();
  const navigateState = useLocation().state;
  const [cards, setCards] = useState({
    // 1: {
    //   id: '1',
    //   name: 'Ellie',
    //   company: 'Samsung',
    //   theme: 'dark',
    //   title: 'Software Engineer',
    //   email: 'ellie@gmail.com',
    //   message: 'go for it',
    //   fileName: 'ellie',
    //   fileURL: null,
    // },
    // 2: {
    //   id: '2',
    //   name: 'Ellie2',
    //   company: 'Samsung',
    //   theme: 'light',
    //   title: 'Software Engineer',
    //   email: 'ellie@gmail.com',
    //   message: 'go for it',
    //   fileName: 'ellie',
    //   fileURL: null,
    // },
    // 3: {
    //   id: '3',
    //   name: 'Ellie3',
    //   company: 'Samsung',
    //   theme: 'colorful',
    //   title: 'Software Engineer',
    //   email: 'ellie@gmail.com',
    //   message: 'go for it',
    //   fileName: 'ellie',
    //   fileURL: null,
    // },
  });
  const [userId, setUserId] = useState(navigateState && navigateState.id);

  const onLogout = () => {
    authService.logout();
  };
  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync()
  }, [userId, cardRepository]);
  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate('/');
      }
    });
  }, [userId, navigate, authService]);

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    cardRepository.removeCard(userId, card);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
