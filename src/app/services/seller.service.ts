import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUp } from 'src/data-type';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http: HttpClient) { }

  userSignUp(data: SignUp): Observable<any> {
    return this.http.post('http://localhost:3000/seller', data)
  }
}
