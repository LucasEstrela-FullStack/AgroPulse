
def normalize_car(data: dict) -> dict:
    """
    Normaliza qualquer resposta do provider para o domínio Farm.
    """

    if not data:
        return None

    return {
        "car_code": data.get("car_code") or data.get("identifier"),
        "area_hectares": data.get("area_hectares") or data.get("area"),
        "geometry": data.get("geometry") or data.get("geo") or None,
    }