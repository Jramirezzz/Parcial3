import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig"
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";




const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);


import { collection, addDoc } from "firebase/firestore";

// const AddInfo: any () => {
//     try {
//          await addDoc(collection(db, "users"), {
//           first: "Ada",
//           last: "Lovelace",
//           born: 1815
//         });
//       } catch (e) {
//         console.error("Error adding document: ", e);
//       }
      
// }

