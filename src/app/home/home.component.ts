import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from 'src/data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  popularProduct: undefined | product[];

  trendyProductArray: undefined | product[];

  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.homeProducts();
    this.trendyProducts();
  }

  homeProducts() {
    this.product.popularProduct().subscribe((data) => {
      console.warn(data)
      this.popularProduct = data;
    })
  }

  trendyProducts() {
    this.product.trendyProducts().subscribe((data) => {
      this.trendyProductArray = data;
    })
  }

}
