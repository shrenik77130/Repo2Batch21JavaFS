import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example4',
  templateUrl: './example4.component.html',
  styleUrls: ['./example4.component.css']
})
export class Example4Component implements OnInit {
  public records:any[] = [
    {'empcode':'e001','empname':'rahul','items_sold':14,'insentive':4,'commision':1.5,'amount':8000},
    {'empcode':'e001','empname':'Nitn','items_sold':54,'insentive':2,'commision':1.5,'amount':1400},
    {'empcode':'e001','empname':'Tushar','items_sold':32,'insentive':4,'commision':1.5,'amount':1300},
    {'empcode':'e001','empname':'Vishal','items_sold':42,'insentive':1,'commision':1.5,'amount':1100},
    {'empcode':'e001','empname':'Omkar','items_sold':13,'insentive':5,'commision':1.5,'amount':8000}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
