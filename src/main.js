import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set, child, update, onValue } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCinRPUUavBGiLyObv3JT1PO26ltUO29X8",
    authDomain: "kubdatabase.firebaseapp.com",
    databaseURL: "https://kubdatabase-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "kubdatabase",
    storageBucket: "kubdatabase.appspot.com",
    messagingSenderId: "510726641146",
    appId: "1:510726641146:web:20ef1c2a8342c03fadc043"
};

//init firebase app
const app = initializeApp(firebaseConfig);

//init firebase database
const db = getDatabase(app);


function addUser(userLogin) {
    const usersListRef = ref(db, 'Users');
    const newUserRef = push(usersListRef, 'Users/');
    set(newUserRef, {
        email: userLogin.email,
    });

    localStorage.setItem('token', newUserRef.key)
    //console.log(localStorage.getItem('token'))
}

function updateVote (figureId) {    
    const token = localStorage.getItem('token')    
    update(ref(db, 'Users/' + token), {
        vote: figureId
    });

    sumVote(figureId);

}

function sumVote (figureId, votes) {
    let voteFeature = '';
    if (figureId == 1) {
        voteFeature = 'color'
    } else if (figureId == 2) {
        voteFeature = 'shape'
    } else if (figureId == 3) {
        voteFeature = 'features'
    }

    votes = getVotes(voteFeature)

    //console.log("ON UPDATE " + votes);
    
    let updatedVotes = votes + 1;

    switch (figureId) {
        case 1:
            update(ref(db, 'Votes/'), {
                color: updatedVotes
            });
        break;
            
        case 2:
            update(ref(db, 'Votes/'), {
                shape: updatedVotes
            });
        break;

        case 3:
            update(ref(db, 'Votes/'), {
                features: updatedVotes
            });
        break;
    }
} 

function getAllVotes() {
    var votesRef = ref(db, 'Votes/');
    let votes = [];
    onValue(votesRef, (snapshot) => {
        votes = snapshot.val();
    });
    //console.log(votes)
    return votes;
}

function getVotes (voteFeature) {
    var currentVote;
    const votesCountRef = ref(db, 'Votes/' + voteFeature);
    onValue(votesCountRef, (snapshot) => {
        currentVote = snapshot.val();
        //console.log("GETTING:" + currentVote);
    }); 
    
    return currentVote;           
     
}

function updateImgVote() {
    let votes = []

    let colorCountRef = ref(db, 'Votes/color');
    onValue(colorCountRef, (snapshot) => {
        votes[0] = snapshot.val();
    });

    let shapeCountRef = ref(db, 'Votes/shape');
    onValue(shapeCountRef, (snapshot) => {
        votes[1] = snapshot.val();
    });

    let featuresCountRef = ref(db, 'Votes/features');
    onValue(featuresCountRef, (snapshot) => {
        votes[2] = snapshot.val();
    });

    return votes

}

export { addUser, updateVote, sumVote, updateImgVote, getAllVotes };

createApp(App).use(router).mount('#app')
