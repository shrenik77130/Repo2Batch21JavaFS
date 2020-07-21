import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intepollation',
  templateUrl: './intepollation.component.html',
  styleUrls: ['./intepollation.component.css']
})
export class IntepollationComponent implements OnInit {

  username:string = "Shrenik";
  hostaddress:string = window.location.href;

  constructor() { }

  ngOnInit(): void {
  }

}
