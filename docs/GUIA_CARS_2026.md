[← Volver al recorrido](https://juliopez.github.io/CARS/) · [Metodología CARS](https://juliopez.github.io/CARS/#comenzar) · [Recursos complementarios](https://juliopez.github.io/CARS/#recursos)

---

# CARS en 2026 — guía metodológica actualizada

**Autor de la metodología y material original:** Dr. Julio López-Núñez.  
**Actualización pedagógica:** octubre de 2026.  
**Objeto:** actualizar las prácticas de uso de IA generativa sin reemplazar la identidad histórica de CARS.

## 1. Qué es CARS

CARS organiza una instrucción en cuatro componentes:

| Elemento | Pregunta útil | Información que aporta |
|---|---|---|
| **C — Contexto** | ¿En qué situación y con qué antecedentes se trabaja? | Destinatarios, datos pertinentes, condiciones, fuentes autorizadas |
| **A — Acción** | ¿Qué resultado se necesita? | Tarea, propósito, criterios de éxito, límites |
| **R — Rol** | ¿Qué perspectiva funcional es útil? | Especialidad o tipo de asistencia; **no** reemplaza conocimientos ni evidencia |
| **S — Salida** | ¿Cómo se entregará el resultado? | Estructura, extensión, formato, destinatario y aspectos que deben explicitarse |

CARS es una **plantilla didáctica flexible**, no una sintaxis que el modelo obligatoriamente exija. En tareas simples suele bastar una instrucción directa. La estructura aporta más valor cuando hay ambigüedad, restricciones, audiencias o entregables definidos. El orden de sus elementos puede variar.

## 2. Qué cambió respecto de 2023

La mayor capacidad de los modelos actuales hace menos útil convertir cada interacción en un prompt extenso y ritualizado. Las orientaciones recientes de proveedores priorizan **claridad del objetivo, contexto pertinente, restricciones y criterios de éxito**; asimismo recomiendan **probar los resultados** antes de adoptar cambios para tareas repetidas.

Prácticas actualizadas:

1. **Objetivo antes que fórmula:** comenzar por el trabajo que se necesita resolver y el criterio para saber si está bien hecho.
2. **Contexto suficiente, no máximo:** añadir información relevante y delimitada. Más texto no garantiza una respuesta mejor.
3. **Rol opcional:** usarlo cuando ayuda a fijar perspectiva, nivel de especialización o audiencia. No supone que el modelo sea un profesional acreditado.
4. **Salida verificable:** definir formato, alcance y señales de incertidumbre. Cuando se requiere integridad de datos, preferir esquemas validados en la aplicación a simples instrucciones textuales.
5. **Fuentes y trazabilidad:** especificar qué documentos o datos pueden utilizarse; pedir que se distingan hechos, inferencias y asuntos por comprobar. Solicitar citas no garantiza que sean reales.
6. **Iteración con pruebas:** comparar el resultado con una rúbrica o conjunto de casos representativos, no solo con impresiones de fluidez.
7. **Privacidad y seguridad:** anonimizar casos y evitar ingresar datos personales, comerciales o institucionales sin autorización; usar supervisión humana antes de tomar decisiones o enviar comunicaciones.
8. **Multimodalidad y herramientas:** un prompt puede combinar texto, imágenes, audio, documentos o herramientas cuando la plataforma lo permite. El acceso efectivo a fuentes externas depende de las funciones habilitadas; pedir una búsqueda no demuestra que se haya efectuado.
9. **Razonamiento:** no tratar «piensa paso a paso» como garantía universal. En modelos de razonamiento recientes suele ser preferible describir claramente meta, restricciones y evidencia exigida.
10. **Agentes y automatizaciones:** distinguir la respuesta sugerida de una acción ejecutada; definir autorizaciones, alcance, criterios de parada y revisión antes de operaciones con efectos externos.

## 3. Plantilla CARS 2026

### C — Contexto
- Problema y destinatario.
- Datos o documentos disponibles; procedencia y fecha.
- Límites de confidencialidad y alcance.
- Antecedentes que faltan.

### A — Acción
- Tarea concreta y propósito.
- Criterios observables de éxito.
- Restricciones y cuestiones fuera de alcance.

### R — Rol (si agrega valor)
- Perspectiva profesional o funcional.
- Tono y nivel técnico para el destinatario.
- Aclaración de que la salida requiere revisión humana cuando corresponda.

### S — Salida
- Formato, secciones, extensión y destinatario.
- Distinción de hechos, supuestos y recomendaciones.
- Fuentes verificables y dudas por resolver.
- Siguiente acción propuesta, **sin realizarla** salvo autorización explícita y herramienta disponible.

### Comprobación posterior (no es una quinta letra)

**Evaluar → corregir → volver a probar.** La validación es una actividad externa a la estructura CARS. No es obligatorio alargar el prompt inicial: también se puede revisar el resultado y hacer una solicitud de mejora.

## 4. Ejemplo genérico

**C:** Un equipo administrativo debe resumir tres documentos internos autorizados para una reunión. Solo se proporcionan extractos de prueba anonimizados.  
**A:** Identifica acuerdos, responsables y plazos expresamente presentes. No inventes elementos ausentes.  
**R:** Actúa como asistente de sistematización, con lenguaje profesional y conciso.  
**S:** Entrega una tabla de acuerdo, responsable, fecha, fragmento de respaldo; después incluye una sección «Información por confirmar».

**Evaluación:** cotejar cada fila con el texto original. Si la fecha no figura, marcar «no indicada»; no calcularla.

## 5. Cuándo no usar la estructura completa

- Consultas factuales breves sin condicionantes.
- Reformulaciones sencillas donde el texto ya trae contexto y formato.
- Conversaciones exploratorias en que conviene aclarar la necesidad antes de fijar un entregable.
- Solicitudes técnicas donde una especificación o esquema formal ya fija inequívocamente el resultado.

## 6. Riesgos y límites a enseñar

- Una respuesta plausible puede contener datos falsos, fuentes inexistentes u omisiones importantes.
- El resultado puede variar entre ejecuciones, modelos y versiones.
- Información incluida en documentos externos puede contener instrucciones maliciosas; tratarla como **datos**, no como instrucciones superiores.
- Una respuesta estructurada no equivale a validación de hechos.
- La ejecución local no implica ausencia de riesgos ni reemplaza la gobernanza de datos.
- Para decisiones financieras, legales, académicas o institucionales relevantes se requiere verificación humana competente.

## 7. Fuentes consultadas (verificadas en octubre de 2026)

- OpenAI, *Prompt engineering*: https://developers.openai.com/api/docs/guides/prompt-engineering
- OpenAI, *Reasoning best practices*: https://developers.openai.com/api/docs/guides/reasoning-best-practices
- OpenAI, *A model guide for the GPT-6 family* (2026-10-02): https://openai.com/index/practical-guide-building-gpt-6/
- OpenAI Help Center, *Prompt engineering best practices for ChatGPT*: https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices-for-chatgpt
- Anthropic, *Prompting best practices*: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/prompt-templates-and-variables

Estas referencias explican principios generales. Las funciones específicas, precios, ventanas de contexto y disponibilidad de herramientas cambian y deben verificarse antes de impartir cada taller.
