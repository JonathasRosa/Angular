import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-data-binding></app-data-binding>
  <!--Diretivas de atributo-->
  <app-diretivas></app-diretivas>
  <!--Diretivas Estruturais
  <app-diretivas-atributos>
    <h1>Aulas Diretivas Atributo</h1>
    <h3>Final da aula</h3>
  </app-diretivas-atributos>
  <router-outlet></router-outlet> -->`
})
export class AppComponent implements OnInit {
    
  constructor() { }

  ngOnInit(): void { }

} 