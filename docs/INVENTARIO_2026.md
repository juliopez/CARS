# Inventario y decisiones editoriales — CARS 2026

**Revisión de arquitectura:** 30 de octubre de 2026.

## Objetivo rector

**Distinguir dos propósitos:** (1) preservar CARS como metodología pedagógica original de 2023 y su actualización 2026; (2) organizar una capacitación aplicada cuyo objetivo inicial es la productividad y calidad de la asesoría del CDN Sercotec Quilicura–Renca. En la capacitación, CARS es un medio transversal, no un fin. El itinerario profesional está documentado en `docs/RUTA_SERCOTEC_2026.md`.

## Recorrido canónico

| Bloque | Teoría | Presentación principal | Simulador | Laboratorio |
|---|---|---|---|---|
| CARS (núcleo) | `docs/GUIA_CARS_2026.md` | `docs/presentacion/index.html` | `docs/simuladores/cars.html` | `docs/laboratorio/index.html` |
| Modelos y servicios | `docs/PANORAMA_MODELOS_2026.md` | `docs/presentaciones/modelos.html` | `docs/simuladores/parametros.html` | `docs/laboratorios/seleccion-modelos.html` |
| Memoria y archivos | `docs/contexto/index.html` y `docs/contexto/archivos.html` | `docs/presentaciones/contexto.html` | `docs/contexto/index.html#simulador` | `docs/contexto/index.html#objetivo` |
| Asistentes en nube | `docs/nube/index.html` | `docs/presentaciones/asistentes.html` | `docs/simuladores/asistentes.html` | `docs/nube/index.html#purpose` |
| Recuperación / RAG avanzado | `docs/contexto/archivos.html` | `docs/presentaciones/rag.html` | `docs/contexto/comparador.html` | `docs/contexto/rag-real/index.html` |

**No imponer a todas las capacitaciones la realización de los cuatro módulos de aplicación.** Elegirlos según objetivos, tiempos, capacidades del grupo y disponibilidad de herramientas.

## Rutas paralelas y duplicación conocida

- `docs/presentacion/modelos.html` y `docs/presentaciones/modelos.html`: dos presentaciones sobre modelos. La segunda se designa **canónica** en la portada. **No borrar la primera** hasta revisión visual y de contenidos.
- `laboratorio/index.html` y `docs/laboratorio/index.html`: dos copias de laboratorio CARS para servir desde repositorio y GitHub Pages. Mantener explícita su función y evitar ediciones divergentes.
- `docs/presentacion/index.html` es la presentación central del método, **no** la presentación general de toda la plataforma.
- Las presentaciones complementarias ya existentes (`presentaciones/contexto.html`, `presentaciones/asistentes.html`, `presentaciones/rag.html`) deben aparecer enlazadas antes de encargar otra presentación.
- Los generadores de traspaso e instrucciones son **laboratorios de preparación**; no afirmar que ejecutan modelos, crean proyectos o verifican su rendimiento por sí solos.
- La guía RAG real describe una práctica a ejecutar; **no hay evidencia registrada de validación de Ollama/Open WebUI en un computador**.

## Criterios de calidad antes de fusionar

1. Enlaces internos y sintaxis JS de **todas** las páginas HTML verificadas por CI.
2. Comprobar manualmente en navegador escritorio y móvil: navegación, presentación, simuladores y formularios.
3. Revisar enlaces a Markdown en GitHub Pages; adaptar su destino si Jekyll transforma las rutas.
4. Comprobar accesibilidad básica: botones, foco de teclado, formularios, contrastes, texto alternativo cuando corresponda.
5. Revisar vigencia de características de servicios gratuitos/de pago y sus fuentes oficiales, especialmente en octubre de 2026.
6. No fusionar con `main` hasta tener constancia de los resultados de estas comprobaciones.

## Estado de publicación

La rama `actualizacion-2026` es fuente de trabajo y la PR #1 está en borrador. Mantener el documento histórico de 2023 y `main` intactos.
