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
  weather: any;
  selectedImage: any;
  weaName: any ;
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
      this.weather = data['weather'];
      if (this.weather['0'].main === 'Haze') {
        this.weaName = 'partly-sunny';
      } else if (this.weather['0'].main === 'Smoke') {
        this.weaName = 'cloudy';
      } else if (this.weather['0'].main === 'Rain') {
        this.weaName = 'rainy';
      } else if (this.weather['0'].main === 'Sunny') {
        this.weaName = 'sunny';
      } else if (this.weather['0'].main === 'Clear') {
        this.weaName = 'sunny';
      }
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
