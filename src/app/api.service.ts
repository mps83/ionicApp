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
  getData(data) {
    return this.httpClient.get(`${this.url}${data}${this.apiKey}`).pipe(map(res =>
      res ));
  }
  getWeather(city) {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},in&APPID=8063c5f0491e5b223530a1f86cc3c2ba`).pipe(map(res => res));
  }
}
