from datetime import UTC, datetime
from enum import Enum
from uuid import UUID, uuid4

from pydantic import BaseModel, Field


class FarmStatus(str, Enum):
    CREATED = "created"
    PROCESSING = "processing"
    ANALYZED = "analyzed"
    ERROR = "error"


class Geometry(BaseModel):
    type: str
    coordinates: list


class Farm(BaseModel):
    id: UUID = Field(
        default_factory=uuid4
    )

    car_code: str = Field(
        ...,
        min_length=10,
        max_length=100
    )

    area_hectares: float | None = Field(
        default=None,
        ge=0
    )

    geometry: Geometry | None = None

    status: FarmStatus = FarmStatus.CREATED

    created_at: datetime = Field(
        default_factory=lambda: datetime.now(UTC)
    )

    updated_at: datetime = Field(
        default_factory=lambda: datetime.now(UTC)
    )