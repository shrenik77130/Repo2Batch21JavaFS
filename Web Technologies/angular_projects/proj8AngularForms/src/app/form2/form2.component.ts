import { Component, OnInit } from '@angular/core';
import { User } from './../common/user';
import { DummyDatabase } from './../common/dummy-database';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  
  public locations:any[] = [
    {pincode:416416,city:'Sangli'},
    {pincode:412003,city:'Pune'},
    {pincode:439241,city:'Kolhapur'},
    {pincode:388412,city:'Mumbai'},
    {pincode:414433,city:'Delhi'},
  ]

  public isSuccess:boolean = false;
  public isFailed:boolean = false;
  public cnt=1;

  constructor() { }

  ngOnInit(): void {
  }


  saveUserRecord(formdata)
  {
    console.log(JSON.stringify(formdata));

    let user:User = new User(
      this.cnt,
      formdata['txtUsername'],
      formdata['txtEmailId'],
      formdata['gender'],
      formdata['dropdownLocation'],
      formdata['txtPassword'],
    );

    DummyDatabase.createAccount(user);

    
  }

  readTable(){
    return DummyDatabase.usertable;
  }

}
