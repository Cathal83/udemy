import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  showButton=true;
  clickNumber =[];
  showSecret=false;
 

  constructor() { }

  ngOnInit() {
  }

  onShowButton(){
    this.showButton = !this.showButton;
    this.clickNumber.push(new Date());
    // this.clickNumber.push(this.clickNumber.length+1);
    console.log(this.clickNumber);
  }
}
