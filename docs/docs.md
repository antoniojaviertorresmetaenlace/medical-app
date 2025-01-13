# Tareas a Implementar

## Servicios y APIs
- Implementar los servicios que consumen la MockApi

## Funcionalidades
### Login
- Implementar la pestaña de login
- Ver como usar NGXS para la gestión del usuario

### Citas
- Implementar la ruta de citas
- Como usarías NGXS en este caso

### Diagnóstico  
- Implementar la ruta de diagnostico 
- Que va asociado a una cita

## Arquitectura Propuesta

```bash
src/
├── app/
│   ├── core/                     # Núcleo de la aplicación
│   │   ├── domain/              # Modelos y lógica de dominio 
│   │   │   ├── models/
│   │   │   │   ├── usuario.model.ts
│   │   │   │   ├── cita.model.ts
│   │   │   │   ├── especialidad.model.ts
│   │   │   │   └── horario.model.ts
│   │   │   │
│   │   │   ├── repositories/    # Interfaces de repositorios
│   │   │   │   ├── cita.repository.ts
│   │   │   │   └── usuario.repository.ts
│   │   │   │
│   │   │   └── services/        # Servicios de dominio
│   │   │       └── agenda.service.ts
│   │   │
│   │   └── base/               # Clases base y utilidades
│   │       └── http/
│   │           └── api.service.ts
│   │
│   ├── infrastructure/          # Implementaciones concretas
│   │   ├── api/
│   │   │   ├── endpoints.ts
│   │   │   └── dto/
│   │   │       ├── cita.dto.ts
│   │   │       └── usuario.dto.ts
│   │   │
│   │   └── repositories/
│   │       ├── cita.repository.impl.ts
│   │       └── usuario.repository.impl.ts
│   │
│   ├── features/               # Módulos de características
│   │   ├── citas/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   └── citas.module.ts
│   │   │
│   │   └── usuarios/
│   │       ├── components/
│   │       ├── pages/
│   │       └── usuarios.module.ts
│   │
│   └── shared/                # Componentes y utilidades compartidas
       ├── components/
       └── utils/
```