import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//FIREBASE

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByBsRTl3w0iFpvZimZKWdFQ_pjUlpw1QU",
  authDomain: "coderhouse-ecommerce-7044c.firebaseapp.com",
  projectId: "coderhouse-ecommerce-7044c",
  storageBucket: "coderhouse-ecommerce-7044c.appspot.com",
  messagingSenderId: "1004539003596",
  appId: "1:1004539003596:web:5e35af47fb95272e2af869",
  measurementId: "G-8WTN07WDN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
