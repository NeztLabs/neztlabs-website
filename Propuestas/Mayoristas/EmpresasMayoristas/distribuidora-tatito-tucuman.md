# Distribuidora Tatito — especificación UX/UI

> Actualización de investigación: **2026-10-25**. Se completaron los datos recuperables y se conservaron pendientes y conflictos. Ver `RESUMEN-INVESTIGACION.md` y `assets/procedencia.json` dentro del paquete.

## Datos de la empresa

> Antecedentes de campaña y CSV: se conservan por trazabilidad. Los datos actualizados de la ficha siguiente prevalecen; las calificaciones y presupuestos históricos no fueron revalidados.


- `slug`: `distribuidora-tatito-tucuman`
- Posición en campaña: #2
- Fila CSV: 3
- Calificación Google: 4,1; 796 reseñas (CSV)
- Canal de contacto: WhatsApp
- Nombre, ubicación, teléfono y dirección de campaña: Distribuidora Tatito; San Miguel de Tucumán; teléfono s/d; Av. Ejército del Nte. 2231, T4000 San Miguel de Tucumán
- Redes de campaña: https://www.instagram.com/tatitodistribuidora/
- Propuesta de campaña: portal B2B con catálogo, precios protegidos, pedido por WhatsApp y alta de comercios
- Oferta de campaña: $200.000 ARS único, cuotas posibles y $35.000 ARS mensuales; propuesta de NEZT, no precio verificado.

### Discrepancias y actualización

- El teléfono antes ausente se localizó en un directorio; pendiente de confirmación directa.
- Facebook vincula la marca con Ejército del Norte 2231. No utilizar automáticamente todas las sucursales publicadas: algunos números de otras direcciones difieren entre posteos.
- Hay precios mayoristas y minoristas publicados como modalidad, pero no se verificó checkout ni lista protegida.

## Ficha del negocio

| Campo | Dato actualizado y procedencia |
|---|---|
| Nombre comercial | Distribuidora Tatito |
| Razón social/CUIT | `{{legal_name}}`, `{{tax_id}}` — pendientes de constancia o comprobante fiscal; no se completan por homonimia. |
| Sector/rubro | Distribución y venta mayorista/minorista de alimentos. Facebook publica productos de almacén y combos alimenticios. [T1, T3] |
| Comprador objetivo | Comercios que reponen mercadería y compradores minoristas, según comunicación de Facebook. [T1] |
| País y cobertura | Argentina. San Miguel de Tucumán y sucursales anunciadas; reparto y alcance de entrega `{{service_area}}`, `{{fulfillment_policy}}`. |
| Moneda e impuestos | `{{currency}}`, `{{tax_display_policy}}` pendientes. ARS es una propuesta para la maqueta argentina, no una política fiscal confirmada. |
| Idioma y tono | Español observado; `{{brand_tone}}` requiere decisión de marca. |
| Propuesta de valor | Venta de alimentos con comunicación de precios mayoristas y minoristas. [T1] |
| CTA de la maqueta | Propuesta de diseño: «Consultar productos». `{{primary_cta}}` pendiente de aprobación; no es una decisión confirmada del negocio. |
| Modalidad comercial | Venta anunciada en sucursales; compra online `{{purchase_mode}}` pendiente. |
| Precios | Se anuncian precios mayoristas/minoristas; catálogo vigente y acceso a listas `{{price_visibility}}` pendientes. |
| Cantidades y mínimos | `{{order_rules}}`: sin mínimos o múltiplos confirmados. |
| Registro B2B | `{{account_approval_policy}}` — no se verificó flujo propio de aprobación. |
| Domicilio | Av. Ejército del Norte 2231, San Miguel de Tucumán; coincidencia entre directorio y publicaciones propias. [T2, T3] |
| Horarios | `{{opening_hours}}`: no se encontró un horario vigente suficientemente confirmado para esta sucursal. |
| Contactos y redes | Teléfono publicado por Cylex: +54 381 418-4255; no se confirmó que sea WhatsApp. Facebook: https://www.facebook.com/distribuidoratatitotuc/; Instagram de origen: https://www.instagram.com/tatitodistribuidora/. [T1, T2] |
| Crédito y permisos | `{{credit_policy}}`, `{{buyer_roles}}` — no publicados o no confirmados. |
| Catálogo, stock y sistemas | `{{data_sources}}` — no se obtuvo inventario exportable, precios vigentes ni sistema interno. |
| Fecha y nivel de evidencia | 2026-10-25; publicación propia, directorio o candidato indicados por campo. No se contactó a las empresas. |

## Recursos de marca a obtener

**Recuperado de la página vinculada al negocio**. La descarga no transforma una imagen raster en un archivo vectorial ni acredita derechos de publicación final.

| Recurso | Resultado |
|---|---|
| Imagen de perfil original | [perfil-facebook.jpg](assets/tatito/perfil-facebook.jpg); 720 × 720 px. Fuente: https://www.facebook.com/distribuidoratatitotuc/ |
| Copia PNG de referencia | [logo-referencia.png](assets/tatito/logo-referencia.png); conversión raster, sin vectorizar ni quitar fondos. |
| Logo SVG | `{{logo_svg}}` — no localizado; proporcionado por el usuario. |
| Paleta | Colores aproximados muestreados del raster: `#8B2124`, `#FFFF01`. **No son una paleta oficial**; `{{primary_palette_hex}}`, `{{secondary_palette_hex}}` pendientes de aprobación. |
| Tipografía | `{{brand_fonts}}` — no identificar la fuente del logo por apariencia. |
| Fotos de productos/local | `{{product_photos}}`, `{{business_photos}}` — no se recuperó un conjunto de fotos individuales de producto desde Facebook; los enlaces de publicaciones son referencias. |
| Eslogan | `{{tagline}}` — sin eslogan oficial confirmado; no convertir frases promocionales en uno. |
| Contactos | Datos publicados, fuentes y discrepancias en la ficha del negocio; `{{contact_details}}` representa la validación final. |
| Certificaciones y marcas | `{{verified_credentials}}` — no se completan por semejanza de logos o por referencias de terceros. |

![Imagen de perfil recuperada](assets/tatito/logo-referencia.png)

## Principios de UX/UI aplicados

- Si se confirma consumo masivo, organizar por familias, marcas, presentaciones y código.
- Mostrar unidades, mínimos y estado de disponibilidad antes de pedir registro.
- Mantener búsqueda, filtros, cantidades y CTA en móvil; conservar datos al corregir errores.
- No mostrar precios protegidos, crédito o compra directa como hechos hasta confirmar política B2B.
- Aplicar WCAG 2.2 AA: contraste, teclado, foco, etiquetas persistentes, estados textuales y reflujo a 320 px. Fuente: https://www.w3.org/TR/WCAG22/

## Hallazgos de referencias

| ID | URL | Evidencia y límite |
|---|---|---|
| T1 | https://www.facebook.com/distribuidoratatitotuc/ | Página pública: mayorista/minorista; imagen de perfil recuperada. |
| T2 | https://www.cylex.com.ar/san-miguel-de-tucuman/distribuidora-tatito-11582768.html | Teléfono 0381 418-4255 y domicilio coincidente; fuente secundaria. |
| T3 | https://www.facebook.com/distribuidoratatitotuc/posts/llegaron-los-combos-panchos-de-tatito-para-hacer-tu-evento-o-reuni%C3%B3n-mucho-m%C3%A1s-f/875746078112433/ | Oferta de combos y domicilio de Ejército del Norte 2231. |
| T4 | https://www.facebook.com/distribuidoratatitotuc/posts/-compr%C3%A1-tranquilo-recibimos-todas-las-tarjetas%EF%B8%8F-te-esperamos-en-nuestras-sucursa/348783263198903/ | Anuncia aceptación de tarjetas; no confirma condiciones actuales. |

Los resultados indexados de Facebook se usan cuando muestran explícitamente el dato; los metadatos públicos sirvieron para descargar la imagen de perfil. No se completaron compras, no se ingresó a cuentas y no se comprobó vigencia por llamada.

## Especificación de páginas

### Contrato de la maqueta y estructura común

- [ ] Usar datos confirmados o `{{...}}`.
- [ ] Operar navegación, búsqueda, filtros, cantidades y validaciones.
- [ ] Representar carga, vacío, error y éxito.
- [ ] Identificar toda simulación y no tratar precios ocultos como seguridad.

Orden: aviso opcional → cabecera → navegación → contenido → pie. Componentes: nombre, buscador, categorías, cuenta, carrito/cotización, contacto y condiciones.

### Inicio

Mostrar una propuesta de valor pendiente de confirmar, categorías solo cuando exista catálogo, CTA `{{primary_cta}}`, condiciones y contacto confirmado.

### Catálogo, categoría y búsqueda

Usar `{{category_attributes}}`, búsqueda por nombre/código y filtros combinables. Mantener consulta, filtros y posición al volver; dejar sin resultados recuperable.

### Detalle de producto

Usar `{{product_name}}`, `{{sku}}`, variante, presentación, disponibilidad y precio o acceso B2B. `{{minimum_quantity}}` y `{{quantity_step}}` quedan pendientes.

### Carrito o cotización

Editar cantidades, validar mínimos, dejar observaciones y preparar mensaje de WhatsApp con códigos y presentaciones; no declarar el mensaje como enviado.

### Finalización y confirmación — condicional

Solo si se confirma compra directa. Revisar importes, impuestos, entrega, pago y estado de operación.

### Registro B2B, cuenta y pedido rápido

Módulos condicionales a confirmar. No solicitar CUIT, crédito, listas, historial ni códigos masivos sin política documentada.

### Contacto y condiciones comerciales

Usar únicamente dirección, teléfono, horarios, cobertura y políticas confirmados. `{{commercial_policies}}` permanece pendiente.

## Sistema de diseño

Tokens de marca sin aprobación: `{{color_brand_primary}}`, `{{color_brand_secondary}}`, `{{font_body}}`, `{{font_heading}}`. Los colores medidos en Recursos son muestras del raster, no valores corporativos oficiales.

Tokens de interfaz por definir al diseñar: `{{color_background}}`, `{{color_surface}}`, `{{color_text}}`, `{{space_scale}}`, `{{breakpoints}}`, `{{icon_set}}`, `{{image_fit}}`. Estos son decisiones de diseño, no datos que deban existir en internet.

Mantener estados de foco, carga, error, vacío, agotado y confirmación incierta. WCAG 2.2 AA exige objetivos de 24 × 24 CSS o sus excepciones; 44 × 44 CSS es un objetivo recomendado de diseño, no el mínimo AA.

## Preguntas abiertas

- Confirmar razón social, CUIT y condiciones fiscales con documentación del negocio.
- Validar teléfono, WhatsApp, horarios y domicilio cuando se indiquen como directorio, candidato o discrepancia.
- Proporcionar catálogo vigente con códigos, presentaciones, unidades, precios, impuestos y disponibilidad.
- Definir mínimos, bultos, escalas por volumen, pagos, reparto, retiro, devoluciones y crédito.
- Decidir registro B2B, visibilidad de precios y flujo de compra/cotización; las propuestas de campaña no prueban que existan.
- Aprobar identidad, paleta, tipografías, imágenes y alcance de la maqueta; entregar SVG si existe.

## Comprobación final

- [x] Revisada la ficha y cruzada con la fila original del CSV.
- [x] Fuentes, fecha, archivos de imagen y discrepancias documentados.
- [x] Separados datos publicados, candidatos, antecedentes y propuestas.
- [x] Pendientes comerciales y de marca conservados sin inventar datos.
- [ ] Confirmación directa de la empresa y aprobación de identidad.
- [ ] Funciones de maqueta probadas; esta entrega es documental.

