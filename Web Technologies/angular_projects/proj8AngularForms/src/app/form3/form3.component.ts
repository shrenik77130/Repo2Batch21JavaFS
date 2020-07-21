import { Component, OnInit } from '@angular/core';
import { Product } from './../common/product';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {

  public prodObject:Product = new Product();
  
  constructor() { }

  ngOnInit(): void {
  }

}
