import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})




export class SignInComponent implements OnInit {
  isLoggedIn = false
  constructor(private router: Router) {

   }

  ngOnInit(): void {
  }
  signIn() {
    this.isLoggedIn = true
    this.router.navigate(['/home'], {queryParams: {isLoggedIn:this.isLoggedIn}, skipLocationChange: true})
  }


}


