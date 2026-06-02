# AgroPulse API Documentation

## Visão Geral

O backend do AgroPulse tem como objetivo transformar dados do CAR/SICAR em entidades geoespaciais estruturadas para processamento agrícola.

A arquitetura é baseada em separação clara de responsabilidades:

- **Providers**: integração com fontes externas
- **Services**: orquestração de regras de negócio
- **Adapters**: normalização de dados externos
- **Models**: domínio interno
- **Cache**: camada de otimização de performance

---

## Fluxo da API

```text
Frontend
   ↓
GET /farms/{car_code}
   ↓
CarService
   ↓
Cache Layer
   ↓
CarProvider (real ou mock)
   ↓
normalize_car (Adapter)
   ↓
Farm Model
   ↓
Response
```

---

## Entidade Farm

Representa uma propriedade rural importada via CAR.

### Campos

| Campo | Descrição |
|---|---|
| `id` | UUID interno do sistema |
| `car_code` | Identificador do CAR |
| `area_hectares` | Área da propriedade |
| `geometry` | Geometria em GeoJSON |
| `status` | Estado do processamento (`created`, `processing`, `analyzed`, `error`) |
| `created_at` | Data de criação |
| `updated_at` | Data de atualização |

---

## CAR Provider

Responsável pela integração com a API externa do CAR.

### Endpoint externo

```
https://consulta.car.gov.br/api/totalizer/getDeatilsByIdentifier/{car_code}
```

### CarProvider (Real)

**Responsabilidades:**

- Realizar requisições HTTP para API do CAR
- Retornar dados brutos
- Tratar falhas de rede e HTTP
- Validar resposta mínima

**Regras:**

- Retorna `None` em caso de 404
- Retorna `None` se resposta for vazia
- Lança erro para falhas HTTP inesperadas

### MockCarProvider

Responsável por simular a API real durante desenvolvimento.

**Uso:**

```
CAR_USE_MOCK=true
```

Retorna estrutura idêntica ao provider real.

---

## CarService

Responsável por orquestrar o fluxo de obtenção e transformação dos dados do CAR.

### Fluxo interno

1. **Cache Layer** — Verifica se o farm já está armazenado. Se existir, retorna imediatamente.
2. **Provider Layer** — Consulta `CarProvider` (real ou mock) e obtém dados brutos.
3. **Adapter Layer** — `normalize_car(raw_data)`: normaliza estrutura externa, valida campos obrigatórios e padroniza geometria.
4. **Domain Layer** — `Farm.model_validate()`: converte dados normalizados em entidade interna e aplica validações do modelo.
5. **Cache Write** — Armazena resultado no cache. TTL padrão: `86400` segundos.

---

## Adapter Layer (`normalize_car`)

Responsável por:

- Validar estrutura da resposta externa
- Padronizar formato de dados
- Garantir consistência do domínio interno
- Remover ou corrigir inconsistências

---

## Geometria (GeoJSON)

Todas as geometrias seguem o padrão GeoJSON.

### Formato

```json
{
  "type": "Polygon",
  "coordinates": [
    [
      [longitude, latitude],
      [longitude, latitude]
    ]
  ]
}
```

**Sistema de coordenadas:** `EPSG:4326` (WGS84)

---

## Cache Layer

| Configuração | Valor |
|---|---|
| Key | `farm:{car_code}` |
| TTL | `86400` segundos |
| Conteúdo | Objeto `Farm` serializado |

---

## Endpoints

### Debug

#### `GET /debug/car-mock/{car_code}`

Retorna dados simulados do CAR.

#### `GET /debug/car-real/{car_code}`

Consulta diretamente a API real do CAR sem cache e sem processamento.

### Principal

#### `GET /farms/{car_code}`

Fluxo completo:

```
Request → Cache → Provider → Adapter → Model → Response
```

**Resposta:**

```json
{
  "id": "uuid",
  "car_code": "MT123456",
  "area_hectares": 1200.5,
  "geometry": {},
  "status": "created",
  "created_at": "timestamp",
  "updated_at": "timestamp"
}
```

---

## Arquitetura de Pastas

```
/api
  /services
  /providers
  /adapters
  /models
  /cache
```

---

## Próximos Módulos

| Módulo | Responsabilidade |
|---|---|
| **Zone Generator** | Subdividir a geometria da fazenda em zonas operacionais |
| **Sentinel Integration** | Aquisição de imagens de satélite |
| **Raster Processing Engine** | Cálculo de índices como NDVI e NDWI |
| **Risk Engine** | Cálculo de score operacional e priorização de áreas |