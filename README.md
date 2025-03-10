# LTI-ATS
Un ATS (Applicant Tracking System) es un software diseñado para gestionar el proceso de reclutamiento y selección de personal de manera digital y eficiente, desde la publicación de ofertas hasta la contratación, agilizando y optimizando el proceso.

## Quick Start

```bash
# Clone repository
git clone git@github.com:gil-cruz/LTI-ATS.git

# Install dependencies
cd LTI-ATS
cd frontend && npm install
cd ../backend && pip install -r requirements.txt

source .env

# Start services
docker-compose up -d
```

Access the application:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000
- API Documentation: http://localhost:8000/docs



## Bounded Contexts

### 1. Gestión de Vacantes (Job Management)
- Publicación y gestión de ofertas laborales
- Integración con bolsas de trabajo
- Gestión de requisitos y descripciones de puesto
- Configuración de flujos de reclutamiento

### 2. Gestión de Candidatos (Candidate Management)
- Perfiles de candidatos
- Gestión de CV y documentos
- Historial de aplicaciones
- Base de talento

### 3. Proceso de Selección (Recruitment Process)
- Seguimiento de etapas de selección
- Gestión de entrevistas
- Evaluaciones técnicas
- Decisiones de contratación

### 4. Comunicaciones (Communications)
- Notificaciones automáticas
- Programación de entrevistas
- Plantillas de correo
- Seguimiento de comunicaciones

### 5. Analytics y Reportes (Analytics & Reporting)
- Métricas de reclutamiento
- Análisis de fuentes de candidatos
- Tiempos de contratación
- Reportes personalizados

### 6. Gestión de Usuarios y Seguridad (User & Security Management)
- Autenticación y autorización
- Roles y permisos
- Auditoría de acciones
- Configuración de empresa

## Funcionalidad:
Permite centralizar la información de los candidatos, automatizar tareas, rastrear el progreso de las candidaturas y facilitar la comunicación con los solicitantes.

## Beneficios:

**Ahorro de tiempo:** Automatiza tareas repetitivas y agiliza el proceso de reclutamiento.
**Mejor organización:** Centraliza la información de los candidatos y permite un seguimiento más eficiente.
**Reducción de costos:** Optimiza el proceso de reclutamiento y reduce la necesidad de recursos humanos.
**Mejor toma de decisiones:** Permite analizar datos y tomar decisiones más informadas sobre la selección de personal.

**Ejemplos de funcionalidades:**

* Publicación de ofertas de empleo en múltiples plataformas.
* Búsqueda y selección de candidatos.
* Gestión de candidaturas y seguimiento del proceso de selección.
* Comunicación con los candidatos.
* Generación de informes y análisis de datos.



## Project Structure

lti-ats/
├── backend/
│   ├── src/
│   │   ├── __init__.py
│   │   ├── main.py
│   │   ├── domain/
│   │   │   ├── jobs/
│   │   │   ├── candidates/
│   │   │   ├── recruitment/
│   │   │   ├── communications/
│   │   │   ├── analytics/
│   │   │   └── security/
│   │   ├── application/
│   │   │   ├── services/
│   │   │   └── interfaces/
│   │   ├── infrastructure/
│   │   │   ├── persistence/
│   │   │   ├── repositories/
│   │   │   └── external_services/
│   │   ├── api/
│   │   │   └── __init__.py
│   │   │   └── v1/
│   |   |     ├── __init__.py
│   |   |     ├── routes.py
│   |   |     └── endpoints/
│   |   |         ├── __init__.py
│   |   |         └── recruitment.py
│   │   └── tests/
│   ├── requirements.txt
│   ├── pyproject.toml
│   └── pytest.ini
├── frontend/
│   ├── src/
│   │   ├── app/                   # Next.js 13+ App Router directory
│   │   │   ├── layout.tsx        # Root layout
│   │   │   ├── page.tsx          # Home page (/)
│   │   │   ├── globals.css       # Global styles
│   │   │   ├── jobs/            # Jobs feature
│   │   │   │   ├── page.tsx     # Jobs listing page (/jobs)
│   │   │   │   └── [id]/        # Dynamic job routes
│   │   │   │       └── page.tsx # Single job page (/jobs/[id])
│   │   │   ├── candidates/      # Candidates feature
│   │   │   │   └── page.tsx     # Candidates page (/candidates)
│   │   │   ├── recruitment/     # Recruitment feature
│   │   │   │   └── page.tsx     # Recruitment page (/recruitment)
│   │   │   ├── communications/  # Communications feature
│   │   │   │   └── page.tsx     # Communications page (/communications)
│   │   │   ├── analytics/       # Analytics feature
│   │   │   │   └── page.tsx     # Analytics page (/analytics)
│   │   │   └── settings/        # Settings feature
│   │   │       └── page.tsx     # Settings page (/settings)
│   │   ├── components/          # Shared components
│   │   │   ├── common/          # Common UI components
│   │   │   └── layouts/         # Layout components
│   │   │       └── Navbar.tsx   # Navigation component
│   │   ├── hooks/              # Custom React hooks
│   │   ├── services/           # API services
│   │   ├── types/             # TypeScript types/interfaces
│   │   └── utils/             # Utility functions
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── tsconfig.json
│   └── jest.config.js
├── docker/
│   ├── backend/
│   │   └── Dockerfile
│   ├── frontend/
│   │   └── Dockerfile
│   └── postgres/
│       └── init.sql
├── docker-compose.yml
├── .env
├── .gitignore
└── README.md


The structure follows hexagonal architecture principles and DDD, with clear separation between domain, application, and infrastructure layers in the backend. The frontend follows Next.js best practices with feature-based organization.


### Frontend conventions: 

* All pages live under src/app directory
* Each route has its own directory with a page.tsx file
* Layout components are placed in app/layout.tsx for root layout
* Global styles are in app/globals.css
* Reusable components go in components directory
* Each feature (jobs, candidates, etc.) has its own directory under app