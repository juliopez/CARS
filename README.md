# CARS — Metodología para la construcción de prompts efectivos

**Contexto · Acción · Rol · Salida**  
**Material original: 2023 · Actualización pedagógica: octubre de 2026**

La metodología **CARS**, desarrollada y difundida por el **Dr. Julio López-Núñez**, organiza una instrucción a un modelo de IA generativa en cuatro componentes que ayudan a expresar con claridad qué se necesita, para quién y con qué condiciones. Su uso es **flexible**: no es una sintaxis obligatoria ni garantiza por sí solo respuestas correctas.

## CARS en una mirada

| Componente | Pregunta | Qué especificar |
|---|---|---|
| **C — Contexto** | ¿Cuál es la situación? | Información pertinente, destinatario, fuentes y limitaciones |
| **A — Acción** | ¿Qué hay que hacer? | Tarea, propósito, criterios de éxito |
| **R — Rol** | ¿Qué perspectiva conviene? | Función, especialidad o tono, cuando aporte valor |
| **S — Salida** | ¿Cómo presentar el resultado? | Formato, alcance, extensión, evidencias y asuntos pendientes |

> **Principio de actualización 2026:** definir un objetivo preciso, aportar contexto útil y **verificar el resultado**. Un prompt más extenso no es necesariamente mejor.


## Arquitectura pedagógica 2026

**Propósito:** repositorio público de autoaprendizaje en inteligencia artificial generativa, sin vinculación con instituciones ni programas de capacitación. CARS es la metodología transversal para construir, probar y evaluar instrucciones; los demás recursos permiten aplicarla a diferentes tareas.

**[Abrir recorrido guiado en GitHub Pages](https://juliopez.github.io/CARS/)**

### Ruta de autoaprendizaje

[Guía de aprendizaje autónomo](docs/RUTA_AUTOAPRENDIZAJE.md), con teoría, presentaciones, simuladores y laboratorios para avanzar a ritmo propio.

### Herramienta transversal CARS: cuatro recursos

1. **Teoría:** [Guía CARS 2026](docs/GUIA_CARS_2026.md).
2. **Presentación:** [CARS 2026](docs/presentacion/index.html).
3. **Simulador:** [Explorar los componentes CARS](docs/simuladores/cars.html).
4. **Laboratorio:** [Construir y evaluar un prompt](docs/laboratorio/index.html).

### Biblioteca de recursos según las necesidades (incluye profundización opcional)

| Tema | Presentación | Simulación | Práctica |
|---|---|---|---|
| Modelos y servicios | [Modelos](docs/presentaciones/modelos.html) | [Parámetros y memoria](docs/simuladores/parametros.html) | [Selección de modelos](docs/laboratorios/seleccion-modelos.html) |
| Memoria, contexto y archivos | [Contexto](docs/presentaciones/contexto.html) | [Proyecto de cuatro semanas](docs/contexto/index.html#simulador) | [Traspaso entre chats](docs/contexto/index.html#objetivo) |
| Asistentes en nube | [Asistentes](docs/presentaciones/asistentes.html) | [Capas del asistente](docs/simuladores/asistentes.html) | [Instrucciones de proyecto](docs/nube/index.html#purpose) |
| RAG y recuperación avanzada | [RAG](docs/presentaciones/rag.html) | [Comparación de estrategias](docs/contexto/comparador.html) | [Laboratorio local](docs/contexto/rag-real/index.html) |

Fuentes y teoría adicional: [panorama de modelos](docs/PANORAMA_MODELOS_2026.md), [guía de contexto](docs/contexto/index.html), [archivos y multimedia](docs/contexto/archivos.html), [configuración en nube](docs/nube/index.html). Los [casos prácticos](docs/CASOS_PRACTICOS.md) son ficticios y la [rúbrica](docs/RUBRICA.md) es un instrumento didáctico, no psicométricamente validado.

**Mantenimiento:** consultar [inventario y decisiones editoriales](docs/INVENTARIO_2026.md) antes de añadir recursos. Hay rutas de presentación duplicadas identificadas, preservadas hasta su revisión. El material histórico de 2023 sigue intacto.

## Un ejemplo de aplicación

**C (Contexto):** Un centro de asesoría empresarial necesita resumir notas ficticias de una reunión de atención.  
**A (Acción):** Extrae los acuerdos, responsables y fechas que aparezcan expresamente, sin completar vacíos con suposiciones.  
**R (Rol):** Actúa como asistente de sistematización para un profesional del centro.  
**S (Salida):** Entrega una tabla de acuerdos y una sección «Información por confirmar»; señala qué parte de las notas respalda cada dato.

**Después de obtener la respuesta:** contrastar el resumen con las notas originales y corregir las omisiones o inferencias indebidas. Esta comprobación no añade una quinta letra a CARS: es una fase de evaluación.

## Origen académico y preservación histórica

El repositorio conserva la versión histórica de 2023 como referencia del origen y evolución de CARS, sin afiliación institucional del proyecto actual.

La presentación original [**Taller IA-G.pdf**](./Taller%20IA-G.pdf) **se mantiene sin modificaciones** como testimonio académico del taller. Sus referencias a tecnologías corresponden a la época y **no deben interpretarse como una descripción vigente de capacidades o productos en 2026**.

## Límites de uso

- CARS **no elimina las alucinaciones** ni sustituye la evaluación crítica.
- La respuesta puede variar entre modelos, versiones y ejecuciones.
- No introducir datos personales, comerciales o institucionales confidenciales sin autorización.
- No confiar en citas, cálculos o promesas de acciones sin verificación independiente.
- Cuando una tarea implique consecuencias externas (enviar mensajes, modificar registros, emitir recomendaciones), establecer permisos y supervisión humana.
- CARS es una **metodología pedagógica**, no un estándar industrial ni una escala psicométrica validada.

## Lecturas actuales

Las referencias oficiales consultadas para esta actualización, con sus enlaces, están reunidas en la [Guía CARS 2026](docs/GUIA_CARS_2026.md). Se distinguen los principios didácticos relativamente estables de las características de productos y modelos, que deben comprobarse al impartir cada curso.

---

**Autor del material original:** Dr. Julio López-Núñez  
**Primera actividad documentada:** octubre de 2023  
**Revisión de contenidos:** octubre de 2026
