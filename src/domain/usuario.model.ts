export interface Usuario {
    nombre: string;
    apellidos: string;
    usuario: string;
    clave: string;
    tipo: 'base' | 'paciente' | 'medico';
  }
  
  export interface Paciente extends Usuario {
    tipo: 'paciente';
    nss?: string;
    numTarjeta: string;
    teleforno: string;
    direccion: string;
}
  
  export interface Medico extends Usuario {
    tipo: 'medico';
    numColegiado?: string;
  }
  
  export type UsuarioType = Usuario | Paciente | Medico;