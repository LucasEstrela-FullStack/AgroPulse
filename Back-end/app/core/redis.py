from upstash_redis import Redis

from app.core.config import (
    UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN
)

redis_client = Redis(
    url=UPSTASH_REDIS_REST_URL,
    token=UPSTASH_REDIS_REST_TOKEN
)