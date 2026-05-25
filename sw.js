importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyApR3SJoY2lta7ijTS1rcx_g2NrJrv3KTU",
  authDomain: "pa-df-star.firebaseapp.com",
  projectId: "pa-df-star",
  storageBucket: "pa-df-star.firebasestorage.app",
  messagingSenderId: "79784726023",
  appId: "1:79784726023:web:3d4b8b768b923ad22424a2"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "🚨 Gargalo Crítico — PA DF Star";
  const body = payload.notification?.body || "Um gargalo crítico foi registrado";
  self.registration.showNotification(title, {
    body,
    icon: "/pa-dfstar/logo.png",
    badge: "/pa-dfstar/logo.png",
    tag: "critico",
    renotify: true,
    vibrate: [300, 100, 300],
  });
});
