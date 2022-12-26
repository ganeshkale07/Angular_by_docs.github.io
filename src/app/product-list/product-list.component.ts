import { Component, OnInit } from '@angular/core';
import {Product , products} from '../shared/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products : Product[] = products;

  constructor() { }

  ngOnInit(): void {
  }

  share(){
    alert("Product shared");
  }

  onNotify(){
    alert("Will inform once product avaliable");
  }

}
