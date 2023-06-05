import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBPF9UU9dwopVvSfVrAXHmzaz49nxZTHwM",
    authDomain: "portfolio-7c2f7.firebaseapp.com",
    projectId: "portfolio-7c2f7",
    storageBucket: "portfolio-7c2f7.appspot.com",
    messagingSenderId: "61701188537",
    appId: "1:61701188537:web:b1e3b622a66c36342f6468"
};

const app = initializeApp(firebaseConfig);

export default app