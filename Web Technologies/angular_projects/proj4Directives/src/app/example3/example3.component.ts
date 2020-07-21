import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.css']
})
export class  Example3Component implements OnInit {
  public cities:string[] = ['California','London','Chennai','Bangalore'];

  //task
  public course:any[] = [
    {'coursename':'Android','duration':'3 Month'},
    {'coursename':'Flutter','duration':'2 Month'},
    {'coursename':'AWS','duration':'4 Month'},
    {'coursename':'Spring Boot','duration':'5 Month'},
    {'coursename':'Angular','duration':'2 Month'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
