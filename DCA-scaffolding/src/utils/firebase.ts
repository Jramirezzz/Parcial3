import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig"
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export async function getinfo (db:any) {
    const Recetas = collection(db, 'recetas');
    const recetasSnapshot = await getDocs(Recetas);
    const RecetasList = recetasSnapshot.docs.map(doc => doc.data());
    return RecetasList;
  }

  