import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
      apiKey: "AIzaSyBVx9oGHBj8xTY7YdGMDE6s-yFbQG-ibBM",
      authDomain: "my-portfolio-a5cbf.firebaseapp.com",
      projectId: "my-portfolio-a5cbf",
      storageBucket: "my-portfolio-a5cbf.appspot.com",
      messagingSenderId: "278186009277",
      appId: "1:278186009277:web:9700225d4cfc231588cdd4"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;