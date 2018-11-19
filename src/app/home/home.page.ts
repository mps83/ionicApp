import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  newsData: any = [];
  page: any = 1;
  constructor(private apiService: ApiService , private router: Router) {}

getNews() {
  return this.apiService.getData().subscribe(res => {
    this.newsData.push(res);
    this.newsData = this.newsData[0].posts;
    console.log(this.newsData);
  });
}
openSingleNews(news) {
 this.apiService.singleNews = news;
 this.router.navigate(['./singleNews']);
}

ngOnInit() {
  this.getNews();
}
}

