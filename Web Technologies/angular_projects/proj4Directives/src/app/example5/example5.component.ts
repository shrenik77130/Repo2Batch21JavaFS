import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example5',
  templateUrl: './example5.component.html',
  styleUrls: ['./example5.component.css']
})
export class Example5Component implements OnInit {

  //Show Authers in Drop Down Menus
  public authers:string[] = ['All','Raymond E. Feist','Susan Cooper','Terry Brooks','Isaac Asimov','Candace Bushnell','Jerry Spinelli','Cassandra Clare',
  'Kate Morton','Frederick Forsyth','Tamora Pierce',];

  public filter:string="All";

  //Show Book Records in Table
  public bookrecords:any[] = [
  { isbn :12,bookname:'Krondor: The Betrayal',auther:'Raymond E. Feist',year:1993},
  { isbn :13,bookname:'The Dark Is Rising',auther:'Susan Cooper',year:1998},
  { isbn :41,bookname:'The Black Unicorn ',auther:'Terry Brooks',year:1973},
  { isbn :41,bookname:'I, Robot',auther:'Isaac Asimov',year:1987},
  { isbn :51,bookname:'Four Blondes',auther:'Candace Bushnell',year:1950},
  { isbn :53,bookname:'Love, Stargirl',auther:'Jerry Spinelli',year:2000},
  { isbn :65,bookname:'The Tenth Circle',auther:'Candace Bushnell',year:2007},
  { isbn :56,bookname:'Vanishing Acts',auther:'Candace Bushnell',year:2006},
  { isbn :57,bookname:'Aztec',auther:'Terry Brooks',year:2005},
  { isbn :87,bookname:'Marlfox',auther:'Candace Bushnell',year:1980},
  { isbn :86,bookname:'Lady Midnight',auther:'Cassandra Clare',year:1998},
  { isbn :64,bookname:'The Secret Keeper',auther:'Kate Morton',year:2016},
  { isbn :36,bookname:'The Afghan',auther:'Frederick Forsyth',year:2012},
  { isbn :35,bookname:'A Touch of Dead',auther:'Terry Brooks',year:2006},
  { isbn :66,bookname:'Daja Book',auther:'Tamora Pierce',year:2009},
  { isbn :53,bookname:'Steve Jobs',auther:'Candace Bushnell',year:1998},
  { isbn :34,bookname:'Cold Fire',auther:'Terry Brooks',year:2011},
  { isbn :13,bookname:'Thanks for the Memories',auther:'Susan Cooper',year:2002}

  ];

  constructor() { }

  ngOnInit(): void {
  }

  autherClick(event):void{
    this.filter=event.target.value;
    console.log("Auther is " + event.target.value);
  }
}
