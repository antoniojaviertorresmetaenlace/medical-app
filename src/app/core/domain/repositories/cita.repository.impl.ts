import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { firstValueFrom } from 'rxjs';
import { ApiService } from '../../../base/http/api-service.interface';
import { Cita } from '../models';
import { CitaRepository } from './cita.repository';

@Injectable({
  providedIn: 'root'
})
export class CitaRepositoryImpl implements CitaRepository {
  constructor(private apiService: ApiService) {}

  async getCitas(): Promise<Cita[]> {
    return firstValueFrom(
      this.apiService.get<Cita[]>('/citas').pipe(
        map(citas => citas.map(this.mapToDomain))
      )
    );
  }

  async getCitaById(id: string): Promise<Cita | null> {
    return firstValueFrom(
      this.apiService.get<Cita>(`/citas/${id}`).pipe(
        map(this.mapToDomain)
      )
    );
  }

  async createCita(cita: Partial<Cita>): Promise<Cita> {
    return firstValueFrom(
      this.apiService.post<Cita>('/citas', cita).pipe(
        map(this.mapToDomain)
      )
    );
  }

  async updateCita(id: string, cita: Partial<Cita>): Promise<Cita> {
    return firstValueFrom(
      this.apiService.put<Cita>('/citas', parseInt(id), cita).pipe(
        map(this.mapToDomain)
      )
    );
  }

  async deleteCita(id: string): Promise<void> {
    return firstValueFrom(
      this.apiService.delete<void>('/citas', parseInt(id))
    );
  }

  private mapToDomain(cita: Cita): Cita {
    return {
      ...cita
    };
  }
}