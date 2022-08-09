import { Component } from '@angular/core';

export interface Card {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  toggle = true
  cards: Card[] = [
    {title: 'cards 1', text: 'This is cards number 1'},
    {title: 'cards 2', text: 'This is cards number 2'},
    {title: 'last cards', text: 'This is cards number 3'},
  ]
  toggleCards(){
    this.toggle = !this.toggle
  }
}
