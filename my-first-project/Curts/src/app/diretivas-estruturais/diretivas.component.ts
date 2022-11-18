import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas',
  templateUrl: './diretivas.component.html',
  styleUrls: ['./diretivas.component.scss']
})
export class DiretivasComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;
  public list: Array<{ nome: string, idade: number }> = [
    { nome: "João Rosa", idade: 62 },
    { nome: "Jonathas Rosa", idade: 37 },
    { nome: "Jefferson Rosa", idade: 36 },
    { nome: "Júnior Rosa", idade: 35 }
  ];
  public nome: string = 'jonathas';
  
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      if (this.condition) {
        this.condition = false
      } else {
        this.condition = true
      }
    }, 2000)
  }
  public onClick() {
    if (this.conditionClick) {
      this.conditionClick = false
    } else {
      this.conditionClick = true
    }
  }
  public onClickAddList() {
    this.list.push({nome: "Jacilene", idade:57 })
  }
  public onClickEventList(event: number) {
    this.list.splice(event,1)
  }
}
