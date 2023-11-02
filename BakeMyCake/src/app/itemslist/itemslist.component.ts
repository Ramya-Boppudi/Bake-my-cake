import { Component,OnInit } from '@angular/core';
import { Cake } from '../models/cake';
import { ItemService } from '../services/item.service';


@Component({
  selector: 'app-itemslist',
  templateUrl: './itemslist.component.html',
  styleUrls: ['./itemslist.component.css']
})
export class ItemslistComponent implements OnInit {
cookies: string = "cookies";
cakes: string = "cakes";
brownies: string = "brownies";
all:string="all"

items: Array<Cake> = [];

constructor(private itemService: ItemService) { }

ngOnInit(): void {
  this.itemService.getAllItems().subscribe({
    next: (data) => {
      this.items = data;
    },
    error: err => {
      alert(err);
    }
  });
}
onSearchTextChanged(itemName: string) {
  this.itemService.getAllItems().subscribe({
    next: (data) => {
      if (itemName || itemName !== '') {
        this.items = data.filter((item) =>
          item.itemName?.toLowerCase().includes(itemName.toLowerCase())
        );
      } else {
        this.items = data;
      }
    },
    error: (error) => {
      alert('Network Error !! Please Try Again Later');
    },
  });
}
reset(itemName:string){
  this.itemService.getAllItems().subscribe({
    next: data => {
      if (itemName==="all") {
      this.items = data;
    }
    }
  })
}
displaysorted(itemName: string) {
  this.itemService.getAllItems().subscribe({
    next: (data) => {
      if (itemName || itemName !== '') {
        this.items = data.filter((item) =>
        item.category?.toLowerCase().includes(itemName.toLowerCase())
        );
      } else {
        this.items = data;
      }
    },
    error: (error) => {
      alert('Network Error !! Please Try Again Later');
    },
  });

}
} 
