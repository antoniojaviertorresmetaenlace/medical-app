import { Injectable } from '@angular/core';

import { firstValueFrom } from 'rxjs';
import { ApiService } from '../../../base/http/api-service.interface';
import { Usuario } from '../models';
import { UsuarioRepository } from './usuario.repository';

@Injectable({
  providedIn: 'root'
})
export class UsuarioRepositoryImpl implements UsuarioRepository {
  constructor(private apiService: ApiService) {}

  async login(usuario: string, clave: string): Promise<Usuario | null> {
    return firstValueFrom(
      this.apiService.post<Usuario>('/usuarios/login', { usuario, clave })
    );
  }

  async getUsuarioById(id: string): Promise<Usuario | null> {
    return firstValueFrom(
      this.apiService.get<Usuario>(`/usuarios/${id}`)
    );
  }

  async getUsuarios(): Promise<Usuario[]> {
    return firstValueFrom(
      this.apiService.get<Usuario[]>('/usuarios')
    );
  }

  async createUsuario(usuario: Partial<Usuario>): Promise<Usuario> {
    return firstValueFrom(
      this.apiService.post<Usuario>('/usuarios', usuario)
    );
  }

  async updateUsuario(id: string, usuario: Partial<Usuario>): Promise<Usuario> {
    return firstValueFrom(
      this.apiService.put<Usuario>('/usuarios', parseInt(id), usuario)
    );
  }

  async deleteUsuario(id: string): Promise<void> {
    return firstValueFrom(
      this.apiService.delete<void>('/usuarios', parseInt(id))
    );
  }
}