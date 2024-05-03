import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  private clienteUrl: string;

  constructor(private http: HttpClient) {
    this.clienteUrl = 'https://tesapi-1ygs.onrender.com/WeatherForecast';
  }
  getClientes() {
    return this.http.get(this.clienteUrl);
  }

}
