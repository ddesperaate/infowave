import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomePageComponent implements OnInit {
  searchText: string = '';

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  showRoute(path): void {
    this.router.navigate(['/' + path]);
  }
}
