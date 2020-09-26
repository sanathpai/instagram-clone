import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBNjdhuQ_ku9hv320o3uM2kP3Oe9-5Tmlg",
    authDomain: "instagram-clone-react-3376d.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-3376d.firebaseio.com",
    projectId: "instagram-clone-react-3376d",
    storageBucket: "instagram-clone-react-3376d.appspot.com",
    messagingSenderId: "189311386008",
    appId: "1:189311386008:web:cb577476710ca98eed2bed",
    measurementId: "G-Y4H5KY27RH"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage }


// export default firebaseConfig;