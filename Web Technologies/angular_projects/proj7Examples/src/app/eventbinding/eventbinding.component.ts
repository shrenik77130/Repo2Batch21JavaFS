import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  buttonClick(){
    console.log("Button Click Successfull");
  }

  clickMe(event)
  {
    console.log(event);
    console.log("You Clicked Button " + event.target.value);
  }

}
