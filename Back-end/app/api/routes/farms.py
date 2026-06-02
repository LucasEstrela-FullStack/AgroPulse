from fastapi import APIRouter, HTTPException
from app.services.car_service import CarService
from app.providers.car_provider import CarProvider
from app.providers.car_mock_provider import MockCarProvider

router = APIRouter(prefix="/farms", tags=["Farms"])

USE_MOCK = True


def get_car_service():
    provider = MockCarProvider() if USE_MOCK else CarProvider()
    return CarService(provider)


@router.get("/{car_code}")
async def get_farm(car_code: str):

    service = get_car_service()

    try:
        return await service.get_farm(car_code)

    except ValueError as e:
        raise HTTPException(status_code=404, detail=str(e))

    except Exception:
        raise HTTPException(status_code=500, detail="Erro interno ao consultar CAR")