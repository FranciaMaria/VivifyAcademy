import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts1',
  templateUrl: './contacts1.component.html',
  styleUrls: ['./contacts1.component.css']
})
export class Contacts1Component  {

  	
 	title = "Hello, World!";

 	names:Array<string> = ['John', 'Doe', 'Michael'];

 	isVisible:boolean = true;
  
 

}
