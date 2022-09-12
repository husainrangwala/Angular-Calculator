import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toshow = '0'
  currentvalue = ''
  writetoinput(value: string){
    if(this.currentvalue == '0'){
        this.currentvalue = '';
    }
    this.currentvalue += value;
    this.toshow = this.currentvalue;
  }

  equals(){
    this.toshow = eval(this.currentvalue);
    this.currentvalue = this.toshow;
  }

  clear(){
    this.currentvalue = '';
    this.toshow = '0';
  }

  back(){
    this.currentvalue = this.currentvalue.slice(0,-1);    
    if(this.currentvalue == ''){
        this.currentvalue = '0';
    }
    this.toshow = this.currentvalue;
  }

  calcvalue(solve : any){
    if(solve[0] === '0'){
        solve = solve.slice(1,);
    }
    this.toshow = eval(solve);
  }

}
