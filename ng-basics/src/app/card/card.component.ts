import {Component, Input, OnInit} from "@angular/core";
import {Card} from "../app.component";


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  // interpolation: ['{{', '}}']
})
export class CardComponent implements OnInit{

  @Input() cards: Card = { title:'', text: ''};

  title: string = 'My card Title'
  text = 'My simple text'
  cardDate: Date = new Date()
  textColor: string = ''
  ngOnInit() {
  }

  changeTitle(){
    this.cards.title = 'Title has been change!'
  }


  inputHandler(value: any){
    // const value = event.target.value
    this.title = value
  }
}
