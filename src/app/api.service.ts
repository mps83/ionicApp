import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
singleNews: any;
page = 1;
// tslint:disable-next-line:max-line-length
url = `https://newsapi.org/v2/`;
apiKey = 'apiKey=8dc0c9c5acd74b99ba34cdcea0c342f1';
  constructor(private httpClient: HttpClient) { }

  getData() {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get('http://webhose.io/filterWebContent?token=c29c746f-7968-47c2-9c3b-184880a1dba9&format=json&sort=crawled&q=language%3Aenglish%20has_video%3Atrue%20site_type%3Anews%20thread.country%3AIN').pipe(map(res =>
      res ));
  }
  getWeather(city) {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},in&APPID=8063c5f0491e5b223530a1f86cc3c2ba`).pipe(map(res => res));
  }
}
