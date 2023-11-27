import { Component, OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { SignUp, login } from 'src/data-type';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {


  showLogin: boolean = false;
  authError: string = '';
  userError: string = '';

  constructor(private seller: SellerService, private router: Router) { }

  ngOnInit(): void {
    this.seller.reloadSeller()
  }

  signUp(data: SignUp): void {
    this.userError = "";
    this.seller.userSignUp(data);
    this.seller.isUserError.subscribe((Error) => {
      if (Error) {
        this.userError = "Name or Email or Password is not correct"
      }
    })
  }

  login(data: login): void {
    this.authError = "";
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((isError) => {
      if (isError) {
        this.authError = "Email or Password is not correct"
      }
    })
  }

  openLogin() {
    this.showLogin = true;
  }

  openSignUp() {
    this.showLogin = false;
  }
}
