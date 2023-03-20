import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC8u3dIRRUrlkJVEiNAUpv-CIeai7G1rIc",
  authDomain: "manager-13e69.firebaseapp.com",
  projectId: "manager-13e69",
  storageBucket: "manager-13e69.appspot.com",
  messagingSenderId: "554786069017",
  appId: "1:554786069017:web:f301675ac54cc5f8f6e888"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));
