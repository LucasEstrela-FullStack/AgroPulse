from fastapi import APIRouter
from app.providers.car_mock_provider import MockCarProvider
from app.providers.car_provider import CarProvider

router = APIRouter(prefix="/debug", tags=["Debug"])

#endpoint mock
@router.get("/car-mock/{car_code}")
async def mock_car(car_code: str):

    provider = MockCarProvider()
    return await provider.get_by_code(car_code)

#endpoint real bruto
@router.get("/car-real/{car_code}")
async def real_car(car_code: str):

    provider = CarProvider()
    return await provider.get_by_code(car_code)