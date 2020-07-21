import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  
  public txt:string = "TalentBerg";

  public prodrec = {
    'prodcode':'P00242',
    'prodname':'Antivirous',
    'price':800,
    'barcode':88327819384
  }

  public x:number = 972.8383;
  public pert:number = 0.78;

  public amount:number = 800;

  
  constructor() { }

  ngOnInit(): void {
  }

}
