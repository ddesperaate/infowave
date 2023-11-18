import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchText: string = '';
  nowDate: Date = new Date();

  constructor() {}

  ngOnInit(): void {

    setInterval(()=> {
      this.nowDate = new Date();
    }, 60000)
  }

}
