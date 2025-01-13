import { Usuario } from '../models/usuario.model';

export interface UsuarioRepository {
  login(usuario: string, clave: string): Promise<Usuario | null>;
  getUsuarioById(id: string): Promise<Usuario | null>;
  getUsuarios(): Promise<Usuario[]>;
  createUsuario(usuario: Partial<Usuario>): Promise<Usuario>;
  updateUsuario(id: string, usuario: Partial<Usuario>): Promise<Usuario>;
  deleteUsuario(id: string): Promise<void>;
}