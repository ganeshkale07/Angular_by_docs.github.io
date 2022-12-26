import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../shared/product';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products : Product[] = [];
  contactForm = this.formBuilder.group({
    name : '',
    address : ''
  });

  constructor(private cartService : CartService,
    private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.products = this.cartService.getCartItem();
  }

  onSubmit(){
    this.products = this.cartService.clearCart();
    console.log(this.contactForm.value);
    this.contactForm.reset();
    }

}
