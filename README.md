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


## Cómo utilizar CARS 2026

La página principal está organizada como un **recorrido de aprendizaje**, en lugar de un catálogo de materiales.

**[Abrir ruta formativa en GitHub Pages](https://juliopez.github.io/CARS/)**

| Etapa | Propósito | Recurso principal |
|---|---|---|
| 1. Comprender | Modelos, modalidades, capacidades y parámetros | [Teoría](docs/PANORAMA_MODELOS_2026.md) · [Presentación](docs/presentaciones/modelos.html) · [Simulador](docs/simuladores/parametros.html) · [Laboratorio](docs/laboratorios/seleccion-modelos.html) |
| 2. Comunicar | Construir prompts CARS y evaluar las respuestas | [Presentación](docs/presentacion/index.html), [simulador](docs/simuladores/cars.html) y [laboratorio](docs/laboratorio/index.html) |
| 3. Organizar | Memoria, contexto, proyectos, archivos y traspasos | [Guía de contexto](docs/contexto/index.html) |
| 4. Configurar | Instrucciones, Knowledge, Skills y herramientas en la nube | [Asistentes en la nube](docs/nube/index.html) |
| 5. Profundizar (opcional) | Comparación de contexto y recuperación RAG | [Comparador](docs/contexto/comparador.html) y [RAG local](docs/contexto/rag-real/index.html) |

### Tipos de material

- **Presentación:** apoyo visual del docente; no reemplaza las prácticas.
- **Laboratorios:** actividades del estudiante con un producto observable.
- **Guías y referencias:** consulta según necesidad, no lecturas obligatorias al comenzar.
- **Archivo histórico:** la [presentación del taller de 2023](Taller%20IA-G.pdf) se preserva sin modificaciones.

Para una formación introductoria se recomiendan las etapas 1–4. La etapa 5 requiere condiciones técnicas adicionales; su procedimiento de implementación local aún debe validarse en cada equipo. Los ejercicios de Sercotec son ficticios y no constituyen requisitos oficiales.

### Recursos de consulta

[Guía metodológica CARS](docs/GUIA_CARS_2026.md) · [Casos didácticos](docs/CASOS_SERCOTEC.md) · [Rúbrica](docs/RUBRICA.md) · [Archivos y multimedia](docs/contexto/archivos.html).

## Un ejemplo de aplicación

**C (Contexto):** Un centro de asesoría empresarial necesita resumir notas ficticias de una reunión de atención.  
**A (Acción):** Extrae los acuerdos, responsables y fechas que aparezcan expresamente, sin completar vacíos con suposiciones.  
**R (Rol):** Actúa como asistente de sistematización para un profesional del centro.  
**S (Salida):** Entrega una tabla de acuerdos y una sección «Información por confirmar»; señala qué parte de las notas respalda cada dato.

**Después de obtener la respuesta:** contrastar el resumen con las notas originales y corregir las omisiones o inferencias indebidas. Esta comprobación no añade una quinta letra a CARS: es una fase de evaluación.

## Origen académico y preservación histórica

Este repositorio conserva el material del taller **«Construyendo Prompts Efectivos: Taller para Estudiantes de Pregrado y Futuros Investigadores»**, presentado por **Dr. Julio López-Núñez (Universidad de Playa Ancha)** durante el **5.º Encuentro de Semilleros de Investigación de Estudiantes de Pregrado**, realizado en 2023 en la **Universidad de Los Lagos, Campus Osorno**.

La presentación original [**Taller IA-G.pdf**](./Taller%20IA-G.pdf) **se mantiene sin modificaciones** como testimonio académico del taller. Sus referencias a tecnologías corresponden a la época y **no deben interpretarse como una descripción vigente de capacidades o productos en 2026**.

Fuentes institucionales sobre el encuentro:
- [Universidad de Playa Ancha](https://www.upla.cl/noticias/2023/10/31/60-estudiantes-de-universidades-estatales-participaron-en-el-quinto-encuentro-de-semilleros-de-investigacion-de-pregrado/)
- [Universidad de Los Lagos](https://www.ulagos.cl/2023/10/ulagos-es-anfitriona-del-5-encuentro-nacional-de-semilleros-de-investigacion-de-pregrado/)
- [Semillero de Investigación ULagos](https://semillerodeinvestigacion.ulagos.cl/actividades-semillero/encuentros-de-semilleros-de-investigacion-para-estudiantes-de-pregrado/5to-encuentro/)

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
**Institución vinculada al taller de origen:** Universidad de Playa Ancha · Valparaíso, Chile  
**Primera actividad documentada:** octubre de 2023  
**Revisión de contenidos:** octubre de 2026
