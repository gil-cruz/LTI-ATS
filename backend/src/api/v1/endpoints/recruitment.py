from fastapi import APIRouter, HTTPException
from typing import List

router = APIRouter()

@router.get("/")
async def list_interviews():
    return {"message": "List of interviews"}