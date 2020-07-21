import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';

import {HttpService} from './http.service'
import {HttpClientModule} from '@angular/common/http';
import { BurgerComponent } from './burger/burger.component';
import { PizzaMenuComponent } from './pizza-menu/pizza-menu.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { LastComponent } from './last/last.component'
@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    BurgerComponent,
    PizzaMenuComponent,
    BurgerMenuComponent,
    LastComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
