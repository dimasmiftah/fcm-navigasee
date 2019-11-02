importScripts('https://www.gstatic.com/firebasejs/7.2.3/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.2.3/firebase-messaging.js')

var firebaseConfig = {
  apiKey: "AIzaSyDSFQa_j7icwm8XUITwCQUWjTPVRF5ffR0",
  authDomain: "navigasee-toyota.firebaseapp.com",
  databaseURL: "https://navigasee-toyota.firebaseio.com",
  projectId: "navigasee-toyota",
  storageBucket: "navigasee-toyota.appspot.com",
  messagingSenderId: "128687501384",
  appId: "1:128687501384:web:e54177a5e9e079e5d3287d"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging()

// messaging.setBackgroundMessageHandler(function (payload) {
//   const audio = new Audio('car-alarm.mp3');
//   audio.play();
  // const title = 'Hello World'
  // const option = {
  //   body: payload.data.status
  // }
  // return self.registration.showNotification(title,option)
  
// })