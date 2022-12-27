import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../shared/product';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  ItemsInCart : Product[] = [];
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
      this.ItemsInCart = this.cartService.getCartItem();
  }

}
