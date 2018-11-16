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
  return this.apiService.getData(`top-headlines?language=en&pageSize=5&page=${this.page}&country=in&`).subscribe(res => {
    // tslint:disable-next-line:no-unused-expression
    this.newsData.push(res);
    this.newsData = this.newsData[0].articles;
  });
}
openSingleNews(news) {
 this.apiService.singleNews = news;
 this.router.navigate(['./singleNews']);
}
loadData(event) {
  this.page++;
  this.apiService.getData(`top-headlines?language=en&pageSize=5&page=${this.page}&country=in&`).subscribe(res => {
  for (const article of res['articles']) {
    this.newsData.push(article);
  }
  console.log(this.newsData);
  event.target.complete();
  });
}
ngOnInit() {
  this.getNews();
}
}
