from app.core.redis import redis_client

class CacheService:

    @staticmethod
    def get(key: str):
        return redis_client.get(key)

    @staticmethod
    def set(key: str, value, ttl: int = 3600):
        redis_client.set(key, value, ex=ttl)

    @staticmethod
    def delete(key: str):
        redis_client.delete(key)