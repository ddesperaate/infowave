import { Component, HostListener, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { GetNewsService } from 'src/app/api/getNews.service';
import { NewsDetailsComponent } from 'src/app/components/news-details/news-details.component';
import { NewsDetailsService } from 'src/app/shared/services/newsDetailsData.service';
import {
  FiltersService,
  RouteApiParams,
} from 'src/app/shared/services/searchParams.service';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  providers: [DialogService, MessageService],
})
export class NewsPageComponent implements OnInit {
  searchText: string = '';
  articles: NewsArticle[] = [];
  isDataLoaded: boolean = false;
  isPageLoaded: boolean = false;
  first: number = 0;
  rows: number = 12;
  totalCount: number = 0;
  dialogRef: DynamicDialogRef | undefined;
  constructor(
    private _getNewsService: GetNewsService,
    private _newsDetailsService: NewsDetailsService,
    private _filtersService: FiltersService,
    public dialogService: DialogService,
    public messageService: MessageService
  ) {}

  @HostListener('document:keydown.escape', ['$event'])
  handleEscape(event: KeyboardEvent) {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    // this.getStartNews();
    this._getNewsService.initListeners();
    this._filtersService.getParams().subscribe((params) => {
      this.getStartNews();
    });
  }

  getStartNews() {
    this.isPageLoaded = false;
    this._getNewsService.getArticles().subscribe((res) => {
      if (res?.error) {
        console.log(res);
        this.messageService.add({
          severity: 'error',
          summary: 'Сталася помилка',
          detail: res?.error,
        });
        return;
      }
      console.log(res, '===============');
      this.totalCount = res.articles.totalResults;
      this.articles = res.articles.results;
      this.isDataLoaded = true;
      this.isPageLoaded = true;
      // setTimeout(()=> this.isDataLoaded = true, 1000);
    });
  }

  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
    const params = new RouteApiParams();
    params.page = event.page;
    params.articlesCount = event.rows;
    this._filtersService.setParams(params);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  showNewsDetails(article: NewsArticle): void {
    this.dialogRef = this.dialogService.open(NewsDetailsComponent, {
      header: article.title,
      width: window.innerWidth < 1025 ? '95%' : '70%',
      height: window.innerWidth < 1025 ? '100%' : '90%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: false,
      closeOnEscape: true,
      data: article,
    });
    this._newsDetailsService.fetchArticleDetailsDataFromAPI(article.uri);
  }

  getArticleTypeClass(type): string {
    let articleTypeClass: string = 'type type';
    switch (type) {
      case 'news':
        articleTypeClass += '--news';
        break;
      case 'blog':
        articleTypeClass += '--blog';
        break;
      case 'pr':
        articleTypeClass += '--pr';
        break;
    }
    return articleTypeClass;
  }

  getArticleTypeName(type): string {
    let articleTypeName: string = 'Новина';

    switch (type) {
      case 'blog':
        articleTypeName = 'Блог';
        break;
      case 'pr':
        articleTypeName = 'Пресс реліз';
        break;
      default:
        break;
    }
    return articleTypeName;
  }

  parseStringToDate(dateString: string): Date {
    if (!dateString) return new Date();
    const dateParts = dateString.split('-');

    const year = parseInt(dateParts[0], 10);
    const month = parseInt(dateParts[1], 10) - 1;
    const day = parseInt(dateParts[2], 10);

    const parsedDate = new Date(year, month, day);

    return parsedDate;
  }
}

export class NewsArticle {
  authors!: Author[];
  body!: string;
  title!: string;
  url!: string;
  uri!: string;
  source!: Source;
  dataType!: string;
  date!: string | Date;
  time!: string;
  eventUri!: any;
  image!: string | null;
  lang!: string;
  relevance!: number | null;
  sentiment!: any;
  sim!: any;
  wgt: number | null;
}

export class Source {
  dataType: string | null;
  title: string | null;
  uri: string | null;
}

export class Author {
  isAgency: false;
  name: string;
  type: string;
  uri: string;
}

interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}
