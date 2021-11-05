
import { Router, ɵassignExtraOptionsToRouter } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'minapp';
  produits = Produits;
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(public router: Router , private tokenStorageService: TokenStorageService) { }
  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getPerson();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
  
  Design:string="assets/images/Design.jpg";
  herobg:string="assets/images/hero-bg.png";
  img1:string="assets/images/img-1.png";
  img2:string="assets/images/img-2.jpg";
}
export enum Produits {
  Computer = 'Computer',
  Tv = 'Tv',
  Phone = 'Phone'
}

