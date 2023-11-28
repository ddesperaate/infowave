import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppConsts } from 'src/app/shared/AppConsts';
import { FiltersService, RouteApiParams } from 'src/app/shared/services/searchParams.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchText: string = '';
  nowDate: Date = new Date();

  articlesSearchFieldTimer;
  newsSectionsOptions;
  selectedNewsSection;

  sidebarVisible: boolean = false;

  asideMenuItems: MenuItem[];
  constructor(
    private _filterService: FiltersService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getNewSections();

    setInterval(() => this.nowDate = new Date(), 5000);

    this._filterService.getParams().subscribe((params: RouteApiParams) => {
      if ((typeof params.category === 'string')) {
        this.selectedNewsSection = {};
        const cat = this.newsSectionsOptions.find(nativeCategory => nativeCategory.key === params.category);
        if (cat) this.selectedNewsSection = { ...cat };
      };
    });

    this.asideMenuItems = [
      {
        label: 'Головна',
        icon: 'pi pi-fw pi-home',
        command: () => this.asideNavigate('./home'),
        target: '',
      },
      {
        label: 'Новини',
        icon: 'pi pi-fw pi-megaphone',
        command: () => this.asideNavigate('./news'),
        target: '',
      },
      {
        label: 'Рубрики',
        icon: 'pi pi-fw pi-server',
        items: this.getNewsCategoriesSideMenuItems(),
      },
      {
        label: 'Про нас',
        icon: 'pi pi-fw pi-id-card',
        command: () => this.asideNavigate('./about-us'),
        target: '',
      },
      {
        label: 'Контакти',
        icon: 'pi pi-fw pi-phone',
        command: () => this.asideNavigate('./contacts'),
        target: '',
      }
    ];
  }

  getNewSections(): void {
    this.newsSectionsOptions = AppConsts.newsCategoriesList;
  }

  searchArticlesWithSearchWord(event: string): void {
    clearTimeout(this.articlesSearchFieldTimer);
    const targetString = event ? event.split('\'').join().split('"').join().split(':').join() : '';
    const params = new RouteApiParams();
    params.searchString = event;
    this.articlesSearchFieldTimer = setTimeout(() => {
      this.router.navigate(['/news'], { queryParams: { search: params.searchString } });
      this._filterService.setParams(params);
    }, 1000);
  }

  showNewsOfSelectedCategory(item?): void {
    const params = new RouteApiParams();
    if (item) this.selectedNewsSection = item;
    params.category = [item?.key || this.selectedNewsSection.key];
    this.router.navigate(['/news'], { queryParams: { category: params.category } });
    this._filterService.setParams(params);
    this.sidebarVisible = false;
  }

  getNewsCategoriesSideMenuItems(): MenuItem[] {
    const MenuItems: MenuItem[] = AppConsts.newsCategoriesList.map(i => {
      return {
        label: i.name,
        icon: i.icon,
        key: i.key,
        command: () => this.showNewsOfSelectedCategory(i),
      };
    });

    return MenuItems;
  }

  asideNavigate(url): void {
    this.router.navigate([url], { queryParams: { } });
    this.sidebarVisible = false;
  }

}
