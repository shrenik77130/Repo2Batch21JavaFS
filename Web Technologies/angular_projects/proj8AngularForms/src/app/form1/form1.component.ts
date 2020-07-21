import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  public locations:any[] = [
    {pincode:416416,city:'Sangli'},
    {pincode:412003,city:'Pune'},
    {pincode:439241,city:'Kolhapur'},
    {pincode:388412,city:'Mumbai'},
    {pincode:414433,city:'Delhi'},
  ]

  public formSuccess:boolean = false;
  public formDanger:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  saveRecord(userdata):void{
    var jsonData = JSON.stringify(userdata.value);
    console.log("Form Submitted Successfully. Record = " + jsonData);

   var cnt = 0;
   for(var key of Object.keys(userdata.value))
   {
      if(userdata.value[key]!="")
        cnt++;
   }

   if(cnt==6)
      {
        this.formSuccess = true;
        this.formDanger = false;
      }
      else
      {
        this.formDanger = true;
        this.formSuccess = false;
      }

    
  }

}
