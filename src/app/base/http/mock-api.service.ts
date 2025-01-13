import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { ApiService } from './api-service.interface';
import { mockData } from './mock-data';
import { UsuarioType, Cita, Diagnostico, Medico, Paciente } from '../../core/domain/models';

type MockDataType = {
  usuarios: UsuarioType[];
  citas: Cita[];
  diagnosticos: Diagnostico[];
  medicos: Medico[];
  pacientes: Paciente[];
}

@Injectable({
  providedIn: 'root'
})
export class MockApiService extends ApiService {
  private mockData: MockDataType = {...mockData}

  constructor() {
    // Inicializar las listas filtradas
    super()
    this.mockData.medicos = this.mockData.usuarios.filter(u => u.tipo === 'medico') as Medico[];
    this.mockData.pacientes = this.mockData.usuarios.filter(u => u.tipo === 'paciente') as Paciente[];
  }

  private getRandomDelay() {
    return Math.floor(Math.random() * 900) + 100;
  }

  private shouldError() {
    return Math.random() < 0.1; // 10% de probabilidad de error
  }

  get<T>(endpoint: string): Observable<T> {
    if (this.shouldError()) {
      return throwError(() => new Error(`Error fetching ${endpoint}`));
    }

    const endpointParts = endpoint.split('/');
    const resource = endpointParts[0];
    const id = endpointParts[1];

    let data: any;

    if (id) {
      data = this.mockData[resource as keyof MockDataType].find((item: any) => item.id === Number(id));
    } else {
      data = this.mockData[resource as keyof MockDataType];
    }

    return of(data as T).pipe(
      delay(this.getRandomDelay())
    );
  }

  post<T>(endpoint: string, data: any): Observable<T> {
    if (this.shouldError()) {
      return throwError(() => new Error(`Error posting to ${endpoint}`));
    }

    const resource = endpoint as keyof MockDataType;
    const newId = Math.max(...this.mockData[resource].map((item: any) => item.id || 0)) + 1;
    const newItem = { ...data, id: newId };
    
    this.mockData[resource] = [...this.mockData[resource], newItem];

    return of(newItem as T).pipe(
      delay(this.getRandomDelay())
    );
  }

  put<T>(endpoint: string, id: number, data: any): Observable<T> {
    if (this.shouldError()) {
      return throwError(() => new Error(`Error updating ${endpoint}`));
    }

    const endpointParts = endpoint.split('/');
    const resource = endpointParts[0] as keyof MockDataType;
    
    const index = this.mockData[resource].findIndex((item: any) => item.id === id);
    if (index !== -1) {
      this.mockData[resource][index] = { ...data, id };
      return of(this.mockData[resource][index] as T).pipe(
        delay(this.getRandomDelay())
      );
    }

    return throwError(() => new Error('Resource not found'));
  }

  delete<T>(endpoint: string, id: number): Observable<T> {
    if (this.shouldError()) {
      return throwError(() => new Error(`Error deleting from ${endpoint}`));
    }

    const endpointParts = endpoint.split('/');
    const resource = endpointParts[0] as keyof MockDataType;
    
    const index = this.mockData[resource].findIndex((item: any) => item.id === id);
    if (index !== -1) {
      const [deleted] = this.mockData[resource].splice(index, 1);
      return of(deleted as T).pipe(
        delay(this.getRandomDelay())
      );
    }

    return throwError(() => new Error('Resource not found'));
  }
}