import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { FiltersService } from '../shared/services/searchParams.service';
import { AppConsts } from '../shared/AppConsts';

@Injectable({
  providedIn: 'root',
})
export class GetNewsService {
  API_URL: string = AppConsts.API_URL;
  API_URL_DETAILS: string = AppConsts.API_URL_DETAILS;
  API_KEY: string = AppConsts.API_KEY;
  category: string | string[] = AppConsts.newsCategoriesList.map((c) => c.key);
  dataTypes: string | string[] = AppConsts.newsTypes.map((t) => t.key);
  searchString: string = '';
  sortByString: string = 'date';
  page: number = 1;
  articlesCount: number = 12;
  langs: string[] | string = ['ukr'];
  dateStart: string | undefined;
  dateEnd: string | undefined;
  urlExludes: string[] = [
    'mk-mari.ru',
    'rg.ru',
    'altapress.ru',
    'nplus1.ru',
    'pnp.ru',
    'ng.ru',
    'rusjev.net',
    // 'ua.interfax.com.ua',
    'nowyny.eu',
  ];

  constructor(
    private http: HttpClient,
    private _filtersService: FiltersService
  ) {}

  initListeners(): void {
    this._filtersService.getParams().subscribe((params) => {
      this.category = params.category;
      this.dataTypes = params.types;
      this.searchString = params.searchString ? params.searchString : '';
      this.sortByString = params.sortByString;
      this.langs = params.langs;
      this.page = params.page;
      this.articlesCount = params.articlesCount;
      this.dateStart = params.dateStart;
      this.dateEnd = params.dateEnd;
    });
  }

  getArticles(): Observable<any> {
    const params = {
      action: 'getArticles',
      keyword: this.searchString,
      categoryUri: this.category,
      articlesPage: this.page,
      articlesCount: this.articlesCount,
      articlesSortBy: this.sortByString || 'date',
      lang: this.langs,
      articlesSortByAsc: !!(this.dateEnd && this.dateStart),
      resultType: 'articles',
      apiKey: this.API_KEY,
      ignoreSourceUri: this.urlExludes,
      dataType: this.dataTypes,
      forceMaxDataTimeWindow: 31,
      keywordOper: 'or',
      keywordLoc: 'body,title',
      isDuplicateFilter: 'skipDuplicates',
      dateStart: this.dateStart,
      dateEnd: this.dateEnd,
    };

    return this.http
      .post(this.API_URL, params)
      .pipe();
  }

  getMainArticle(): Observable<any> {
    const params = {
      action: 'getArticles',
      categoryUri: ['news/Health', 'news/Science', 'news/Politics'],
      articlesPage: 1,
      articlesCount: 1,
      articlesSortBy: 'socialScore',
      lang: ['ukr', 'rus'],
      articlesSortByAsc: false,
      resultType: 'articles',
      apiKey: this.API_KEY,
      forceMaxDataTimeWindow: 31,
      keywordOper: 'or',
      isDuplicateFilter: 'skipDuplicates',
      startSourceRankPercentile: 90,
      endSourceRankPercentile: 100,
    };

    return this.http
      .post(this.API_URL, params)
      .pipe();
  }

  getArticleDetails(uri): Observable<any> {
    const params = {
      action: 'getArticle',
      articleUri: uri,
      infoArticleBodyLen: -1,
      resultType: 'info',
      apiKey: this.API_KEY,
      includeArticleConcepts: true,
      includeArticleCategories: true,
    };

    return this.http
      .post(this.API_URL_DETAILS, params)
      .pipe(retry(1));
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
