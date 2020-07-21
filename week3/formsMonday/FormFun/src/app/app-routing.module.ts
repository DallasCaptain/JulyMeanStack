import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaMenuComponent } from './pizza-menu/pizza-menu.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { LastComponent } from './last/last.component';


const routes: Routes = [
  //pizzaroute
  { path: 'pizza', component: PizzaMenuComponent},
  //burgerroute
  { path: 'burger', component: BurgerMenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
