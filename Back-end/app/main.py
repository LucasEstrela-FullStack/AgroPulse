from fastapi import FastAPI

from app.api.routes.health import router as health_router
from app.api.routes.farms import router as farms_router
from app.api.routes.debug import router as debug_router

app = FastAPI(title="AgroPulse API")

app.include_router(health_router)
app.include_router(farms_router)
app.include_router(debug_router)


@app.get("/")
def root():
    return {
        "status": "ok",
        "service": "AgroPulse API"
    }