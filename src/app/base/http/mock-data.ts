import { UsuarioType, Cita, Diagnostico, Medico, Paciente } from "../../core/domain/models";

export interface MockDataType {
  usuarios: UsuarioType[];
  citas: Cita[];
  diagnosticos: Diagnostico[];
  medicos: Medico[];
  pacientes: Paciente[];
}

export const mockData: MockDataType = {
  usuarios: [
    {
      nombre: "Ana",
      apellidos: "García López",
      usuario: "agarcia",
      clave: "pass123",
      tipo: "paciente",
      nss: "123456789",
      numTarjeta: "SANI-123456",
      teleforno: "666555444",
      direccion: "Calle Mayor 123, Madrid"
    } as Paciente,
    {
      nombre: "Juan",
      apellidos: "Martínez Ruiz",
      usuario: "jmartinez",
      clave: "pass123",
      tipo: "paciente",
      nss: "987654321",
      numTarjeta: "SANI-987654",
      teleforno: "666777888",
      direccion: "Avenida Principal 45, Barcelona"
    } as Paciente,
    {
      nombre: "María",
      apellidos: "Sánchez Vidal",
      usuario: "msanchez",
      clave: "pass123",
      tipo: "paciente",
      nss: "456789123",
      numTarjeta: "SANI-456789",
      teleforno: "666333222",
      direccion: "Plaza España 7, Valencia"
    } as Paciente,
    {
      nombre: "Pedro",
      apellidos: "López García",
      usuario: "plopez",
      clave: "pass123",
      tipo: "paciente",
      nss: "789123456",
      numTarjeta: "SANI-789123",
      teleforno: "666999888",
      direccion: "Calle Real 92, Sevilla"
    } as Paciente,
    {
      nombre: "Carlos",
      apellidos: "Rodríguez Sánchez",
      usuario: "crodriguez",
      clave: "med123",
      tipo: "medico",
      numColegiado: "MED-12345"
    } as Medico,
    {
      nombre: "Laura",
      apellidos: "Fernández Gómez",
      usuario: "lfernandez",
      clave: "med123",
      tipo: "medico",
      numColegiado: "MED-67890"
    } as Medico,
    {
      nombre: "David",
      apellidos: "Jiménez Torres",
      usuario: "djimenez",
      clave: "med123",
      tipo: "medico",
      numColegiado: "MED-24680"
    } as Medico,
    {
      nombre: "Elena",
      apellidos: "Martín Ruiz",
      usuario: "emartin",
      clave: "med123",
      tipo: "medico",
      numColegiado: "MED-13579"
    } as Medico
  ],

  citas: [
    {
      fechaHora: new Date('2024-02-15T09:00:00'),
      motivoCita: new Date('2024-02-15T09:00:00'),
      attribute11: 1
    },
    {
      fechaHora: new Date('2024-02-15T10:30:00'),
      motivoCita: new Date('2024-02-15T10:30:00'),
      attribute11: 2
    },
    {
      fechaHora: new Date('2024-02-16T11:00:00'),
      motivoCita: new Date('2024-02-16T11:00:00'),
      attribute11: 3
    },
    {
      fechaHora: new Date('2024-02-16T12:30:00'),
      motivoCita: new Date('2024-02-16T12:30:00'),
      attribute11: 4
    },
    {
      fechaHora: new Date('2024-02-17T09:15:00'),
      motivoCita: new Date('2024-02-17T09:15:00'),
      attribute11: 5
    },
    {
      fechaHora: new Date('2024-02-17T16:00:00'),
      motivoCita: new Date('2024-02-17T16:00:00'),
      attribute11: 6
    }
  ],

  diagnosticos: [
    {
      valoracionEspecialista: "Paciente presenta síntomas de gripe estacional. Se recomienda reposo y medicación sintomática.",
      enfermedad: "Gripe"
    },
    {
      valoracionEspecialista: "Tensión arterial elevada. Se prescribe tratamiento antihipertensivo.",
      enfermedad: "Hipertensión"
    },
    {
      valoracionEspecialista: "Dolor articular en rodilla derecha. Se recomienda fisioterapia.",
      enfermedad: "Artritis"
    },
    {
      valoracionEspecialista: "Niveles elevados de glucosa en sangre. Se inicia tratamiento con metformina.",
      enfermedad: "Diabetes tipo 2"
    },
    {
      valoracionEspecialista: "Infección bacterial en garganta. Se prescribe antibiótico.",
      enfermedad: "Faringitis"
    },
    {
      valoracionEspecialista: "Migraña crónica. Se prescribe tratamiento preventivo.",
      enfermedad: "Migraña"
    },
    {
      valoracionEspecialista: "Dermatitis atópica en brazos. Se receta crema corticoide.",
      enfermedad: "Dermatitis"
    }
  ],

  medicos: [], // Se inicializará en el constructor
  pacientes: [] // Se inicializará en el constructor
};