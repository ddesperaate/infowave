import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { GetNewsService } from 'src/app/api/getNews.service';
import { Author, Source } from 'src/app/pages/news/news.component';

@Injectable({
  providedIn: 'root',
})
export class NewsDetailsService {
  public details: BehaviorSubject<NewsDetailsDto> = new BehaviorSubject(new NewsDetailsDto());
  private isDataLoaded: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _getNewsService: GetNewsService
  ) {}

  public getLoadingState(): BehaviorSubject<boolean> {
    return this.isDataLoaded;
  }

  public getNewsDetails(): BehaviorSubject<NewsDetailsDto> {
    return this.details;
  }

  fetchArticleDetailsDataFromAPI(uri): void {
    this.isDataLoaded.next(false);
    this._getNewsService.getArticleDetails(uri).subscribe((res) => {
      this.details.next(res[uri].info);
      this.isDataLoaded.next(true);
    });
  }
}

export class NewsDetailsDto {
  authors!: Author[];
  body!: string;
  dataType!: string;
  date!: Date | string;
  image!: string;
  lang!: string;
  relevance!: number;
  sim!: number;
  source!: Source;
  time!: string;
  title!: string;
  uri!: string;
  url!: string;
  wgt!: number;
}
