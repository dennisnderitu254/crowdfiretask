const firebaseConfig = {
  apiKey: "AIzaSyDePMnYUFbnzmFoS0D9DOoHsS02T19NRKk",
  authDomain: "cloudfirestoretask.firebaseapp.com",
  databaseURL: "https://cloudfirestoretask.firebaseio.com",
  projectId: "cloudfirestoretask",
  storageBucket: "cloudfirestoretask.appspot.com",
  messagingSenderId: "232888158422",
  appId: "1:232888158422:web:ff2f975598c348a7e3a177",
  measurementId: "G-2H49F8CW61"
};

  const db = firebase.firestore();


  // enable offline persistence
db.enablePersistence().catch(err => {
    if (err.code == "failed-precondition") {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code == "unimplemented") {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  });

  

  