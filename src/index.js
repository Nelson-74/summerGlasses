import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';    //Se importa css de Bootstrap para utilizar en mi proyecto.
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD3ghEwf7xW0eveERh8XGSKCjG2ftr3j8U",
  authDomain: "summers-glasses-c69c6.firebaseapp.com",
  projectId: "summers-glasses-c69c6",
  storageBucket: "summers-glasses-c69c6.appspot.com",
  messagingSenderId: "327761426957",
  appId: "1:327761426957:web:267dab28de1c86bfb8b344"
};

 initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <>
     <App/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
