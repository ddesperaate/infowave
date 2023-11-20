import { Component, OnInit } from '@angular/core';
import { AppConsts } from 'src/app/shared/AppConsts';
import { FiltersService, RouteApiParams } from 'src/app/shared/services/searchParams.service';

@Component({
  selector: 'app-aside-component',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  
  categories = AppConsts.newsCategoriesList;
  selectedCategories: any = AppConsts.newsCategoriesList;
  newsTypes = AppConsts.newsTypes;
  selectedNewsTypes: any = [AppConsts.newsTypes[0]];
  langsList = AppConsts.lagsList;
  selectedLangs: any = [AppConsts.lagsList[0]];


  constructor(
    private _filterService: FiltersService,
  ) {}

  ngOnInit(): void {
    console.log(this.selectedCategories);
    this._filterService.getParams().subscribe((params: RouteApiParams) => {
      // console.log(params);
      // this.selectedCategories = (params.category?.length) ? [...params.category] : [params.category];
      // this.selectedNewsTypes = params.types?.length ? [...params.types] : [params.types];
      // this.selectedLangs = params.langs?.length ? [...params.langs] : [params.langs];
    });
  }

  findNews(): void {
    const params = new RouteApiParams();
    params.category = this.selectedCategories && this.selectedCategories.length ? this.getFiltersValues(this.selectedCategories) : this.resetAllCategories();
    params.types = this.selectedNewsTypes && this.selectedNewsTypes?.length ? this.getFiltersValues(this.selectedNewsTypes) : this.resetAllNewsTypes();
    params.langs =this.selectedLangs && this.selectedLangs.length ? this.getFiltersValues(this.selectedLangs) : this.resetAllLangs();
    this._filterService.setParams(params);
  }

  showState(): void {
    console.log({
      selectedCategories: this.selectedCategories,
      selectedNewsTypes: this.selectedNewsTypes,
      selectedLangs: this.selectedLangs,
    });
  }

  resetAllNewsTypes(): string {
    this.selectedNewsTypes = [AppConsts.newsTypes[0]];
    return '';
  }

  resetAllLangs(): string {
    this.selectedLangs = [AppConsts.lagsList[0]];
    return '';
  }

  resetAllCategories(): string {
    this.selectedCategories = AppConsts.newsCategoriesList;
    return '';
  }

  getFiltersValues(categories): string[] {
    return categories.map(c => c.key);
  }

}
