import React from 'react'
import ReactDOM from 'react-dom/client'
import { initializeApp } from "firebase/app";
import App from './App.jsx'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNziiSGG6psnaec0wWFXV0RKtuuBZn6MY",
  authDomain: "webviajes-ebcca.firebaseapp.com",
  projectId: "webviajes-ebcca",
  storageBucket: "webviajes-ebcca.appspot.com",
  messagingSenderId: "225926310746",
  appId: "1:225926310746:web:aac64776717c65c176e163"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
