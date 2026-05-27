//# src/services/ndvi.service.ts Exemple of a service that fetches data from Sentinel satellites

export function calculateNDVI(nir: number, red: number) {
  return (nir - red) / (nir + red)
}