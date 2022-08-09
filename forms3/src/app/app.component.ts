import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
// import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms3';

  // статическая форма
  // submitForm(form: NgForm){
  //   console.log(form.value.name)
  //   form.reset()
  // }

  //реактивная форма
  myForm: FormGroup = new FormGroup({
    name: new FormControl('Max'),
    age: new FormControl('',[Validators.required, Validators.pattern(/^[0-9]+$/)]),
    profession: new FormControl('')
  });


  //Альтернативный подход с помощью шаблона FormBuilder
  // myForm!: FormGroup;
  // constructor(private FormBuilder: FormBuilder) {
  //   this.myForm = this.FormBuilder.group({
  //     name: [''],
  //     age: [''],
  //     profession: ['']
  //   })
  // }

  submitFrom(f: NgForm){
    console.log(f.status)
    console.log(f.value)
  }
}
