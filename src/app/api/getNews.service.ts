import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { FiltersService } from '../shared/services/searchParams.service';
import { AppConsts } from '../shared/AppConsts';

@Injectable({
  providedIn: 'root'
})
export class GetNewsService {
  API_URL: string = AppConsts.API_URL;
  API_KEY: string = AppConsts.API_KEY;
  category: string | string[] = 'news/Politics'
  searchString: string | string[] = '';
  sortByString: string = 'date';
  langs: string[] = ['ukr'];
  constructor(
    private http: HttpClient,
    private filtersService: FiltersService,
  ) {
  }

  initListeners(): void {
    this.filtersService.getParams().subscribe(params => {
      this.category = params.category;
      this.searchString = params.searchString;
      this.sortByString = params.sortByString;
      this.langs = params.langs;
    })
  }

  getArticles(): Observable<any> {
    const params = {
      action: 'getArticles',
      keyword: this.searchString,
      categoryUri: this.category,
      articlesPage: 1,
      articlesCount: 12,
      articlesSortBy: this.sortByString || 'date',
      lang: this.langs,
      articlesSortByAsc: false,
      resultType: 'articles',
      apiKey: this.API_KEY,
      dataType: [
        'news',
        'pr',
        'blog',
      ],
      forceMaxDataTimeWindow: 31,
    }

    // return new Observable();

    return this.http
      .post(this.API_URL, params)
      .pipe(retry(1), catchError(this.handleError));
  }



  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }

}
