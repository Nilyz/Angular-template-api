import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private weatherApiUrl = 'https://api.open-meteo.com/v1/forecast'; // API de Open-Meteo

  constructor(private http: HttpClient) {}

  // Método para obtener el clima
  getWeather(latitude: number, longitude: number): Observable<any> {
    const params = {
      latitude: latitude.toString(),
      longitude: longitude.toString(),
      current_weather: 'true',
    };

    return this.http.get<any>(this.weatherApiUrl, { params }).pipe(
      catchError((error) => {
        console.error('Error al obtener los datos del clima:', error);
        return throwError(() => new Error('No se pudo obtener el clima'));
      })
    );
  }
}
