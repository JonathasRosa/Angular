import { ListInvestimentsService } from './../../services/list-investiments.service';
import { Component, OnInit } from '@angular/core';
import { Investiments } from '../../model/investiments';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public investiments: Array<Investiments> = [
    {
      name: 'Itaú',
      value: 100
    },
     {
      name: 'Banco do Brail',
      value: 100
    },
      {
      name: 'NBank',
      value: 100
    },
       {
      name: 'Inter',
      value: 100
    },
  ]
  constructor(private ListInvestimentsService: ListInvestimentsService) {}
  ngOnInit(): void {
    this.ListInvestimentsService.list().subscribe(
      res => console.log(res)
    )
  }
}
