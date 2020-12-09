import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyAbm4PCI1u3eYsGUICNdWRfqldQQIDLdyo",
    authDomain: "apex-firegramx.firebaseapp.com",
    databaseURL: "https://apex-firegramx.firebaseio.com",
    projectId: "apex-firegramx",
    storageBucket: "apex-firegramx.appspot.com",
    messagingSenderId: "523447194778",
    appId: "1:523447194778:web:e13e6dddc51069cb8abb23"
};

const fire = firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;


export { projectStorage, projectFirestore, timestamp };
export default fire;