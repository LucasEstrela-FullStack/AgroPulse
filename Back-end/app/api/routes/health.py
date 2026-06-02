from fastapi import APIRouter
from app.core.redis import redis_client

router = APIRouter()

@router.get("/health/redis")
def redis_health():

    redis_client.set("agropulse", "online")

    value = redis_client.get("agropulse")

    return {
        "redis": value
    }