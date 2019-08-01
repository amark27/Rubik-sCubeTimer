import * as firebase from 'firebase';
import 'firebase/firestore';

var db; 

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

export default class Firebase {
    constructor(){
        var app = firebase.initializeApp(firebaseConfig);
        db = firebase.firestore(app);
    }

    addIP = (ip) => {
        db.collection('users').get().then(response => {
            let foundIP = false;
            response.docs.forEach(doc => {
                if (doc.data().IP === ip)
                    foundIP = true;
            })
            if (!foundIP)
                this.registerUserIP(ip);
        });
    }

    registerUserIP = (ip) => {
        db.collection('users').add({IP: ip}).then();
    }

    getTimes = (ip, setTimes) => {
        db.doc(`times/${ip}`).get().then(response => {
            console.log(response);
            if (response._document === null)
                setTimes([]);
            else{
                console.log(response.data()[1])
                setTimes([parseFloat(response.data()[1])]);
            }
        });
    }
}