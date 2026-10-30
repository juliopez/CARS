[← Volver al recorrido](https://juliopez.github.io/CARS/) · [Metodología CARS](https://juliopez.github.io/CARS/#comenzar) · [Recursos complementarios](https://juliopez.github.io/CARS/#recursos)

---

# CARS 2026 — casos prácticos de autoaprendizaje

**Estado:** casos de práctica independientes de organizaciones.  
**Datos:** exclusivamente ficticios. No cargar información identificable de empresas reales ni información interna no autorizada.

## Caso 1 — Resumen de reunión (nivel inicial)

**Situación:** una persona registra notas ficticias de reunión: «La empresa Panadería Horizonte (ficticia) vende en local y por mensajería. Desea organizar los pedidos. Se acordó revisar el registro de ventas; no se acordó una fecha».

**Actividad:** construir un prompt con CARS que convierta las notas en un registro de reunión.

- **C:** notas ficticias, finalidad de trazabilidad; no inventar datos.
- **A:** extraer situación, acuerdos, responsables y pendientes.
- **R:** apoyo administrativo a un profesional que organiza información.
- **S:** tabla con campos, evidencia textual y faltantes.

**Criterio de logro:** no debe inventarse un plazo, un monto o una persona responsable.

## Caso 2 — Propuesta de mejora comercial (nivel intermedio)

**Situación:** una microempresa ficticia informa ventas mensuales de $1.200.000, costos variables de $720.000 y gastos fijos de $300.000. Son cifras inventadas para practicar, no información contable validada.

**Actividad:** construir un prompt que solicite un análisis *preliminar* de margen y tres ideas de mejora, explicitando supuestos, cálculos y datos necesarios.

- **C:** cifras, periodo mensual y propósito exploratorio.
- **A:** calcular margen de contribución ($480.000) y resultado antes de otros conceptos ($180.000) bajo los supuestos indicados; proponer líneas de acción.
- **R:** asistente analítico de un analista de negocios.
- **S:** tabla de indicadores, cálculos y limitaciones; preguntas para el asesor.

**Criterio de logro:** aritmética correcta y advertencia de que no es un diagnóstico contable integral.

## Caso 3 — Consulta sobre instrumento de apoyo (nivel intermedio)

**Situación:** una persona pregunta si su emprendimiento cumple requisitos para un fondo. **No se entrega ninguna base vigente.**

**Actividad:** elaborar un prompt que exija solicitar convocatoria, año, territorio, bases y antecedentes pertinentes antes de concluir elegibilidad.

**Criterio de logro:** la IA no inventa requisitos, plazos ni montos. Cuando se aportan bases oficiales, identifica las cláusulas aplicables y pide revisión humana.

## Caso 4 — Asistente especializado (nivel avanzado)

**Objetivo:** diseñar un asistente para orientar la preparación de entrevistas de diagnóstico empresarial.

**Entregable:** una instrucción CARS reutilizable, una matriz de cinco casos de prueba y una lista de riesgos (datos personales, información desactualizada, sesgos, recomendaciones no verificadas).

**Criterio de logro:** el asistente distingue recomendaciones de decisiones de la persona responsable y no declara haber actualizado sistemas o enviado correos cuando no lo hizo.

## Dinámica sugerida

1. Resolver cada caso con una petición espontánea.
2. Reformularla con CARS cuando la estructura aporte claridad.
3. Ejecutar ambas versiones bajo condiciones comparables.
4. Aplicar la [rúbrica de evaluación](RUBRICA.md).
5. Discutir si la mejora proviene de CARS, de los datos aportados, de la iteración o de varios factores.
6. Registrar versiones del prompt y observaciones.

**Nota metodológica:** los casos no pretenden afirmar que una formulación CARS siempre supere a una petición sencilla.
