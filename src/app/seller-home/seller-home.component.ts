import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from 'src/data-type';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit {


  productList: undefined | product[];

  productMessege: undefined | string;

  deleteIcon = faTrash;

  editIcon = faEdit;

  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.listProduct();
  }


  listProduct() {
    this.product.productList().subscribe((result) => {
      // console.warn(result)
      this.productList = result
    })
  }

  deleteProduct(id: number) {
    // console.warn("test id", id);
    this.product.deleteProduct(id).subscribe((result: any) => {
      if (result) {
        this.productMessege = "Product is deleted";
        this.listProduct();
      }
    })
    setTimeout(() => {
      this.productMessege = undefined;
    }, 3000);
  }

}
