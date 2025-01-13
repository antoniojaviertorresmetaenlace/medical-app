import { Diagnostico } from '../models/diagnostico.model';

export interface DiagnosticoRepository {
  getDiagnosticos(): Promise<Diagnostico[]>;
  getDiagnosticoById(id: string): Promise<Diagnostico | null>;
  createDiagnostico(diagnostico: Partial<Diagnostico>): Promise<Diagnostico>;
  updateDiagnostico(id: string, diagnostico: Partial<Diagnostico>): Promise<Diagnostico>;
  deleteDiagnostico(id: string): Promise<void>;
}