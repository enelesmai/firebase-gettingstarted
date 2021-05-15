importScripts('https://www.gstatic.com/firebasejs/8.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.5.0/firebase-messaging.js');
// Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyC9N1hqiadyWqQixjDxaRlNm6MCqIwJk10",
      authDomain: "fcm-requests.firebaseapp.com",
      projectId: "fcm-requests",
      storageBucket: "fcm-requests.appspot.com",
      messagingSenderId: "596962433726",
      appId: "1:596962433726:web:e4169700d54c6caced5cef",
      measurementId: "G-D3Z4HLYKF9"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload){
  const title = "Hello World";
  const options = {
    body: payload.data.status
  };
  return self.registration.showNotification(title, options)
});