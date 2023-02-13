import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDucwH2vJPMAH5G23x8-o_cfN2YJn0qagw",
  authDomain: "bicycle-3484a.firebaseapp.com",
  databaseURL: "https://bicycle-3484a-default-rtdb.firebaseio.com",
  projectId: "bicycle-3484a",
  storageBucket: "bicycle-3484a.appspot.com",
  messagingSenderId: "104436188395",
  appId: "1:104436188395:web:dbf1851d1f1c7d74dc6aae",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
