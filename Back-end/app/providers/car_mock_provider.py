import logging
from typing import Optional, Dict, Any

logger = logging.getLogger(__name__)


class MockCarProvider:

    async def get_by_code(self, car_code: str) -> Optional[Dict[str, Any]]:

        logger.info(
            "MOCK_CAR_REQUEST",
            extra={"car_code": car_code}
        )

        # simula resposta REALISTA da API externa
        return {
            "car_code": car_code,
            "area_hectares": 1250.5,
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    [-56.097, -15.601],
                    [-56.095, -15.601],
                    [-56.095, -15.599],
                    [-56.097, -15.599],
                    [-56.097, -15.601]
                ]]
            }
        }