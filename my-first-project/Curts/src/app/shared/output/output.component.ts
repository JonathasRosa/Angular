import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter();
  public list: Array<{ nome: string, idade: number }> = [
    {nome: "Jonathas Rosa", idade: 37},
    {nome: "Jefferson Rosa", idade: 36},
    {nome: "Junior Rosa", idade: 35}
  ]
  constructor() { }

  ngOnInit(): void {
  }
  public getDados(event: number) {
    this.enviarDados.emit(this.list[event]);
  }
}
