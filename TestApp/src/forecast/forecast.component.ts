import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ForecastService } from '../services/forecast.service';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.scss'
})
export class ForecastComponent {

  data: any;
  constructor(private forecastService: ForecastService) {
    this.forecastService.getClientes().subscribe({
      next: x => this.data = x
    });
  }



}
