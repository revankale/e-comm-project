import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { product } from 'src/data-type';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {


  productData: undefined | product;

  updateProductMessage: undefined | string;

  constructor(private route: ActivatedRoute, private product: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.onEdit();
  }



  onEdit() {
    let productId = this.route.snapshot.paramMap.get('id');
    // console.warn("id", productId)
    productId && this.product.editProduct(productId).subscribe((data) => {
      // console.warn("data", data)
      this.productData = data;
    })
  }

  submit(data: product) {
    // console.warn(data)
    if (this.productData) {
      data.id = this.productData.id
    }
    this.product.updateProduct(data).subscribe((result) => {
      if (result) {
        this.updateProductMessage = "Product has updated"
      }
    })
    setTimeout(() => {
      this.updateProductMessage = undefined;
      this.router.navigate(['/seller-home']);
    }, 3000);
  }
}
