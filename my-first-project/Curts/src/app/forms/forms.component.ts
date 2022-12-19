import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public listSandwiche: Array<{ sandwiche: string, preco: string}> = [
    { sandwiche: "Misto", preco: "R$8.50" },
    { sandwiche: "X-Burger", preco: "R$10.50" },
    { sandwiche: "X-Bacon", preco: "R$12.50" },
    { sandwiche: "X-Salada/Frango", preco: "R$11.50" },
    { sandwiche: "X-Tudo", preco: "R$14.50" },
    
  ];

  constructor() { }

  ngOnInit(): void {
  }
  public submitForm(form: NgForm) {
    if (form.valid) {
      console.log(form.value)
    }
  }
}
