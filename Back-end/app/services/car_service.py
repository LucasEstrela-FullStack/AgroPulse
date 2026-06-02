import logging
from app.models.farm import Farm
from app.services.cache_service import CacheService
from app.adapters.car_adapter import normalize_car

logger = logging.getLogger(__name__)


class CarService:

    def __init__(self, provider):
        self.provider = provider

    async def get_farm(self, car_code: str) -> Farm:

        cache_key = f"farm:{car_code}"

        # -------------------------
        # 1. CACHE READ
        # -------------------------
        cached = CacheService.get(cache_key)

        if cached:
            logger.info("CAR_CACHE_HIT", extra={"car_code": car_code})
            return Farm.model_validate_json(cached)

        logger.info("CAR_CACHE_MISS", extra={"car_code": car_code})

        # -------------------------
        # 2. PROVIDER CALL
        # -------------------------
        raw_data = await self.provider.get_by_code(car_code)

        if not raw_data:
            raise ValueError("CAR não encontrado")

        # -------------------------
        # 3. NORMALIZATION (ADAPTER)
        # -------------------------
        normalized = normalize_car(raw_data)

        if not normalized:
            raise ValueError("Resposta inválida do provider CAR")

        # -------------------------
        # 4. DOMAIN MODEL
        # -------------------------
        farm = Farm.model_validate(normalized)

        # -------------------------
        # 5. CACHE WRITE
        # -------------------------
        CacheService.set(
            cache_key,
            farm.model_dump_json(),
            ttl=86400
        )

        return farm