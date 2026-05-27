// # src/services/sentinel.service.ts Exemple of a service that fetches data from Sentinel satellites

export async function fetchSentinelData() {
  return {
    temperature: 34,
    soilMoisture: 72,
    ndvi: 0.81
  }
}