import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  public nome: string = "Jonathas";
  public idade: number = 37;
  public maisUm: number = 1;
  public checkedDisabled: boolean = true;
  public imgSrc: string = "https://www.pexels.com/pt-br/foto/alvorecer-amanhecer-aurora-crepusculo-12327097/"
  public imgTitle: string = "Imagem-site-pexels";
  public position: {x: number, y: number} = {x:0, y:0}

  constructor() { }

  ngOnInit(): void { }
  /* any= qualquer coisa*/
  public alertaInfor(valor: MouseEvent) {
    console.log(valor);
  }
  public mouseMoveTest(valor: MouseEvent) {
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
