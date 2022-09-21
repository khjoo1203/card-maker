import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Login from './components/login/Login';
import Maker from './components/maker/Maker';

function App({authService}) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login authService={authService} />} />
          <Route path="/maker" element={<Maker authService={authService} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
