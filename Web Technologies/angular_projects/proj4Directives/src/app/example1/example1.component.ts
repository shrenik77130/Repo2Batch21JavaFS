import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css']
})
export class Example1Component implements OnInit {

  public result:boolean = false;
  weekdays:string[] = ["sun","mon","tue","wedn","thur","fri","sat"];
  favday:string = "mon";
  public status : boolean = true;
  public isUserLoggedIn: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  changeResult():void{
    if(this.result==true)
      this.result = false;
    else
      this.result = true;    
  }

  checkLogin(username:string, password:string):void{
    console.log("Username = " + username + "\t Password = " + password);
  }
}
