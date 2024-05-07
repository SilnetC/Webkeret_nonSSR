import { Injectable } from '@angular/core';

import { Parts } from '../models/Parts';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartsService {

  collectionName = 'Parts';

  constructor(private afs: AngularFirestore) { }

  setPartsData(partsData: Parts) {
    const id = this.afs.createId();
    return this.afs.collection<Parts>(this.collectionName).doc(id).set(partsData);
  }

  getAllParts(): Observable<Parts[]> {
    return this.afs.collection<Parts>(this.collectionName, ref => ref).snapshotChanges()
      .pipe(map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Parts;
        const id = a.payload.doc.id;
        return { id, ...data };
      })));
  }
}
