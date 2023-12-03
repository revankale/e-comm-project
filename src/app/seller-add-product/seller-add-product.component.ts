import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from 'src/data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {

  addProductMessege: string | undefined;

  constructor(private product: ProductService) { }

  ngOnInit(): void {
  }

  submit(data: product) {
    console.warn(data);
    this.product.addProduct(data).subscribe((result: any) => {
      // console.warn("result", result)
      if (result) {
        this.addProductMessege = "Product is successfully added";
      }
      setTimeout(() => (this.addProductMessege = undefined), 3000);
    })
  }

}
