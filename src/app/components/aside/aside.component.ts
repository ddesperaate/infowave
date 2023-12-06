import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppConsts } from 'src/app/shared/AppConsts';
import { FiltersService, RouteApiParams } from 'src/app/shared/services/searchParams.service';

@Component({
  selector: 'app-aside-component',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {

  @Output() mobileAsideClose: EventEmitter<any> = new EventEmitter();

  categories = AppConsts.newsCategoriesList;
  selectedCategories: any = AppConsts.newsCategoriesList;
  newsTypes = AppConsts.newsTypes;
  selectedNewsTypes: any = AppConsts.newsTypes;
  langsList = AppConsts.lagsList;
  selectedLangs: any = [AppConsts.lagsList[0]];

  isMobileDevice: boolean = true;

  date: Date | undefined;
  dateRange: Date[] | undefined;
  isRangeActive: boolean = true;

  maxDate: Date = new Date();

  constructor(
    private _filterService: FiltersService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.isMobileDevice = window.innerWidth < 1025;
    this._filterService.getParams().subscribe((params: RouteApiParams) => {
      if ((params.category && params.category?.length)) {
        this.selectedCategories = [];
        params.category.forEach(c => {
          const cat = this.categories.find(nativeCategory => nativeCategory.key === c);
          if (cat) this.selectedCategories.push(cat);
        });
      };
    });
  }

  findNews(): void {
    console.log(this.selectedLangs);
    const params = new RouteApiParams();
    params.category = this.selectedCategories && this.selectedCategories.length ? this.getFiltersValues(this.selectedCategories) : this.resetAllCategories();
    params.types = this.selectedNewsTypes && this.selectedNewsTypes?.length ? this.getFiltersValues(this.selectedNewsTypes) : this.resetAllNewsTypes();
    params.langs = this.selectedLangs && this.selectedLangs.length ? this.getFiltersValues(this.selectedLangs) : this.resetAllLangs();
    params.searchString = null;
    params.dateStart = this.isRangeActive && this.dateRange && this.dateRange[0] ? this.getDateForApiFormat(this.dateRange[0]) : this.getDateForApiFormat(this.date);
    params.dateEnd = this.isRangeActive && this.dateRange && this.dateRange[1] ? this.getDateForApiFormat(this.dateRange[1]) : this.getDateForApiFormat(this.date);
    params.page = 1;
    this.router.navigate([], {
      queryParams: {},
    })
    this._filterService.setParams(params);
    this.mobileAsideClose.emit();
  }

  getDateForApiFormat(date: Date): string | undefined {
    if (!date) return undefined;
    let result: string = '';
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');

    result = `${year}-${month}-${day}`;
    return result;
  }

  resetAllNewsTypes(): string {
    this.selectedNewsTypes = [AppConsts.newsTypes[0]];
    return '';
  }

  resetAllLangs(): string | string[] {
    this.selectedLangs = [AppConsts.lagsList[0]];
    return this.getFiltersValues(this.selectedLangs);
  }

  resetAllCategories(): string[] {
    this.selectedCategories = AppConsts.newsCategoriesList;
    return this.selectedCategories;
  }

  getFiltersValues(categories): string[] {
    return categories.map(c => c.key);
  }
}
