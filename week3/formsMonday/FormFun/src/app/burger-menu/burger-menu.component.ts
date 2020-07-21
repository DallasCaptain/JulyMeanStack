import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-burger-menu',
  templateUrl: './burger-menu.component.html',
  styleUrls: ['./burger-menu.component.scss']
})
export class BurgerMenuComponent implements OnInit {

  newburger: {name:String,toppings:Array<string>,price:number,check:boolean}
  tempToppings =""
  burgerList:Array<{name:String,toppings:Array<string>,price:number,check:boolean}>
  
  constructor(private _http: HttpService){}

  ngOnInit(){
    console.log('init started burgersMenu')
    this.newburger = {
      name:"",
      toppings:[],
      price: 0.0,
      check:true}
    this.getBurgersFromService()
      
  }

  getBurgersFromService(){
    this._http.getburgers().subscribe(burgers =>{
        //@ts-ignore
        this.burgerList = burgers;
        console.log('we got burgers', burgers)
      })
  }

  submitBurger(){
    this.newburger.toppings = this.tempToppings.split(',')
    console.log('newburger is:', this.newburger)
    this._http.createburger(this.newburger).subscribe(newburger =>{
      console.log('success')
      this.getBurgersFromService()
    })
  }

}
