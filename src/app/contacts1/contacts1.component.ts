import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts1',
  templateUrl: './contacts1.component.html',
  styleUrls: ['./contacts1.component.css']
})
export class Contacts1Component  {

  	
 	title:string = "Hello, World!";

 	names:Array<string> = ['John', 'Doe', 'Michael'];

 	isVisible:boolean = false;

 	link:string = "https://www.google.com";

 	user:Object = {
 		firstName: 'Maria',
 		lastName: 'Francia',
 		email: 'mf@live.com'
 	}
  
 

}
