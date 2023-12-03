import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AppConsts } from 'src/app/shared/AppConsts';
import {
  NewsDetailsDto,
  NewsDetailsService,
} from 'src/app/shared/services/newsDetailsData.service';

@Component({
  selector: 'news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss'],
})
export class NewsDetailsComponent implements OnInit {
  searchText: string = '';
  isDataLoaded: boolean = false;
  newsDetail: NewsDetailsDto;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _newsDetailsDataService: NewsDetailsService,
  ) {}

  ngOnInit(): void {
    this._newsDetailsDataService.details.subscribe((article) => {
      this.newsDetail = article;
      console.log(this.newsDetail, 'received');
    });

    this._newsDetailsDataService.getLoadingState().subscribe((state) => {
      this.isDataLoaded = state;
    });
  }

  simulateEscapeKey() {
    const event = new KeyboardEvent('keydown', { key: 'Escape' });
    this.document.dispatchEvent(event);
  }

  getCategoryName(label): string {
    const findedCat = AppConsts.newsCategoriesList.find((c) => c.key === label)
    return findedCat && findedCat.name;
  }

  handleImageError(event) {
    const parentElement = event.target.parentElement;
    parentElement.classList.add('image-with-error');
    event.target.src = 'assets/images/news/news-default.png';
  }
}
