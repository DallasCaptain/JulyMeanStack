import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  constructor(private _http: HttpClient) { }
  
  //PIZZAS API
  getPizzas(){
    return this._http.get('/api/pizzas')
  }
  
  createPizza(newpizza) {
    return this._http.post('/api/pizzas',newpizza)
  }
  //BURGERS API
  getburgers() {
    return this._http.get('/api/burgers')
  }
  createburger(newburger) {
    return this._http.post('/api/burgers',newburger)
  }
}
