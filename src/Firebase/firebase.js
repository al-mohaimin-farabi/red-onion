import firebase from 'firebase/compat';

const firebaseConfig = {
    apiKey: "AIzaSyCWNYnseB7w70MEWdP3Nn9_JpYrXC4o-qY",
    authDomain: "practice-e9b94.firebaseapp.com",
    projectId: "practice-e9b94",
    storageBucket: "practice-e9b94.appspot.com",
    messagingSenderId: "1085321326169",
    appId: "1:1085321326169:web:625081f8501353740b4b48"
};

const initializeFirebase = () => {
    firebase.initializeApp(firebaseConfig);
}

export default initializeFirebase;