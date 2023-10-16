import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }

  addChat(message: string): Observable<any> {
    return this.http.post('http://localhost:3000/chat', { message });
  }

  getChats(): Observable<any> {
    return this.http.get('http://localhost:3000/chat');
  }
}
