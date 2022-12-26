import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
  shippingData : {"type":string,"price": number}[] | any = [];
  constructor(private cartServide : CartService) { }

  ngOnInit(): void {
    console.log(this.cartServide.getShippingInfo().subscribe(res => this.shippingData = res));
  }

}
