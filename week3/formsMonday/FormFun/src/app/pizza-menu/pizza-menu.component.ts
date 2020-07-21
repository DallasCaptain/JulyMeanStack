import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-pizza-menu',
  templateUrl: './pizza-menu.component.html',
  styleUrls: ['./pizza-menu.component.scss']
})
export class PizzaMenuComponent implements OnInit {

  title = 'FormFun';
  newPizza: {name:String,toppings:Array<string>,price:number,check:boolean}
  tempToppings =""
  firstPizza:{name:String,toppings:Array<string>,price:number,check:boolean}
  pizzaList:Array<{name:String,toppings:Array<string>,price:number,check:boolean}>
  
  constructor(private _http: HttpService){}

  ngOnInit(){
    console.log('init started pizzasMenu')
    this.newPizza = {
      name:"",
      toppings:[],
      price: 0.0,
      check:true}
    this.getPizzasFromService()
      
  }

  getPizzasFromService(){
    this._http.getPizzas().subscribe(pizzas =>{
      //@ts-ignore
      this.pizzaList = pizzas;
      console.log('we got pizzas', pizzas)
    })
  }

  submitPizza(){
    this.newPizza.toppings = this.tempToppings.split(',')
    console.log('newpizza is:', this.newPizza)
    this._http.createPizza(this.newPizza).subscribe(newpizza =>{
      console.log('success')
      this.getPizzasFromService()
    })
  }

}
