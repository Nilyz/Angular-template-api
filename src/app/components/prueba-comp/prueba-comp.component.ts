import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common'; // <-- Importar CommonModule

@Component({
  selector: 'app-prueba-comp',
  standalone: true,
  imports: [CommonModule], // <-- Añadir aquí
  templateUrl: './prueba-comp.component.html',
  styleUrls: ['./prueba-comp.component.scss']
})
export class PruebaCompComponent implements OnInit {
  weatherData: any = null; // Almacenará la información del clima
  weatherError: string = ''; // Almacenará los mensajes de error

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Llamada para obtener el clima, usando coordenadas de ejemplo
    this.getWeather(40.71, -74.01); // Coordenadas de Nueva York, puedes cambiarlo a cualquier ubicación
  }

  // Método para obtener el clima
  getWeather(lat: number, lon: number): void {
    this.apiService.getWeather(lat, lon).subscribe({
      next: (data) => {
        this.weatherData = data.current_weather; // Asignar los datos del clima
      },
      error: (error) => {
        this.weatherError = 'Error al obtener el clima';
        console.error('Error al obtener los datos del clima:', error);
      }
    });
  }
}
