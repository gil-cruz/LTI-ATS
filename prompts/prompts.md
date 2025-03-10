```
Act as a software architect with expertise in scalable system design.
You are capable of proposing scalable solutions following best practices based on Hexagonal Architecture and Domain-Driven Design (DDD).

You will design an Applicant Tracking System (ATS) with a backend using Python FastAPI and a Next.js frontend. The backend should use PostgreSQL runing on Docker using docker-compose.yml, following best security practices and Test-Driven Development (TDD).

- Create a folder for frontend
- Create a folder for backend
- Create docker-compose.yml for Database 
- Create .env file containing all environment variables, including BACKEND_API to connect frontend and backend
```
```
@workspace create file tree structure for this project /file README.md
````

```
Based on the requirements and bounded contexts from the README.md, here's a recommended file tree structure for the LTI-ATS project:

lti-ats/
├── backend/
│   ├── src/
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
│   │   │   └── v1/
│   │   └── tests/
│   ├── requirements.txt
│   ├── pyproject.toml
│   └── pytest.ini
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── jobs/
│   │   │   ├── candidates/
│   │   │   ├── recruitment/
│   │   │   ├── communications/
│   │   │   ├── analytics/
│   │   │   └── settings/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   └── layouts/
│   │   ├── hooks/
│   │   ├── services/
│   │   ├── types/
│   │   └── utils/
│   ├── package.json
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

Would you like me to explain any specific part of this structure in more detail?
```
----
```Give me de code snippets for package.json, tsconfig.json and jest.config.js````
```I'll provide you with the configuration files for the frontend Next.js application.

These configurations:

Set up a modern Next.js project with TypeScript
Include essential dependencies for development
Configure proper path aliases for better imports
Set up Jest for testing with React Testing Library
Include TailwindCSS for styling
Configure proper TypeScript settings for Next.js
To install the dependencies, navigate to the frontend directory and run:

**npm install**
```