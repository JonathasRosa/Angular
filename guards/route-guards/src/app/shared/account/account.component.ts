import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  [x: string]: any;
  constructor () {}
  ngOnInit(): void { }

    public exit(): boolean {
      if (confirm("Você quer sair?")) {
        return true;
      }
      return false;
    }
  }
