import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  private params: BehaviorSubject<RouteApiParams>;
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
  category!: string | null;
  sortByString!: string | null;
  langs!: string[] | null;
  page!: number;
  articlesCount!: number;
}