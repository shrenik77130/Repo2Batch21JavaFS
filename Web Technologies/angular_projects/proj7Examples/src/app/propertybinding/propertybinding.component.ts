import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {

  customid="txtName";
  isDisabled=false;

  resultPass = "text-success";
  resultFail = "text-danger";
  isError = false;

  myfavclasses = {
    'text-primary':true,
    'm-3':true,
    'p-2':true,
    'border':true,
    'border-warning':true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
