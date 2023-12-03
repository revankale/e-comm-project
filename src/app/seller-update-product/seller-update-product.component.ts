import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from 'src/data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {


  productData: undefined | product

  constructor(private route: ActivatedRoute, private product: ProductService) { }

  ngOnInit(): void {
    this.onEdit();
  }

  submit(data: any) {

  }

  onEdit() {
    let productId = this.route.snapshot.paramMap.get('id');
    console.warn("id", productId)
    productId && this.product.editProduct(productId).subscribe((data) => {
      console.warn("data", data)
      this.productData = data;
    })

  }
}
