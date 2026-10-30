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


## Laboratorio interactivo 2026

Se agregó un [constructor visual de prompts CARS](laboratorio/index.html) que permite completar los cuatro componentes, utilizar casos ficticios, generar y copiar instrucciones, descargar un archivo de texto y aplicar la rúbrica didáctica de seis criterios.

**Uso local:** descarga el repositorio y abre `laboratorio/index.html` en un navegador moderno. No requiere servidor ni claves API y no envía los campos a servicios externos. No ejecuta modelos de IA. La copia automática puede requerir HTTPS o un entorno seguro; la descarga y la selección manual del texto son alternativas.

**Publicación:** el laboratorio está preparado como sitio estático para GitHub Pages. La rama de trabajo no implica que GitHub Pages ya esté desplegado; se debe configurar la fuente de publicación y comprobar la URL antes de anunciarla.

- 🖥️ **[Presentación CARS 2026](docs/presentacion/index.html):** nueve diapositivas navegables para usar durante el taller, con acceso al laboratorio.\n\n## Recorrido recomendado

1. **Comprender** CARS y distinguir sus cuatro componentes.
2. **Aplicar** CARS a una tarea concreta con datos ficticios o autorizados.
3. **Contrastar** respuestas espontáneas y estructuradas, evitando asumir que una fórmula siempre gana.
4. **Evaluar** exactitud, pertinencia, evidencias, alcance, formato y riesgos.
5. **Iterar** y registrar cambios; para tareas repetitivas, conservar casos de prueba.

### Material didáctico 2026

- 📘 **[Guía metodológica CARS 2026](docs/GUIA_CARS_2026.md):** actualización conceptual; cuándo conviene usar CARS, modelos de razonamiento, multimodalidad, agentes y evaluación.
- 🧪 **[Ejercicios contextualizados para Sercotec](docs/CASOS_SERCOTEC.md):** cuatro casos progresivos ficticios; propuestas pedagógicas, no requerimientos oficiales de Sercotec.
- 📋 **[Rúbrica de evaluación](docs/RUBRICA.md):** instrumento didáctico de seis dimensiones y registro de pruebas.

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
