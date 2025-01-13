import { Injectable } from '@angular/core';

import { firstValueFrom } from 'rxjs';
import { ApiService } from '../../../base/http/api-service.interface';
import { Diagnostico } from '../models';
import { DiagnosticoRepository } from './diagnostico.repository';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticoRepositoryImpl implements DiagnosticoRepository {
  constructor(private apiService: ApiService) {}

  async getDiagnosticos(): Promise<Diagnostico[]> {
    return firstValueFrom(
      this.apiService.get<Diagnostico[]>('/diagnosticos')
    );
  }

  async getDiagnosticoById(id: string): Promise<Diagnostico | null> {
    return firstValueFrom(
      this.apiService.get<Diagnostico>(`/diagnosticos/${id}`)
    );
  }

  async createDiagnostico(diagnostico: Partial<Diagnostico>): Promise<Diagnostico> {
    return firstValueFrom(
      this.apiService.post<Diagnostico>('/diagnosticos', diagnostico)
    );
  }

  async updateDiagnostico(id: string, diagnostico: Partial<Diagnostico>): Promise<Diagnostico> {
    return firstValueFrom(
      this.apiService.put<Diagnostico>('/diagnosticos', parseInt(id), diagnostico)
    );
  }

  async deleteDiagnostico(id: string): Promise<void> {
    return firstValueFrom(
      this.apiService.delete<void>('/diagnosticos', parseInt(id))
    );
  }
}