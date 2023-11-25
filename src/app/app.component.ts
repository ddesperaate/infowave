import { Component, OnInit } from '@angular/core';
import { FiltersService } from './shared/services/searchParams.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'infowave';

  constructor(
    private _searchParamsService: FiltersService,
  ) { }

  ngOnInit(): void {
    this._searchParamsService.initRouteListener();
  }
}
