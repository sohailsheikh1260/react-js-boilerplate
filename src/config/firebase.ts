/* eslint-disable import/no-extraneous-dependencies */
import { initializeApp } from "firebase/app";
import {
  getMessaging,
  getToken,
  isSupported,
  onMessage,
} from "firebase/messaging";

export const REPLACE_WITH_YOUR_VAPID_KEY =
  "BBcGuB6mzudOBovv4PIF96nCbouJanhAlMV-cPqkFV_utI0IXc6DjcThbG_0ZGpMCic4bjMVRFGXyDDfWlI9BS8";
export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBH47SYYHRZCW5-zNSq6vqkDIc96uuSP50",
  authDomain: "ecall-crm.firebaseapp.com",
  projectId: "ecall-crm",
  storageBucket: "ecall-crm.appspot.com",
  messagingSenderId: "930742013278",
  appId: "1:930742013278:web:86cf70fda4b7aad06913cf",
  measurementId: "G-2X3XJ957VL",
};
const firebaseCon = initializeApp(FIREBASE_CONFIG);

export const requestForToken = async () => {
  const isSupport = await isSupported();
  if (isSupport) {
    const messaging = getMessaging(firebaseCon);

    return getToken(messaging, { vapidKey: REPLACE_WITH_YOUR_VAPID_KEY })
      .then((currentToken) => {
        if (currentToken) {
          // Perform any other neccessary action with the token
        } else {
          // Show permission request UI
          console.error(
            "No registration token available. Request permission to generate one.",
          );
        }
      })
      .catch((err) => {
        console.error("An error occurred while retrieving token. ", err);
      });
  }
  return null;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

export const getPreviousRemainder = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 2000);
  });
};
