// import { Component, OnInit } from '@angular/core';
// import { IndexedDbService } from '../indexed-db.service';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-chat',
//   templateUrl: './chat.component.html',
//   styleUrls: ['./chat.component.css']
// })
// export class ChatComponent implements OnInit {
//   chats: any[] = [];
//   message: string;

//   constructor(private indexedDbService: IndexedDbService) { }

//   ngOnInit(): void {
//    
//   }

//   addChat(): void {
//     this.indexedDbService.addChat(this.message).then(() => {
//       this.message = '';
//     });
//   }
  
  
//   getChats(): void {
//     this.indexedDbService.getChats().then((chats: any[]) => {
//       this.chats = chats.slice(-5);
//     });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { IndexedDbService } from '../indexed-db.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  chats: any[] = [];
  message: string;

  constructor(private indexedDbService: IndexedDbService) { }

  ngOnInit(): void {
    this.getChats();
  }

  addChat(): void {
    this.indexedDbService.addChat(this.message).subscribe(() => {
      this.message = '';
      this.getChats();
    });
  }

  getChats(): void {
    this.indexedDbService.getChats().subscribe((chats: any) => {
      this.chats = chats.slice(-5);
    });
  }
}


