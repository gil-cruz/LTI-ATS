# LTI-ATS Backend

FastAPI backend application for the LTI Applicant Tracking System.

## Getting Started

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

cd backend

# Run development server
uvicorn src.main:app --reload --host 0.0.0.0 --port 8000

# Run tests
pytest
```

## Tech Stack

- FastAPI
- SQLAlchemy
- PostgreSQL
- Pydantic
- pytest

## Project Structure

```plaintext
src/
├── domain/          # Domain models and business logic
├── application/     # Application services and interfaces
├── infrastructure/  # External implementations
└── api/            # API endpoints and routes
```

## Development Conventions

- Follow Hexagonal Architecture principles
- Use Python type hints
- Write unit tests for all modules
- Follow PEP 8 style guide
- Document all public APIs