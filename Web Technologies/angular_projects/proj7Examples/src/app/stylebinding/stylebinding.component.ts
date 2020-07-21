import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {

  public isImportant:boolean=false;
  public statusColor = 'red';
  public moreStyles = {
    color:'white',
    backgroundColor:'darkblue',
    padding:'5px',
    marginLeft:'100px'    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
