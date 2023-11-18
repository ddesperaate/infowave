import { Component, OnInit } from '@angular/core';
import { AppConsts } from 'src/app/shared/AppConsts';

@Component({
  selector: 'app-aside-component',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  searchText: string = '';
  
  categories = AppConsts.newsCategoriesList;
  selectedCategories: any = AppConsts.newsCategoriesList;
  newsTypes = AppConsts.newsTypes;
  selectedNewsTypes: any = [AppConsts.newsTypes[0]];
  langsList = AppConsts.lagsList;
  selectedLangs: any = [AppConsts.lagsList[0]];


  constructor() {}

  ngOnInit(): void {
  }

  findNews(): void {
    console.log(this.selectedCategories);
    console.log(this.selectedNewsTypes);
    console.log(this.selectedLangs);
  }

}
