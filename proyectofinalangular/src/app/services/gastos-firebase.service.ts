import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from '@angular/fire/firestore';
import { Gasto } from '../Modelos/gasto';

@Injectable({
  providedIn: 'root',
})
export class GastosFirebaseService {
  constructor(private firestore: Firestore) {}

  get_gastos() {
    const docRef = collection(this.firestore, 'gastosFireBase');
    return collectionData(docRef, { idField: 'id' });
  }

  add_gasto(gasto: Gasto) {
    const recetaRef = collection(this.firestore, 'gastosFireBase');
    return addDoc(recetaRef, gasto);
  }

  get_gasto(id_gasto: string) {
    const docRef = doc(this.firestore, 'gastosFireBase', id_gasto);
    return getDoc(docRef);
  }

  editGasto(gasto: Gasto) {
    const recetaRef = doc(this.firestore, `gastosFireBase/${gasto.id}`);
    return setDoc(recetaRef, { ...gasto });
  }

  delete_gasto(gasto: Gasto) {
    const recetaRef = doc(this.firestore, `gastosFireBase/${gasto.id}`);
    return deleteDoc(recetaRef);
  }
}
