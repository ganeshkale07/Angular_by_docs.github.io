import { Component, OnInit } from '@angular/core';
import {Product , products} from '../shared/product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute,
    private cartService: CartService) { }

  product : Product | undefined;
  ngOnInit(): void {
  // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));

  // Find the product that correspond with the id provided in route.
  this.product = products.find(product => product.id === productIdFromRoute);
  }

  addtocart(product : Product){
    this.cartService.addToCart(product);
    alert("Your product successfully added to cart");
  }

}
