import { Component,Input,OnInit } from '@angular/core';
import { Cake } from '../models/cake';

@Component({
  selector: 'app-itemcard',
  templateUrl: './itemcard.component.html',
  styleUrls: ['./itemcard.component.css']
})
export class ItemcardComponent implements OnInit {
  
  @Input()
  item!: Cake
  USD: any;
  constructor() { }

  ngOnInit(): void {
  }

}
