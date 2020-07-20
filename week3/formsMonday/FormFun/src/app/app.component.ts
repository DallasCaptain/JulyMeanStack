import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FormFun';
  newPizza: {name:String,toppings:Array<string>,price:number,check:boolean}
  tempToppings =""
  firstPizza:{name:String,toppings:Array<string>,price:number,check:boolean}
  pizzaList:Array<{name:String,toppings:Array<string>,price:number,check:boolean}>
  constructor(){}

  ngOnInit(){
    this.newPizza = {
      name:"",
      toppings:[],
      price: 0.0,
      check:true}

      this.pizzaList =[{
        name:"first",
        toppings:[],
        price: 0.0,
        check:true},{
          name:"second",
          toppings:[],
          price: 0.0,
          check:true},{
            name:"third",
            toppings:[],
            price: 0.0,
            check:true}]
  }

  submitPizza(){
    this.newPizza.toppings = this.tempToppings.split(',')
    console.log('newpizza is:', this.newPizza)
  }
}
