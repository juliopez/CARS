[← Volver al recorrido](https://juliopez.github.io/CARS/) · [Metodología CARS](https://juliopez.github.io/CARS/#comenzar) · [Recursos complementarios](https://juliopez.github.io/CARS/#recursos)

---

# Laboratorio RAG real — Ollama + Open WebUI (CARS 2026)

**Estado:** guía reproducible propuesta, requiere prueba en el equipo del participante. **No confundir** con el [simulador didáctico](../../docs/contexto/comparador.html), que no ejecuta recuperación automática ni modelos.

## Objetivo y criterio de logro

Al finalizar, el participante debe: (1) cargar tres documentos ficticios; (2) hacer una consulta cuya respuesta dependa de los documentos; (3) reconocer la evidencia recuperada; (4) detectar un dato faltante sin inventarlo; y (5) comparar el resultado con una respuesta sin documentos.

## Requisitos

- Equipo capaz de ejecutar Ollama y un modelo pequeño (la RAM/VRAM exigida cambia por modelo, cuantización y contexto).
- Docker, para utilizar Open WebUI siguiendo su documentación oficial, o una instalación existente aprobada.
- Software y acceso a red para descargar imágenes/modelos. Revisar licencias y políticas institucionales antes de instalar.
- Modelos ilustrativos: `qwen3:4b` para generación y `nomic-embed-text` para embeddings. **Comprueba disponibilidad de versiones, etiquetas, compatibilidad e idioma** en las páginas de Ollama antes de descargar.
- Documentos de `datos_ficticios/`; no cargar registros reales de asesoría.

## Fase A — Preparación

1. Instala Ollama siguiendo [ollama.com/download](https://ollama.com/download) y verifica `ollama --version`.
2. Descarga modelos con `ollama pull qwen3:4b` y `ollama pull nomic-embed-text`. Estas etiquetas son ejemplos, no una recomendación universal de rendimiento.
3. Instala Open WebUI según su [guía oficial](https://docs.openwebui.com/getting-started/quick-start/). Si se utiliza Docker, comprobar cuidadosamente la conectividad del contenedor con el servicio Ollama según sistema operativo; una dirección `localhost` dentro del contenedor no siempre apunta al host.
4. Verifica en Open WebUI que el modelo de generación aparece en el selector y puede responder una pregunta sencilla.

**Nota:** estas operaciones descargan software y modelos de Internet. No se realizan desde esta página.

## Fase B — Crear una colección documental

1. Abre la sección de conocimiento/documentos de Open WebUI en la versión instalada.
2. Crea una colección denominada **«Biblioteca ficticia — prueba CARS»**.
3. Sube los tres archivos Markdown en `datos_ficticios/`. Registra versión, fecha y tamaño de cada uno.
4. Configura un modelo de embeddings compatible con Open WebUI, por ejemplo el descargado en la fase A, de acuerdo con [documentación RAG](https://docs.openwebui.com/features/rag/).
5. **Comprueba la indexación** mediante los controles de la versión instalada. No asumas que subir archivos equivale a que ya se han procesado correctamente.
6. En la conversación, incorpora explícitamente la colección de conocimiento según la interfaz vigente. La ubicación de menús y el modo de adjuntar la colección pueden variar.

## Fase C — Tres pruebas obligatorias

### Prueba 1 — Información localizada

**Pregunta:** ¿En cuánto tiempo debe registrarse una asesoría y qué hacer si faltan antecedentes?

**Respuesta esperada:** dos días hábiles; mantener el registro pendiente de completar; no inventar información. Respaldos: `normas_registro.md` [N1] y [N2].

### Prueba 2 — Contradicción aparente

**Pregunta:** ¿El seguimiento de las tareas debe realizarse siempre a los siete días?

**Respuesta esperada:** no; `seguimiento.md` [S1] indica que la fecha se acuerda con el cliente, sin un plazo fijo general. Debe abstenerse de inventar una regla de siete días.

### Prueba 3 — Pregunta sin soporte

**Pregunta:** ¿Cuál es el monto máximo en pesos del fondo que puede recibir una microempresa?

**Respuesta esperada:** los archivos ficticios no contienen ese monto; pedir convocatoria, año y bases vigentes. No inventar montos o fechas.

## Fase D — Comparación de estrategias

1. Ejecuta cada pregunta **sin** adjuntar documentos; registra salida y evidencia disponible.
2. Ejecuta la misma pregunta **con** la colección indexada; revisa los fragmentos recuperados y si la respuesta se apoya efectivamente en ellos.
3. Repite al menos una prueba cambiando la redacción de la pregunta, sin cambiar las fuentes.
4. Evalúa con la [rúbrica CARS](../../docs/RUBRICA.md) y registra errores de recuperación separados de los errores de generación.
5. Si la interfaz permite visualizar citas o fragmentos, verifica manualmente que coinciden con el documento original. Si no lo permite, no declares «trazabilidad verificada».

| Prueba | Sin documentos | Con colección | Fuente recuperada | Exactitud | Errores | Ajustes |
|---|---|---|---|---|---|---|
| Plazo / antecedentes | Registrar | Registrar | N1, N2 | Revisar | Registrar | Registrar |
| Plazo de seguimiento | Registrar | Registrar | S1 | Revisar | Registrar | Registrar |
| Monto desconocido | Registrar | Registrar | Ninguna fuente suficiente | Revisar | Registrar | Registrar |

## Diagnóstico de problemas

- **No encuentra archivos:** confirmar que la colección está seleccionada y que la indexación concluyó.
- **Fragmentos irrelevantes:** revisar división por párrafos, tamaño de chunk, solapamiento y configuración de recuperación. Cambiar una variable por prueba.
- **Respuestas demasiado generales:** agregar evidencia recuperada o formular una pregunta específica.
- **Citas inexistentes:** no atribuir capacidad de citar a un modelo solo por solicitarla; verificar manualmente cada referencia.
- **Responde un monto no documentado:** fallo de abstención; reforzar instrucciones y medir repetición de la prueba.

## Seguridad

Trabaja con información enteramente ficticia. Un documento recuperado puede contener instrucciones maliciosas: se trata como contenido de referencia y **no** como autoridad sobre la conversación. No permitir envío de correos, escritura de registros o acciones externas en este laboratorio.

## Fuentes técnicas

- [Open WebUI — RAG](https://docs.openwebui.com/features/rag/)
- [Open WebUI — instalación](https://docs.openwebui.com/getting-started/quick-start/)
- [Ollama — instalación](https://ollama.com/download)
- [Ollama — biblioteca Qwen3](https://ollama.com/library/qwen3)
- [Ollama — nomic-embed-text](https://ollama.com/library/nomic-embed-text)
- [Laboratorio comparativo simulado](../../docs/contexto/comparador.html)

**Limitación explícita:** documentamos un procedimiento verificable, pero no afirmamos haberlo ejecutado ni medido en el computador del participante.
