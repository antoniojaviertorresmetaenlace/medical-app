import { Cita } from "../models";

export interface CitaRepository {
  getCitas(): Promise<Cita[]>;
  getCitaById(id: string): Promise<Cita | null>;
  createCita(cita: Partial<Cita>): Promise<Cita>;
  updateCita(id: string, cita: Partial<Cita>): Promise<Cita>;
  deleteCita(id: string): Promise<void>;
}