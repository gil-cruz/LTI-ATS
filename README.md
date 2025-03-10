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


## Architecture

This project follows Hexagonal Architecture and Domain-Driven Design (DDD) principles:

### Bounded Contexts

1. **Job Management**
   - Job posting and management
   - Job board integrations
   - Requirements and job descriptions
   - Recruitment workflow configuration
2. **Candidate Management**
   - Candidate profiles
   - CV and document management
   - Application history
   - Talent pool

3. **Recruitment Process**
   - Selection stage tracking
   - Interview management
   - Technical assessments
   - Hiring decisions

4. **Communications**
   - Automated notifications
   - Interview scheduling
   - Email templates
   - Communication tracking

5. **Analytics & Reporting**
   - Recruitment metrics
   - Source analysis
   - Hiring timelines
   - Custom reports

6. **User & Security Management**
   - Authentication & authorization
   - Roles and permissions
   - Action auditing
   - Company settings

## Tech Stack

- **Frontend**: Next.js 14, TypeScript, TailwindCSS
- **Backend**: FastAPI, Python 3.11+
- **Database**: PostgreSQL 15
- **Infrastructure**: Docker, Docker Compose

## Project Structure

See [STRUCTURE.md](./docs/STRUCTURE.md) for detailed project organization.

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.





