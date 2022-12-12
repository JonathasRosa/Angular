import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public emitEvent = new EventEmitter();
  
  public list: Array<string> = [
    "X-Bacon",
    "X-Calabreza",
    "X-Frango",
    "X-Tudo"
  ]
  constructor(private http: HttpClient) { }

  private url: string = "http://localhost:3000/Sandwihes" //list-food

  /*
  public foodList() {
    return this.list;
  }
  */

  public foodList() {
    return this.http.get(`${this.url}list-food`);
  }
  
  public foodListAdd(value: string) {
    this.foodListAlert(value);
    return this.list.push(value);
  }

  public foodListAlert(value: string) {
    return this.emitEvent.emit(value);
  }
}
