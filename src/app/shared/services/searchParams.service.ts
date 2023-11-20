import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  private params: BehaviorSubject<RouteApiParams> = new BehaviorSubject({
    searchString: '',
    category: [''],
    types: [''],
    sortByString: '',
    langs: [''],
    page: 1,
    articlesCount: 12,
  });
  private routePrarms: RouteApiParams = new RouteApiParams();

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  setRoureParams(): void {
    this.router.navigate(['/news'], { queryParams: this.params.value })
  }

  public setParams(value: RouteApiParams, shouldReset?: boolean): void {
    this.params.next({...this.params.value, ...value });
  };

  public getParams(): BehaviorSubject<RouteApiParams> {
    return this.params;
  }
}


export class RouteApiParams {
  searchString!: string | null;
  category!: string | string[] | null;
  types!: string | string[] | undefined
  sortByString!: string | null;
  langs!: string |  string[] | null;
  page!: number;
  articlesCount!: number;
}