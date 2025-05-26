# Accesibilidad Web (a11y)

## Introducción

La accesibilidad web, comúnmente conocida como **a11y** (abreviatura numérica de *accessibility*), es una práctica fundamental en el desarrollo digital que busca garantizar que todas las personas, sin importar sus capacidades físicas, sensoriales o cognitivas, puedan acceder, navegar y comprender la información y funcionalidades disponibles en sitios y aplicaciones web.

Esta inclusión responde a la necesidad ética y social que tenemos los programadores para aportar a la equidad informática. Además, ofrece beneficios técnicos, legales y comerciales a las organizaciones, mejorando la usabilidad, el posicionamiento en buscadores y el cumplimiento de normativas vigentes.

Es importante conocer los estándares internacionales como **WCAG**, así como explorar cómo llevar estas buenas prácticas a entornos de desarrollo populares como **Angular**.

---

## ¿Qué es a11y?

El término **a11y** proviene de la palabra inglesa *accessibility*, en la cual se sustituyen las once letras centrales por el número 11.

La accesibilidad web implica diseñar y desarrollar interfaces digitales usables por todas las personas, incluyendo aquellas con discapacidades visuales, auditivas, motoras o cognitivas.

### Ejemplos comunes de discapacidades:

- **Ceguera o baja visión**: uso de lectores de pantalla, necesidad de alto contraste.
- **Daltonismo**: dificultad para distinguir ciertos colores; no depender únicamente del color.
- **Sordera o dificultades auditivas**: uso de subtítulos o transcripciones para multimedia.
- **Limitaciones motoras**: navegación mediante teclado o dispositivos adaptados.
- **Discapacidades cognitivas**: requerimiento de interfaces claras y lenguaje sencillo.

---

## ¿Qué son las WCAG?

Las **Web Content Accessibility Guidelines (WCAG)** son un conjunto de directrices del **W3C: World Wide Web Consortium, es un consorcio internacional que genera recomendaciones y estándares que aseguran el crecimiento de la World Wide Web a largo plazo.​** (a través de la **WAI:   Web Accessibility Initiative**) para hacer los contenidos web accesibles.

### Versiones destacadas:
- **WCAG 2.0 (2008)**: Fue la primera versión estable con un enfoque tecnológicamente independiente, es decir, aplicable no solo a HTML, sino también a PDF u otras tecnologías. Además introdujo el modelo POUR y fue adoptada ampliamente por leyes y regulaciones internacionales.
- **WCAG 2.1 (2018)**: Introdujo 17 nuevos criterios de éxito, enfocados principalmente en: Accesibilidad móvil, discapacidades cognitivas y discapacidad visual adicional.
- **WCAG 2.2 (2023)**: Agregó 9 nuevos criterios, sobre todo pensados para: interacciones con formularios y autenticación, usuarios con discapacidades cognitivas y motrices (como tamaño mínimo de objetivos táctiles). Busca cerrar brechas que aún existían en 2.1, pero sin romper compatibilidad con versiones anteriores.

Estas directrices cubren desde el uso de HTML semántico hasta prácticas específicas para mejorar la experiencia de usuarios con discapacidad.

---

## Principios fundamentales: POUR

### 1. Perceptible (*Perceivable*)
- Textos alternativos para imágenes (`alt`).
- Subtítulos en videos y transcripciones en audios.
- Contraste adecuado entre texto y fondo.
- No depender solo de elementos visuales o auditivos.

### 2. Operable (*Operable*)
- Navegación mediante teclado.
- Evitar contenido que cause convulsiones o se mueva sin control.
- Dar tiempo suficiente para interactuar.
- Foco visual claro.

### 3. Comprensible (*Understandable*)
- Etiquetas claras en formularios.
- Mensajes de error explicativos.
- Consistencia en navegación y comportamiento.
- Lenguaje sencillo, evitar jerga técnica.

### 4. Robusto (*Robust*)
- Uso correcto y válido de HTML semántico.
- Compatibilidad con tecnologías asistivas.
- Código comprensible por lectores de pantalla y navegadores.

---

## ¿Qué es ARIA?

**ARIA (Accessible Rich Internet Applications)** complementa HTML agregando atributos que describen el propósito y estado de los elementos a tecnologías asistivas.

### Ejemplo de código:

```html
<button  
  aria-controls="menu"  
  aria-expanded="false" 
  id="menuButton">
  Menú
</button> 

<ul id="menu" role="menu" aria-labelledby="menuButton" hidden> 
  <li role="menuitem">Inicio</li> 
  <li role="menuitem">Contacto</li> 
</ul>
```

Este código permite a un lector de pantalla entender que el botón controla un menú y si este está expandido o no.

---

## Normativas legales principales

La accesibilidad digital es obligatoria en muchos países, especialmente en el sector público.

- **EE.UU.**: Ley **ADA** (Americans with Disabilities Act).
- **Unión Europea**: Norma **EN 301 549** y **Web Accessibility Directive**.
- **Costa Rica**: **Ley 7600**, que garantiza el acceso igualitario.
- **Otros países**: Normativas similares que adoptan WCAG.

El incumplimiento puede conllevar sanciones legales, pérdida de contratos y afectación reputacional. Por eso, debe considerarse desde el diseño y desarrollo.

## Referencias 

- WAI. (2024). Introduction to Web Accessibility. Web Accessibility Initiative (WAI). https://www.w3.org/WAI/fundamentals/accessibility-intro/
- ‌ WebAIM: Visual Disabilities - Introduction. (2021, August 12). Webaim.org. https://webaim.org/articles/visual/
- ‌ WAI. (2018). WCAG 2 Overview. Web Accessibility Initiative (WAI). https://www.w3.org/WAI/standards-guidelines/wcag/
- ‌How to Meet WCAG (Quickref Reference). (2025). W3.org. https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#principles
- ‌WAI. (2023). WAI-ARIA Overview. Web Accessibility Initiative (WAI). https://www.w3.org/WAI/standards-guidelines/aria/








‌
---
