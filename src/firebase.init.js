// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgljck-GQDXEr7rearsejjwxumuX6N0Qs",
    authDomain: "dragon-news-e9f02.firebaseapp.com",
    projectId: "dragon-news-e9f02",
    storageBucket: "dragon-news-e9f02.firebasestorage.app",
    messagingSenderId: "376220314085",
    appId: "1:376220314085:web:f5d75f81d9aafc56ece70c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
// export const auth = getAuth(app);

export default app;