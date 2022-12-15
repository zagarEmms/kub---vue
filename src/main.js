import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, set } from 'firebase/database';

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


function addUser (userLogin) {
    const usersListRef = ref(db, 'Users');
    const newUserRef = push(usersListRef);
    set(newUserRef, {
        email: userLogin.email
    }); 
}

export { addUser };

createApp(App).use(router).mount('#app')
