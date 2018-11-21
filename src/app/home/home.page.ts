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
  this.newsData = [];
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
doRefresh(event) {
  console.log('Begin async operation');
this.getNews();
  setTimeout(() => {
    console.log('Async operation has ended');
    event.target.complete();
  }, 2000);
}

ngOnInit() {
  this.getNews();
}
}

