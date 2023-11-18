import { Component, OnInit } from '@angular/core';
import { GetNewsService } from 'src/app/api/getNews.service';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsPageComponent implements OnInit {
  searchText: string = '';
  articles: NewsArticle[] = [];
  isDataLoaded: boolean = false;
  first: number = 0;
  rows: number = 12;
  totalCount: number = 99999;
  constructor(private _getNewsService: GetNewsService) {}

  ngOnInit(): void {
    this.getStartNews();
  }

  getStartNews() {
    this.isDataLoaded = false;
    this._getNewsService.getArticles().subscribe((res) => {
      console.log(res);
      this.isDataLoaded = true;
      this.articles = res.articles.results;
    });
  }

  onPageChange(event: PageEvent) {
    console.log(event);
    this.first = event.first;
    this.rows = event.rows;
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