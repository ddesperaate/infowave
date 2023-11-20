import { Component, OnInit } from '@angular/core';
import { FiltersService } from 'src/app/shared/services/searchParams.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchText: string = '';
  nowDate: Date = new Date();

  // articlesSearchFieldTimer: NodeJS.Timeout;

  constructor(
    private _searchParamsService: FiltersService,
  ) { }

  ngOnInit(): void {

    setInterval(()=> {
      this.nowDate = new Date();
    }, 60000)
  }

  searchArticlesWithSearchWord(event): void {
    // this.articlesSearchFieldTimer
  }

}
