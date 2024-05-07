import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Config } from '../../common/models/Configurations';

@Injectable({
  providedIn: 'root'
})
export class ConfigsService {

  collectionName = 'Configurations';

  constructor(private afs: AngularFirestore) { }

  create(config: Config) {
    config.id = this.afs.createId();
    return this.afs.collection<Config>(this.collectionName).doc(config.id).set(config);
  }

  getAllConfig() {
    return this.afs.collection<Config>(this.collectionName).valueChanges();
  }

  getConfigsByCpuBrand(cpuBrand: string) {
    return this.afs.collection<Config>(this.collectionName, ref => ref.where('cpu_brand', '==', cpuBrand)).valueChanges();
  }
  
  getConfigById(configId: string) {
    return this.afs.collection<Config>(this.collectionName).doc(configId).valueChanges();
  }

  update(config: Config) {
    return this.afs.collection<Config>(this.collectionName).doc(config.id).set(config);
  }

  delete(configID: string) {
    return this.afs.collection<Config>(this.collectionName).doc(configID).delete();
  }
}
