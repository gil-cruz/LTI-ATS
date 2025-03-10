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
