import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common'; // <-- Importar CommonModule

@Component({
  selector: 'app-prueba-comp',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './prueba-comp.component.html',
  styleUrls: ['./prueba-comp.component.scss']
})
export class PruebaCompComponent implements OnInit {
  weatherData: any = null; 
  weatherError: string = ''; 

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.getWeather(40.4168, -3.7038); 
  }

  // Método para obtener el clima
  getWeather(lat: number, lon: number): void {
    this.apiService.getWeather(lat, lon).subscribe({
      next: (data) => {
        this.weatherData = data.current_weather;
      },
      error: (error) => {
        this.weatherError = 'Error al obtener el clima';
        console.error('Error al obtener los datos del clima:', error);
      }
    });
  }
}
