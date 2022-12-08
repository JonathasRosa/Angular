import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  public list: Array<string> = [
    "X-Bacon",
    "X-Calabreza",
    "X-Frango",
    "X-Tudo"
  ]
  constructor() { }

  public foodList() {
    return this.list;
  }
  
  public foodListAdd(value: string) {
    return this.list.push(value)
  }
}
