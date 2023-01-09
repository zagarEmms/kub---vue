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
    console.log(localStorage.getItem('token'))
}

function updateVote (figureId) {    
    const token = localStorage.getItem('token')    
    update(ref(db, 'Users/' + token), {
        vote: figureId
    });
}

function sumVote (figureId) {
    var voteFeature = '';
    if (figureId == 1) {
        voteFeature = 'color'
    } else if (figureId == 2) {
        voteFeature = 'shape'
    } else if (figureId == 3) {
        voteFeature = 'features'
    }

    var currentVotes = getVotes(voteFeature);
    if (currentVotes == undefined) {
        currentVotes = 0
    }
    //console.log(currentVotes);
    var updatedVotes = currentVotes + 1;
    //console.log(updatedVotes);

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

function getVotes (voteFeature) {
    var currentVotes;
    const votesCountRef = ref(db, 'Votes/' + voteFeature);
    onValue(votesCountRef, (snapshot) => {
        currentVotes = snapshot.val();
    });
    console.log(currentVotes);
    
    return currentVotes
}

export { addUser, updateVote, sumVote };

createApp(App).use(router).mount('#app')
