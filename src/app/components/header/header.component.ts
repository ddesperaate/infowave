import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FiltersService, RouteApiParams } from 'src/app/shared/services/searchParams.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchText: string = '';
  nowDate: Date = new Date();

  articlesSearchFieldTimer;

  constructor(
    private _searchParamsService: FiltersService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    setInterval(()=> {
      this.nowDate = new Date();
    }, 60000)
  }

  searchArticlesWithSearchWord(event): void {
    clearTimeout(this.articlesSearchFieldTimer);
    const params = new RouteApiParams();
    params.searchString = event;
    this.articlesSearchFieldTimer = setTimeout(()=> {
      this.router.navigate(['/news'], { queryParams: { search: params.searchString }});
      this._searchParamsService.setParams(params);
    }, 600);
  }

}
