import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from 'src/data-type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  addProduct(data: product) {
    // console.warn("service called")
    return this.http.post("http://localhost:3000/products", data)
  }

  productList() {
    return this.http.get<product[]>("http://localhost:3000/products");
  }

  deleteProduct(id: number) {
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }

  editProduct(id: string) {
    return this.http.get<product>(`http://localhost:3000/products/${id}`)
  }

  updateProduct(product: product) {
    console.warn(product)
    return this.http.put<product>(`http://localhost:3000/products/${product.id}`, product)
  }
}
