import { Injectable } from '@angular/core';
import { Product } from '../shared/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  item : Product[] = [];

  constructor(private http : HttpClient) { 

  }
  
  addToCart(product : Product){
    this.item.push(product);
  }
  getCartItem(){
    return this.item;
  }
  clearCart(){
    this.item = [];
    return this.item;
  }
  
  getShippingInfo(){
    return this.http.get("/assets/shipping.json");
  }
}
