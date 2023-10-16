// import { Injectable } from '@angular/core';
// import { openDB } from 'idb';

// @Injectable({
//   providedIn: 'root'
// })
// export class IndexedDbService {
//   private db: any;

//   constructor() {
//     this.connectToDb();
//   }

//   async connectToDb() {
//     this.db = await openDB('chatDB', 1, {
//       upgrade(db) {
//         db.createObjectStore('chats', { keyPath: 'id' });
//       },
//     });
//   }

//   addChat(message: string) {
//     return this.db.put('chats', { id: Date.now(), message });
//   }

//   getChats() {
//     return this.db.getAll('chats');
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndexedDbService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  addChat(chat :any) {
    const obj = {
      message: chat
    };
    return this.http.post(`${this.uri}/chats`, obj);
  }

  getChats() {
    return this
           .http
           .get(`${this.uri}/chats`);
  }
}
