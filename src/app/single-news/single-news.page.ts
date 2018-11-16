import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-news',
  templateUrl: './single-news.page.html',
  styleUrls: ['./single-news.page.scss'],
})
export class SingleNewsPage implements OnInit {
  selectedNews: any;

  constructor(private apiService: ApiService , private router: Router) { }
  goBack() {
    this.router.navigate(['./']);
  }
  ngOnInit() {
    this.selectedNews = this.apiService.singleNews;
    // if (this.selectedNews === null || this.selectedNews === '' || this.selectedNews === undefined) {
    //   this.router.navigate(['./']);
    // }
    console.log(this.selectedNews);
  }

}
