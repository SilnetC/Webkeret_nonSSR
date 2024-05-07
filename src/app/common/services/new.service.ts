import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { newGPU } from '../../common/models/newGPU';

@Injectable({
  providedIn: 'root'
})
export class NewService {
  collectionName = 'newgpu';

  constructor(private afs: AngularFirestore) { }

  create(new_gpu: newGPU) {
    new_gpu.id = this.afs.createId();
    return this.afs.collection<newGPU>(this.collectionName).doc(new_gpu.id).set(new_gpu);
  }

  getAllNewComponent() {
    return this.afs.collection<newGPU>(this.collectionName).valueChanges();
  }
  
}
