import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.module.css';
import App from './App';
import { firebaseApp } from './service/firebase';
import AuthService from './service/auth_service';
import CardRepository from './service/card_repository';
import ImageFileInput from './image_file_input/ImageFileInput';

const authService = new AuthService(firebaseApp);
const cardRepository = new CardRepository(firebaseApp);
const imageUploader = new ImageUploader();
const FileInput = memo((props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App authService={authService} />
  </React.StrictMode>
);
