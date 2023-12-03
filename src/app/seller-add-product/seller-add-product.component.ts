import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from 'src/data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {

  addProductMessege: string | undefined;

  constructor(private product: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  submit(data: product) {
    console.warn(data);
    this.product.addProduct(data).subscribe((result: any) => {
      // console.warn("result", result)
      if (result) {
        this.addProductMessege = "Product is successfully added";
      }
      setTimeout(() => {
        this.addProductMessege = undefined;
        this.router.navigate(['/seller-home'])
      }, 3000);


    })
  }

}
