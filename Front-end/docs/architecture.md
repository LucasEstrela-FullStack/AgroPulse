# Architecture

## Recommended stack

- Next.js 16+
- React 19+
- TypeScript
- Tailwind CSS
- shadcn/ui
- Zustand
- TanStack Query
- React Hook Form
- Zod
- Framer Motion
- Recharts
- Mapbox GL
- Leaflet
- Lucide icons

## Architecture style

Use a feature-driven architecture with clear separation between UI, domain rules, services, and shared utilities.

## Suggested structure

```text
src/
  app/
  features/
  components/
  services/
  hooks/
  store/
  types/
  lib/
  utils/
  constants/
  contexts/
  mocks/
  styles/
  tests/
```

## Front-end rules

- do not hardcode business logic inside components
- keep UI components thin and focused on rendering
- move reusable logic into services, hooks, and shared utilities
- use strong typing for requests, responses, DTOs, and entities
- support future backend integration without rewriting the UI

## Data layer

Plan for:

- DTOs
- interfaces
- entities
- request types
- response types
- mock repositories
- future API adapters

## Scalability requirements

The architecture should support:

- API versioning
- microservices integration
- multi-tenant behavior
- cloud-native deployment
- edge rendering
- feature flags
- event-driven integrations

## Maps module

Create reusable components for:

- MapContainer
- HeatMapLayer
- NDVILayer
- ClimateLayer
- SentinelLayer
- ProductivityLayer
- LayerSelector
- MapLegend
- MapToolbar
- MapFilters
- MapControls

## Dashboard module

Include KPI cards for:

- Productivity Score
- Water Efficiency
- Climate Risk
- Irrigation Priority
- NDVI Index
- Yield Forecast

Also include:

- charts
- heatmaps
- alerts
- recent activity
- operational recommendations

