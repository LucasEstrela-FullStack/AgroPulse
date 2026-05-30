# AgroPulse — Documentação Técnica Estruturada

O AgroPulse é uma plataforma de inteligência agrícola voltada para segurança alimentar e otimização de grandes produtores rurais, construída para o CopernicusLAC. O sistema processa dados de Observação da Terra (Sentinel) cruzados com Inteligência Artificial para gerar insights operacionais em tempo real.

---

## 1. Visão Técnica e Arquitetural 



---

## 2. Regras de Negócio (RN)

**RN-001 | Validação Topológica**
O polígono desenhado pelo usuário no frontend deve obrigatoriamente formar uma área fechada válida, sendo rejeitados desenhos que contenham auto-intersecções ou linhas abertas.

**RN-002 | Limite de Área Operacional**
O sistema possui um teto máximo de área coberta por requisição para evitar sobrecarga de processamento na extração das matrizes raster.

**RN-003 | Filtro de Ruído Espacial**
Qualquer imagem óptica cujos metadados apontem para uma cobertura de nuvens acima da tolerância permitida é descartada antes de entrar no pipeline de processamento.

**RN-004 | Motor de Risco**
A nota de risco operacional é calculada por uma equação agronômica ponderada, que considera o estresse térmico, a falta de umidade no solo e a queda na saúde vegetativa.

**RN-005 | Categorização Crítica**
O risco é dividido nas faixas saudável, monitoramento e crítico. Atingir a faixa crítica engatilha automaticamente eventos de notificação externa.

---

## 3. Requisitos Funcionais e Não-Funcionais

### Requisitos Funcionais (RF)

**RF-001**
O sistema deve integrar ferramentas de desenho vetorial no mapa para delimitação interativa da fazenda.

**RF-002**
O sistema deve converter e validar as coordenadas geográficas desenhadas para padronização no banco espacial.

**RF-003**
O sistema deve fatiar o polígono principal em zonas operacionais menores e calcular seus respectivos centróides.

**RF-004**
O sistema deve realizar chamadas assíncronas ao Copernicus Hub para buscar imagens do Sentinel-1, Sentinel-2 e Sentinel-3.

**RF-005**
O sistema deve recortar os dados matriciais do satélite respeitando o limite exato do desenho da propriedade.

**RF-006**
O sistema deve calcular isoladamente índices de vegetação, água e temperatura.

**RF-007**
O sistema deve consolidar os índices e aplicar a pontuação de risco para gerar mapas de calor georreferenciados.

**RF-008**
O sistema deve disparar notificações em caso de risco crítico detectado.

### Requisitos Não-Funcionais (RNF)

**RNF-001**
O tempo de validação topológica e reprojeção não deve exceder 5 segundos.

**RNF-002**
O sistema deve descartar automaticamente pacotes ópticos com alto grau de obstrução por nuvens.

**RNF-003**
O processamento das matrizes raster deve utilizar bibliotecas otimizadas em C para baixo consumo de memória RAM.

**RNF-004**
O dashboard web deve utilizar tecnologias de renderização via GPU no navegador para suportar a visualização fluida de sobreposições sobre o mapa satelital.

---

## 4. Especificação dos Casos de Uso (UC)

### Gestão Territorial

**UC-01 | Delimitar Área Agrícola**
O usuário interage com a ferramenta de desenho de mapas no frontend. Ao fechar o polígono, o array de coordenadas espaciais é enviado via API. O backend recebe, formata e aciona a camada de validação.

**UC-02 | Validar Geometria**
O backend utiliza bibliotecas espaciais para aplicar as regras topológicas. Se aprovado, o dado é normalizado e persistido no banco de dados espacial.

**UC-03 | Delimitar Zonas Operacionais**
O sistema subdivide a área aprovada em células menores para análise de precisão.

### Pipeline de Dados

**UC-04 | Buscar Imagens Sentinel**
Um worker em background consome a fila de áreas delimitadas, constrói a caixa de contorno da fazenda e baixa os dados brutos das APIs externas.

**UC-05 | Filtrar Cobertura de Nuvens**
O backend lê os metadados e aplica o filtro de ruído espacial, descartando arquivos bloqueados por nuvens.

### Processamento

**UC-06 | Executar Clipping e Masking**
O sistema recorta cirurgicamente a imagem matriz usando o formato do polígono vetorial do usuário.

**UC-07 | Calcular Índices Agrícolas**
Aplicação de operações algébricas nas matrizes satelitais para extrair os componentes de umidade, calor e saúde vegetativa.

### Inteligência Artificial

**UC-08 | Gerar Score de Risco**
O backend cruza as matrizes, normaliza os valores e roda o algoritmo do motor de risco.

**UC-09 | Detectar Anomalias**
Comparação da pontuação de risco atual com os dados históricos da propriedade para identificar degradação.

**UC-10 | Gerar Mapas de Calor**
A matriz de risco é traduzida para uma imagem visual com cores de severidade.

### Ações e Visualização

**UC-11 | Emitir Alerta de Emergência**
O backend publica eventos na mensageria caso o teto crítico de risco seja atingido em uma zona operacional.

**UC-13 | Renderizar Dashboard**
O cliente web carrega o mapa base e injeta as camadas de calor processadas, atualizando os indicadores de saúde da lavoura.