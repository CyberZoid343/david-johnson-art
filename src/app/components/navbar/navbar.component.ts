import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarIsInital = true;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    let position = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    if (position == max) {
      this.navbarIsInital = true;
    }
    else{
      this.navbarIsInital = false;
    }
  }

}
