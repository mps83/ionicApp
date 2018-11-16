import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage implements OnInit {
  weatherData: any = [];
  city: any;
  temp: any;
  windSpeed: any;
  wind: any;
  pressure: any;
  humidity: any;
  selectedCity: any;
  constructor(private apiService: ApiService, public loadingCtrl: LoadingController) {
  }
  weatherUpdate(cityName) {
    this.apiService.getWeather(cityName).subscribe(data => {
      this.city = data['name'];
      this.weatherData = data['main'];
      this.temp = this.weatherData['temp'] - 273.15;
      this.wind = data['wind'];
      this.windSpeed = this.wind.speed;
      this.pressure = this.weatherData.pressure;
      this.humidity = this.weatherData.humidity;
      console.log(data['main'], data['name'] , data);
    });
  }
  searchCity() {
    console.log(this.selectedCity);
    this.weatherUpdate(this.selectedCity);
  }


  ngOnInit() {
    this.selectedCity = 'Noida';
    this.weatherUpdate(this.selectedCity);
  }
}
