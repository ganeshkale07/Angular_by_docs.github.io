import { Component, OnInit , Input, Output , EventEmitter} from '@angular/core';
import { Product } from '../shared/product';


@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product! : Product; //No [] because it is single object
  @Output() notify = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
