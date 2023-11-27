import { Component, OnInit } from '@angular/core';
import { FiltersService } from './shared/services/searchParams.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'infowave';

  constructor(
    private _searchParamsService: FiltersService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this._searchParamsService.initRouteListener();

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
  }
}
