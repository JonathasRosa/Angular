import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
/* 
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit
*/

@Component({
  selector: 'app-root',
  template: `
  <app-title *ngIf="destruir"></app-title><br>
  <button (click)="destruirComponent()">Destruir componente</button>
  {{valor}}
  <button (click)="adicionar()">Adicionar</button>
  <router-outlet></router-outlet>`
})
export class AppComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  
  public destruir:boolean = true;

  public valor: number = 1;
  
  constructor() { }

  public adicionar(): number {
    return this.valor += 1;
  }

  ngOnInit(): void { }

  public destruirComponent() {
    this.destruir = false;
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit");
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
  }
 
} 

