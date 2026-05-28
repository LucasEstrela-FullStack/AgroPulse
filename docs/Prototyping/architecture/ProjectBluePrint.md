# AgroPulse — Inteligência Operacional Agrícola com Observação da Terra

## Objetivo

Transformar imagens de satélite e dados territoriais do CAR/SICAR em inteligência operacional agrícola para:

- Detectar degradação precocemente
- Priorizar áreas críticas
- Otimizar distribuição de recursos
- Reduzir desperdício operacional
- Melhorar rendimento agrícola em larga escala

---

# Problema

Grandes produtores rurais operam em milhares de hectares, tornando inviável:

- inspeção manual constante
- monitoramento em tempo real
- alocação eficiente de equipes
- priorização rápida de áreas críticas

Pequenas ineficiências geram grandes perdas financeiras e ambientais.

---

# Solução

O sistema integra:

- CAR/SICAR
- imagens Sentinel
- processamento geoespacial
- análise temporal
- motor de risco operacional

Para transformar dados satelitais em decisões operacionais automáticas.

---

# Fluxo Macro

```text
[CAR/SICAR]
      ↓
[Importa geometria da fazenda]
      ↓
[Baixa imagens Sentinel]
      ↓
[Processamento geoespacial]
      ↓
[NDVI + Umidade + Temperatura]
      ↓
[Motor de risco operacional]
      ↓
[Heatmap inteligente]
      ↓
[Alertas e recomendações]
```

---

# Pipeline do Sistema

# 1. Entrada Territorial

## Inputs

O usuário pode:

- informar código CAR
- enviar GeoJSON
- enviar Shapefile

---

## Regras de Negócio

### RN-001
Validar:
- geometria válida
- CRS compatível
- área mínima operacional

### RN-002
Toda geometria deve ser convertida para:
- EPSG:4326
ou
- EPSG:4674

---

# 2. Delimitação Operacional

A fazenda é automaticamente dividida em:
- grids
- setores
- zonas operacionais

---

## Regras de Negócio

### RN-003
Cada zona deve possuir:
- identificador único
- área total
- centroid
- score operacional

### RN-004
Áreas muito grandes devem ser subdivididas automaticamente.

---

# 3. Coleta de Dados Sentinel

## Sentinel-2
Responsável por análise vegetativa.

Bandas:
- B04 → RED
- B08 → NIR

---

## Sentinel-1
Responsável por:
- umidade
- radar
- solo

---

## Sentinel-3
Responsável por:
- temperatura superficial

---

## Regras de Negócio

### RN-005
Imagens com cobertura de nuvem acima de 20% devem ser descartadas.

### RN-006
O sistema deve priorizar imagens mais recentes.

---

# 4. Pré-processamento Raster

## Etapas

### Clipping
Recorte da imagem para área da fazenda.

### Masking
Remoção de pixels inválidos.

### Normalização
Padronização das bandas.

---

## Regras de Negócio

### RN-007
Pixels sem informação devem ser ignorados.

### RN-008
Outliers devem ser tratados automaticamente.

---

# 5. Índices Agrícolas

# NDVI

```math
NDVI = (NIR - RED) / (NIR + RED)
```

Responsável por medir:
- vigor vegetativo
- saúde da vegetação
- biomassa

---

## Classificação NDVI

### RN-009

- NDVI < 0.2 → crítico
- 0.2 ≤ NDVI < 0.4 → atenção
- NDVI ≥ 0.4 → saudável

---

# NDWI

```math
NDWI = (GREEN - NIR) / (GREEN + NIR)
```

Responsável por:
- detecção hídrica
- estresse por seca

---

# 6. Motor de Risco Operacional

## Objetivo

Determinar:
- prioridade operacional
- risco agrícola
- urgência de intervenção

---

# Fórmula de Risco

```math
R = 0.4T + 0.3U + 0.3D
```

Onde:
- T → estresse térmico
- U → baixa umidade
- D → degradação NDVI

---

## Regras de Negócio

### RN-010
Toda zona recebe score:
- 0 → 100

### RN-011
Classificação:
- 0–30 → saudável
- 31–60 → monitoramento
- 61–100 → crítico

---

# 7. Comparação Temporal

## Objetivo

Detectar:
- degradação contínua
- melhora operacional
- anomalias vegetativas

---

## Regras de Negócio

### RN-012
O sistema deve armazenar snapshots históricos.

### RN-013
Queda contínua por múltiplos períodos deve gerar alerta automático.

---

# 8. Heatmap Inteligente

## Objetivo

Gerar mapa operacional visual:
- verde → saudável
- amarelo → atenção
- vermelho → crítico

---

## Regras de Negócio

### RN-014
Áreas críticas devem exibir:
- destaque visual
- percentual afetado
- prioridade operacional

---

# 9. Sistema de Alertas

## Alertas possíveis

- estresse hídrico
- calor excessivo
- degradação vegetativa
- anomalia temporal
- risco operacional elevado

---

## Regras de Negócio

### RN-015
Alertas só devem ser gerados após validação temporal mínima para evitar falso positivo.

---

# 10. Recomendações Automáticas

## Exemplos

- priorizar irrigação
- enviar drone para inspeção
- reforçar monitoramento
- revisar distribuição de insumos

---

## Regras de Negócio

### RN-016
Recomendações devem considerar:
- severidade
- tamanho da área
- histórico temporal
- tendência operacional

---

# 11. Dashboard Executivo

## Métricas

- hectares críticos
- percentual saudável
- evolução temporal
- zonas prioritárias
- score médio operacional

---

## Regras de Negócio

### RN-017
O dashboard deve apresentar:
- impacto operacional
- tendência temporal
- priorização espacial

---

# Arquitetura Técnica

# Backend

- FastAPI

---

# Processamento Geoespacial

- Rasterio
- GeoPandas
- Shapely

---

# Processamento Numérico

- NumPy

---

# Machine Learning

- scikit-learn
# AgroPulse — Inteligência Operacional Agrícola com Observação da Terra

## Objetivo

Transformar imagens de satélite e dados territoriais do CAR/SICAR em inteligência operacional agrícola para:

- Detectar degradação precocemente
- Priorizar áreas críticas
- Otimizar distribuição de recursos
- Reduzir desperdício operacional
- Melhorar rendimento agrícola em larga escala

---

# Problema

Grandes produtores rurais operam em milhares de hectares, tornando inviável:

- inspeção manual constante
- monitoramento em tempo real
- alocação eficiente de equipes
- priorização rápida de áreas críticas

Pequenas ineficiências geram grandes perdas financeiras e ambientais.

---

# Solução

O sistema integra:

- CAR/SICAR
- imagens Sentinel
- processamento geoespacial
- análise temporal
- motor de risco operacional

Para transformar dados satelitais em decisões operacionais automáticas.

---

# Fluxo Macro

```text
[CAR/SICAR]
      ↓
[Importa geometria da fazenda]
      ↓
[Baixa imagens Sentinel]
      ↓
[Processamento geoespacial]
      ↓
[NDVI + Umidade + Temperatura]
      ↓
[Motor de risco operacional]
      ↓
[Heatmap inteligente]
      ↓
[Alertas e recomendações]
```

---

# Pipeline do Sistema

# 1. Entrada Territorial

## Inputs

O usuário pode:

- informar código CAR
- enviar GeoJSON
- enviar Shapefile

---

## Regras de Negócio

### RN-001
Validar:
- geometria válida
- CRS compatível
- área mínima operacional

### RN-002
Toda geometria deve ser convertida para:
- EPSG:4326
ou
- EPSG:4674

---

# 2. Delimitação Operacional

A fazenda é automaticamente dividida em:
- grids
- setores
- zonas operacionais

---

## Regras de Negócio

### RN-003
Cada zona deve possuir:
- identificador único
- área total
- centroid
- score operacional

### RN-004
Áreas muito grandes devem ser subdivididas automaticamente.

---

# 3. Coleta de Dados Sentinel

## Sentinel-2
Responsável por análise vegetativa.

Bandas:
- B04 → RED
- B08 → NIR

---

## Sentinel-1
Responsável por:
- umidade
- radar
- solo

---

## Sentinel-3
Responsável por:
- temperatura superficial

---

## Regras de Negócio

### RN-005
Imagens com cobertura de nuvem acima de 20% devem ser descartadas.

### RN-006
O sistema deve priorizar imagens mais recentes.

---

# 4. Pré-processamento Raster

## Etapas 

### Clipping
Recorte da imagem para área da fazenda.

### Masking
Remoção de pixels inválidos.

### Normalização
Padronização das bandas.

---

## Regras de Negócio

### RN-007
Pixels sem informação devem ser ignorados.

### RN-008
Outliers devem ser tratados automaticamente.

---

# 5. Índices Agrícolas

# NDVI

```math
NDVI = (NIR - RED) / (NIR + RED)
```

Responsável por medir:
- vigor vegetativo
- saúde da vegetação
- biomassa

---

## Classificação NDVI

### RN-009

- NDVI < 0.2 → crítico
- 0.2 ≤ NDVI < 0.4 → atenção
- NDVI ≥ 0.4 → saudável

---

# NDWI

```math
NDWI = (GREEN - NIR) / (GREEN + NIR)
```

Responsável por:
- detecção hídrica
- estresse por seca

---

# 6. Motor de Risco Operacional

## Objetivo

Determinar:
- prioridade operacional
- risco agrícola
- urgência de intervenção

---

# Fórmula de Risco

```math
R = 0.4T + 0.3U + 0.3D
```

Onde:
- T → estresse térmico
- U → baixa umidade
- D → degradação NDVI

---

## Regras de Negócio

### RN-010
Toda zona recebe score:
- 0 → 100

### RN-011
Classificação:
- 0–30 → saudável
- 31–60 → monitoramento
- 61–100 → crítico

---

# 7. Comparação Temporal

## Objetivo

Detectar:
- degradação contínua
- melhora operacional
- anomalias vegetativas

---

## Regras de Negócio

### RN-012
O sistema deve armazenar snapshots históricos.

### RN-013
Queda contínua por múltiplos períodos deve gerar alerta automático.

---

# 8. Heatmap Inteligente

## Objetivo

Gerar mapa operacional visual:
- verde → saudável
- amarelo → atenção
- vermelho → crítico

---

## Regras de Negócio

### RN-014
Áreas críticas devem exibir:
- destaque visual
- percentual afetado
- prioridade operacional

---

# 9. Sistema de Alertas

## Alertas possíveis

- estresse hídrico
- calor excessivo
- degradação vegetativa
- anomalia temporal
- risco operacional elevado

---

## Regras de Negócio

### RN-015
Alertas só devem ser gerados após validação temporal mínima para evitar falso positivo.

---

# 10. Recomendações Automáticas

## Exemplos

- priorizar irrigação
- enviar drone para inspeção
- reforçar monitoramento
- revisar distribuição de insumos

---

## Regras de Negócio

### RN-016
Recomendações devem considerar:
- severidade
- tamanho da área
- histórico temporal
- tendência operacional

---

# 11. Dashboard Executivo

## Métricas

- hectares críticos
- percentual saudável
- evolução temporal
- zonas prioritárias
- score médio operacional

---

## Regras de Negócio

### RN-017
O dashboard deve apresentar:
- impacto operacional
- tendência temporal
- priorização espacial

---

# Arquitetura Técnica

# Backend

- FastAPI

---

# Processamento Geoespacial

- Rasterio
- GeoPandas
- Shapely

---

# Processamento Numérico

- NumPy

---

# Machine Learning

- scikit-learn

---

# Banco Geoespacial

- PostgreSQL + PostGIS

---

# Frontend

- Leaflet
- Mapbox
- TailwindCSS

---

# Estrutura de Pastas

```text
/backend
    /api
    /processing
    /sentinel
    /risk_engine
    /alerts

/frontend

/data
/cache

/database
```

---

# MVP

## Funcionalidades Obrigatórias

- importação via CAR
- processamento Sentinel
- cálculo NDVI
- heatmap operacional
- score de risco
- alertas automáticos

---

# Funcionalidades Extras

- análise temporal
- previsão agrícola
- detecção de anomalias
- IA para recomendação operacional
- clusterização agrícola

---

# Diferencial Competitivo

O sistema transforma observação da Terra em:
- inteligência operacional
- otimização agrícola
- redução de desperdício
- monitoramento territorial automatizado

Com foco em:
- escalabilidade
- tomada de decisão
- produtividade agrícola
- gestão espacial inteligente
---

# Banco Geoespacial

- PostgreSQL + PostGIS

---

# Frontend

- Leaflet
- Mapbox
- TailwindCSS

---

# Estrutura de Pastas

```text
/backend
    /api
    /processing
    /sentinel
    /risk_engine
    /alerts

/frontend

/data
/cache

/database
```

---

# MVP

## Funcionalidades Obrigatórias

- importação via CAR
- processamento Sentinel
- cálculo NDVI
- heatmap operacional
- score de risco
- alertas automáticos

---

# Funcionalidades Extras

- análise temporal
- previsão agrícola
- detecção de anomalias
- IA para recomendação operacional
- clusterização agrícola

---

# Diferencial Competitivo

O sistema transforma observação da Terra em:
- inteligência operacional
- otimização agrícola
- redução de desperdício
- monitoramento territorial automatizado

Com foco em:
- escalabilidade
- tomada de decisão
- produtividade agrícola
- gestão espacial inteligente