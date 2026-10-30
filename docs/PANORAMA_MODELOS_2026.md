# Panorama de modelos y servicios de IA — octubre de 2026

**Material didáctico CARS 2026 · revisión: 30 de octubre de 2026.**

> **Aviso de vigencia:** la disponibilidad de modelos, cuotas y suscripciones cambia con frecuencia. Esta ficha distingue hechos verificados, ejemplos históricos útiles y orientaciones pedagógicas. Consultar los enlaces oficiales antes de impartir el taller. No confundir el producto de chat, la API y un modelo descargado.

## 1. Tres formas de acceso que NO son equivalentes

| Modalidad | Qué paga el usuario | Ejemplo | Precaución |
|---|---|---|---|
| **Chat / aplicación** | Plan gratis o suscripción, normalmente con cuotas | ChatGPT, Claude, Gemini | Pagar no significa acceso ilimitado a todo modelo/herramienta |
| **API** | Consumo, normalmente tokens de entrada/salida, imágenes, audio o vídeo | Gemini Developer API | Una suscripción de chat **no incluye necesariamente créditos API** |
| **Modelo local** | Hardware, energía, almacenamiento, administración; a veces licencia | Llama o Qwen mediante Ollama | Descarga gratuita ≠ ejecución sin costo; comprobar la licencia |

### Productos: gratis frente a pago (no es un ranking de calidad)

| Servicio | Acceso gratuito | Acceso de pago | Fuente oficial |
|---|---|---|---|
| **ChatGPT / OpenAI** | Chat de texto con herramientas sujetas a cuotas independientes; modelo predeterminado y políticas variables | Plus, Pro y planes organizacionales: mayor capacidad y selección según suscripción | [FAQ Free](https://help.openai.com/en/articles/9275245-chatgpt-free-tier-faq) · [modelos y planes](https://help.openai.com/es-419/articles/20001354-gpt-6-and-other-models-in-chatgpt) |
| **Claude / Anthropic** | Free, uso limitado | Pro y Max, con niveles de capacidad distintos | [Planes Claude](https://support.anthropic.com/en/articles/11049762-choosing-a-claude-ai-plan) |
| **Gemini / Google** | Aplicación para consumidores y AI Studio/API con condiciones distintas | Suscripciones Google AI y API de pago con facturación propia | [Planes Google AI](https://one.google.com/about/google-ai-plans/) · [API precios](https://ai.google.dev/gemini-api/docs/pricing) |
| **Mistral** | Modelos de pesos abiertos y opciones de acceso según servicio/licencia | API y servicios comerciales según producto | [Catálogo y licencias por modelo](https://docs.mistral.ai/models) |
| **Llama / Meta (local)** | Pesos publicados bajo licencia Llama, sujetos a condiciones | Infraestructura propia o proveedor de alojamiento | [Llama 3.1 en Ollama](https://ollama.com/library/llama3.1) |
| **Qwen (local)** | Variantes disponibles para descarga; revisar licencia específica | Inferencia alojada/API según proveedor | [Qwen 3 en Ollama](https://ollama.com/library/qwen3/tags) |

**Ejemplo fechado:** al 30-10-2026, OpenAI documenta GPT-5.6 Luna para Free/Go y despliegue progresivo de GPT-6 para planes de pago elegibles. Anthropic enumera Free, Pro y Max. Estas asignaciones pueden cambiar y deben verificarse en clase.

**Importante:** las cuotas de un plan gratuito pueden variar por hora, herramienta, región, demanda y política de uso. No publicar una cifra como permanente si no figura de forma estable en la fuente oficial.

## 2. Orientación por tarea: elegir primero la capacidad

| Necesidad | Familia/categoría ilustrativa | Qué comprobar al elegir |
|---|---|---|
| Escritura, resumen y conversación | GPT, Claude, Gemini, Mistral, Llama, Qwen | Idioma, fidelidad al texto, longitud, citas comprobables |
| Programación y revisión de código | Modelos generalistas fuertes en código o variantes especializadas | Ejecución de pruebas, compatibilidad, repositorio, seguridad |
| Análisis de datos | Modelo **más herramienta de cálculo** (Python, SQL, hojas) | Operaciones efectivamente ejecutadas; reproducción y resultados |
| Investigación documental | Modelo con acceso autorizado a archivos/búsqueda | Fecha, calidad de fuentes, citas verificables |
| Comprensión de imágenes y documentos | Modelos multimodales con visión | Si aceptan **entrada visual**: no confundir con generación |
| Generación y edición de imágenes | Herramientas específicas de imagen | Derechos de uso, costo por generación, calidad y control |
| Audio: transcripción / voz | Modelos o funciones especializadas de audio | Idiomas, diarización, permisos de grabación y privacidad |
| Generación de video | Servicios especializados de video | Duración, resolución, derechos, créditos y disponibilidad regional |
| Automatización/agentes | Modelo con herramientas y orquestación | Permisos, registro de acciones, confirmación humana, reversibilidad |

**Matiz:** «este modelo sirve para código» expresa una orientación, no una garantía de que supere a todos los demás. Para un caso institucional comparar resultados con una rúbrica y datos de prueba.

**Distinciones críticas:**
- **Leer imágenes** ≠ **crear imágenes**.
- **Comprender vídeo** ≠ **generar vídeo**.
- **Responder sobre una tabla** ≠ **ejecutar análisis estadístico**.
- **Proponer un correo** ≠ **enviarlo**.
- Un producto puede integrar varios modelos y herramientas: sus capacidades no corresponden necesariamente a un único modelo subyacente.

## 3. Qué significan 3B, 8B, 70B y 405B

**B = billion = mil millones de parámetros.** Un modelo «8B» tiene aproximadamente **8.000 millones** de parámetros (valores numéricos aprendidos durante el entrenamiento). No significa ocho mil millones de documentos, tokens, usuarios ni gigabytes.

| Modelo de ejemplo | Parámetros | Tamaño publicado de un archivo/version de Ollama | Fuente |
|---|---:|---:|---|
| Qwen 3 4B | ~4.000 millones | ~2,5 GB | [Qwen3 tags](https://ollama.com/library/qwen3/tags) |
| Qwen 3 8B | ~8.000 millones | ~5,2 GB | [Qwen3 tags](https://ollama.com/library/qwen3/tags) |
| Llama 3.1 8B, Q4_K_M | ~8.000 millones | ~4,9 GB | [Llama3.1 tags](https://ollama.com/library/llama3.1/tags) |
| Llama 3.1 70B | ~70.000 millones | ~43 GB | [Llama3.1](https://ollama.com/library/llama3.1) |
| Llama 3.1 405B | ~405.000 millones | ~243 GB | [Llama3.1](https://ollama.com/library/llama3.1) |

Los **tamaños de archivo son ejemplos específicos del registro**, no necesidades exactas de RAM/VRAM. Un mismo modelo puede ocupar distinto espacio según la cuantización. No se deben atribuir cifras de parámetros a GPT, Claude o Gemini si el proveedor no las publica.

### Cómo estimar memoria para los pesos

Estimación idealizada, **sin sobrecargas**:

```
memoria mínima para pesos (bytes) ≈ parámetros × bits_por_parámetro / 8
Modelo 8B en FP16  ≈ 8.000 millones × 16/8 = 16 GB
Modelo 8B en INT8  ≈ 8.000 millones ×  8/8 =  8 GB
Modelo 8B en 4 bits ≈ 8.000 millones × 4/8 =  4 GB
```

En la práctica, además de los pesos, hacen falta memoria para ejecución, **KV cache**, contexto, buffers y otros componentes. En GPU, la VRAM disponible, cuantización, longitud de contexto y partición CPU/GPU afectan el rendimiento. Un archivo de 4,9 GB **no garantiza** funcionamiento con solo 4,9 GB de RAM.

### Otros conceptos frecuentes

- **Tokens:** unidades en que se procesa texto (partes de palabras, palabras, signos o fragmentos); **no equivalen siempre a palabras**.
- **Ventana de contexto, 32K/128K/1M:** cantidad de tokens que el modelo puede considerar dentro de una solicitud, sujeto a detalles de producto; **no es** cantidad de parámetros ni tamaño en disco.
- **Cuantización Q4 / Q8:** representación de pesos con menos bits para reducir memoria, con posibles cambios en precisión/calidad y velocidad.
- **FP16 / BF16:** formatos de precisión de 16 bits.
- **MoE (mezcla de expertos):** arquitectura donde solo parte de los parámetros puede activarse para cada token; distinguir **parámetros totales** de **parámetros activos**.
- **Razonamiento:** comportamiento/capacidad orientada a tareas complejas; no es sinónimo de mayor número de parámetros.

## 4. Actividad formativa CARS

**Caso A: seleccionar herramienta.** Un profesional necesita resumir actas ficticias de atención y extraer tareas. Debe comparar una opción gratuita, una suscripción y un modelo local, registrando: acceso efectivo, calidad, privacidad, tiempo, límites y costo operativo.

**Caso B: interpretar tamaño.** ¿Cuál tiene más parámetros, 8B o 70B? ¿Un Llama 8B en Q4 ocupa necesariamente 8 GB? ¿Un modelo grande produce siempre respuestas más fiables? Explicar con ejemplos y evidencia, evitando esa última afirmación universal.

**Caso C: decidir modalidad.** Se requiere procesar información empresarial sensible. Antes de seleccionar un servicio, confirmar clasificación de datos, autorización, políticas institucionales, retención, licencia, seguridad y supervisión profesional.

## 5. Reglas de mantenimiento del material

1. Revisar acceso Free/Pro/Max y disponibilidad por país inmediatamente antes de cada taller.
2. Mantener **separadas** suscripciones de chat, API y descarga local.
3. Citar la **ficha de la versión concreta** al mencionar tamaño, contexto o cuantización.
4. No inferir «mejor modelo» a partir de tamaño, publicidad comercial o una prueba anecdótica.
5. No mezclar la disponibilidad de una herramienta integrada con las modalidades nativas de un modelo.
6. Actualizar primero tablas volátiles; preservar explicaciones estables de parámetros, tokens, cuantización y pruebas.

## Fuentes oficiales de consulta y actualización

- OpenAI: https://help.openai.com/en/articles/9275245-chatgpt-free-tier-faq
- OpenAI: https://help.openai.com/es-419/articles/20001354-gpt-6-and-other-models-in-chatgpt
- Anthropic: https://support.anthropic.com/en/articles/11049762-choosing-a-claude-ai-plan
- Google: https://one.google.com/about/google-ai-plans/
- Google Gemini API: https://ai.google.dev/gemini-api/docs/pricing
- Mistral: https://docs.mistral.ai/models
- Ollama Llama: https://ollama.com/library/llama3.1/tags
- Ollama Qwen: https://ollama.com/library/qwen3/tags
