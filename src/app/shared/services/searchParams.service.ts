import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { AppConsts } from '../AppConsts';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  private params: BehaviorSubject<RouteApiParams> = new BehaviorSubject({
    searchString: '',
    category: AppConsts.newsCategoriesList.map((c) => c.key),
    types: AppConsts.newsTypes.map((t) => t.key),
    sortByString: 'date',
    langs: ['ukr'],
    page: 1,
    articlesCount: 12,
    dateStart: undefined,
    dateEnd: undefined,
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  initRouteListener(): void {
    this.route.queryParams.subscribe((p: RouteApiParams) => {
      const newParams = new RouteApiParams();
      if (p.category) newParams.category = typeof p.category === 'string' ? [p.category] : p.category;
      this.setParams(newParams);
    })
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
  category!: string[];
  types!: string | string[] | undefined
  sortByString!: string | null;
  langs!: string |  string[] | null;
  page!: number;
  articlesCount!: number;
  dateStart!: string | undefined;
  dateEnd!: string | undefined;
}