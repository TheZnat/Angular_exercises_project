import {Component, OnInit} from '@angular/core';
import {FormControl, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'form1';
  nameControl: FormControl;

  ngOnInit() {
    this.nameControl = new FormControl('Max',[Validators.required, Validators.minLength(5)])
    this.nameControl.valueChanges.subscribe((value => {console.log(value)}))
    this.nameControl.statusChanges.subscribe((status => {console.log(status)}))
  }
}

function myValidator(formControl: FormControl){
  if(formControl.value.length > 3) {
    return {myValidator: {message: 'Sould be something'}};
  }
  return null;
}
