import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCnS38YzWWS0kVNGNm2X-2gBUhbRnpHLYQ",
  authDomain: "trackbook-ffdf4.firebaseapp.com",
  projectId: "trackbook-ffdf4",
  storageBucket: "trackbook-ffdf4.appspot.com",
  messagingSenderId: "107111408492",
  appId: "1:107111408492:web:4962f80214cdf53f6b4949"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// export default app

export const messaging = getMessaging(app)