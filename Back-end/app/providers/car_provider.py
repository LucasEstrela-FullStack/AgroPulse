import httpx
import logging
from typing import Optional, Dict, Any


logger = logging.getLogger(__name__)


class CarProvider:

    BASE_URL = "https://consulta.car.gov.br/api"

    async def get_by_code(self, car_code: str) -> Optional[Dict[str, Any]]:
        url = f"{self.BASE_URL}/totalizer/getDeatilsByIdentifier/{car_code}"

        try:
            async with httpx.AsyncClient(timeout=15) as client:
                response = await client.get(url)

            # -------------------------
            # LOG (observabilidade)
            # -------------------------
            logger.info(
                "CAR_REQUEST",
                extra={
                    "url": url,
                    "status_code": response.status_code,
                    "car_code": car_code
                }
            )

            # -------------------------
            # NOT FOUND (caso esperado)
            # -------------------------
            if response.status_code == 404:
                return None

            # -------------------------
            # HTTP ERRORS (casos reais de falha)
            # -------------------------
            response.raise_for_status()

            # -------------------------
            # EMPTY RESPONSE GUARD
            # -------------------------
            if not response.text or not response.text.strip():
                logger.warning(
                    "CAR_EMPTY_RESPONSE",
                    extra={"car_code": car_code}
                )
                return None

            # -------------------------
            # PARSE JSON SAFE
            # -------------------------
            try:
                return response.json()
            except Exception as e:
                logger.error(
                    "CAR_INVALID_JSON",
                    extra={
                        "car_code": car_code,
                        "error": str(e)
                    }
                )
                return None

        except httpx.TimeoutException:
            logger.error(
                "CAR_TIMEOUT",
                extra={"car_code": car_code, "url": url}
            )
            return None

        except httpx.RequestError as e:
            logger.error(
                "CAR_REQUEST_ERROR",
                extra={
                    "car_code": car_code,
                    "error": str(e)
                }
            )
            return None