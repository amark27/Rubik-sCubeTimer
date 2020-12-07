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

    getData = (ip, setTimes, setScrambles, setDates) => {
        db.doc(`times/${ip}`).get().then(response => {
            if (response._document == null || response.data()["times"] == null) {
                setTimes([]);
                setScrambles([]);
                setDates([]);
            } else {
                setTimes(response.data()["times"]);
                setScrambles(response.data()["scrambles"]);
                setDates(response.data()["dates"]);
            }
        });
    }

    storeData = (ip, times, scrambles, dates) => {
        let d = {times, scrambles, dates};
        db.doc(`times/${ip}`).set(d).then();
    }
}