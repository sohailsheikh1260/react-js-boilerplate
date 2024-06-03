// Scripts for firebase and firebase messaging
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js",
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js",
);

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyBH47SYYHRZCW5-zNSq6vqkDIc96uuSP50",
  authDomain: "ecall-crm.firebaseapp.com",
  projectId: "ecall-crm",
  storageBucket: "ecall-crm.appspot.com",
  messagingSenderId: "930742013278",
  appId: "1:930742013278:web:86cf70fda4b7aad06913cf",
  measurementId: "G-2X3XJ957VL",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
