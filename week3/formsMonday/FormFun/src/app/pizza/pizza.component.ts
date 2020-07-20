import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  @Input()pizza
  constructor() { }

  ngOnInit() {
  
  }

  tantrum(){
    this.pizza.toppings ='Cheese'
    this.pizza.name='asdfaswerwerasdf'
  }
}
