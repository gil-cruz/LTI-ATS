from fastapi import APIRouter
from src.api.v1.endpoints import recruitment, jobs, candidates

api_router = APIRouter()

api_router.include_router(recruitment.router, prefix="/recruitment", tags=["recruitment"])
#api_router.include_router(jobs.router, prefix="/jobs", tags=["jobs"])
#api_router.include_router(candidates.router, prefix="/candidates", tags=["candidates"])