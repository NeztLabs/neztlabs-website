# O&L Variety — especificación UX/UI

> Actualización de investigación: **2026-10-25**. Se completaron los datos recuperables y se conservaron pendientes y conflictos. Ver `RESUMEN-INVESTIGACION.md` y `assets/procedencia.json` dentro del paquete.

## Datos de la empresa

> Antecedentes de campaña y CSV: se conservan por trazabilidad. Los datos actualizados de la ficha siguiente prevalecen; las calificaciones y presupuestos históricos no fueron revalidados.


- `slug`: `ol-variety-santa-fe`
- Posición en campaña: #9
- Fila CSV: 10
- Calificación Google: 4,2; 436 reseñas (CSV)
- Canal: WhatsApp
- Campaña: O&L Variety; Santa Fe (Capital); +54 342 484-2689; Castelli 3612; Google Maps: https://google.com/maps/?q=O%20%26%20L%20Variety%20-%20Wholesale%20Distributor%20Castelli%203612&ll=-31.603418,-60.707993&z=15
- Redes: no detectadas en campaña/CSV
- Propuesta: portal B2B con catálogo, precios protegidos, pedido por WhatsApp y alta de comercios
- Oferta: $250.000 ARS único, cuotas posibles y $35.000 ARS mensuales; propuesta de NEZT.

### Discrepancias y actualización

- Nombre público identificado como OyL Variedades; O&L Variety se conserva como alias de origen.
- Se localizaron Facebook, correo y otro teléfono; la ausencia de redes del CSV queda desactualizada.
- Horarios de domingo: TodosNegocios indica cerrado, La Guía Online publica apertura. No consolidar como vigente.
- Se halló candidato fiscal O Y L VARIEDADES SRL, CUIT 30-70707940-8, con domicilio coincidente. No usar como razón social o CUIT definitivo sin comprobante.
- Dominio asociado no accesible: no equivale a inexistente ni a tienda activa.

## Ficha del negocio

| Campo | Dato actualizado y procedencia |
|---|---|
| Nombre comercial | OyL Variedades — O&L Variety en el CSV |
| Razón social/CUIT | `{{legal_name}}`, `{{tax_id}}` — pendientes de constancia o comprobante fiscal; no se completan por homonimia. |
| Sector/rubro | Distribuidor mayorista; bazar, librería, perfumería, golosinas y alimentos según directorio coincidente en domicilio y teléfono histórico. [O1, O3] |
| Comprador objetivo | Comercios y revendedores como interpretación del canal mayorista; perfil contractual `{{buyer_type}}` pendiente. |
| País y cobertura | Argentina. Santa Fe; rutas, alcance de reparto y retiro `{{fulfillment_policy}}`, `{{service_area}}` pendientes. |
| Moneda e impuestos | `{{currency}}`, `{{tax_display_policy}}` pendientes. ARS es una propuesta para la maqueta argentina, no una política fiscal confirmada. |
| Idioma y tono | Español observado; `{{brand_tone}}` requiere decisión de marca. |
| Propuesta de valor | Distribución mayorista con familias de bazar, librería, perfumería, golosinas y alimentos. [O1, O3] |
| CTA de la maqueta | Propuesta de diseño: «Consultar productos». `{{primary_cta}}` pendiente de aprobación; no es una decisión confirmada del negocio. |
| Modalidad comercial | Consultas por teléfono/redes; compra digital `{{purchase_mode}}` pendiente. |
| Precios | `{{price_visibility}}`: no se verificó catálogo completo vigente. |
| Cantidades y mínimos | `{{order_rules}}`: mínimos y unidades no confirmados. |
| Registro B2B | `{{account_approval_policy}}` — no se verificó flujo propio de aprobación. |
| Domicilio | Castelli 3612, Santa Fe, CP 3000: coincidencia de página propia, directorios y CSV. [O1, O2, O3] |
| Horarios | Directorio O2: lunes a viernes 08:00–18:00; sábados 08:30–16:00; domingo cerrado. Domingo contradice O3: confirmar vigencia de todo el horario. |
| Contactos y redes | Teléfono de Facebook +54 342 524-5424; correo oylvariedades@arnet.com.ar. Teléfono CSV +54 342 484-2689 también figura en La Guía Online, pero no se confirma como contacto actual. Facebook: https://www.facebook.com/oylvariedadesmayorista/. [O1, O2, O3] |
| Crédito y permisos | `{{credit_policy}}`, `{{buyer_roles}}` — no publicados o no confirmados. |
| Catálogo, stock y sistemas | `{{data_sources}}` — no se obtuvo inventario exportable, precios vigentes ni sistema interno. |
| Fecha y nivel de evidencia | 2026-10-25; publicación propia, directorio o candidato indicados por campo. No se contactó a las empresas. |

## Recursos de marca a obtener

**Recuperado de la página vinculada al negocio**. La descarga no transforma una imagen raster en un archivo vectorial ni acredita derechos de publicación final.

| Recurso | Resultado |
|---|---|
| Imagen de perfil original | [perfil-facebook.jpg](assets/oyl/perfil-facebook.jpg); 337 × 337 px. Fuente: https://www.facebook.com/oylvariedadesmayorista/ |
| Copia PNG de referencia | [logo-referencia.png](assets/oyl/logo-referencia.png); conversión raster, sin vectorizar ni quitar fondos. |
| Logo SVG | `{{logo_svg}}` — no localizado; proporcionado por el usuario. |
| Paleta | Colores aproximados muestreados del raster: `#2D7DAE`, `#2E7EB0`. **No son una paleta oficial**; `{{primary_palette_hex}}`, `{{secondary_palette_hex}}` pendientes de aprobación. |
| Tipografía | `{{brand_fonts}}` — no identificar la fuente del logo por apariencia. |
| Fotos de productos/local | `{{product_photos}}`, `{{business_photos}}` — no se recuperó un conjunto de fotos individuales de producto desde Facebook; los enlaces de publicaciones son referencias. |
| Eslogan | `{{tagline}}` — sin eslogan oficial confirmado; no convertir frases promocionales en uno. |
| Contactos | Datos publicados, fuentes y discrepancias en la ficha del negocio; `{{contact_details}}` representa la validación final. |
| Certificaciones y marcas | `{{verified_credentials}}` — no se completan por semejanza de logos o por referencias de terceros. |

![Imagen de perfil recuperada](assets/oyl/logo-referencia.png)

## Principios de UX/UI aplicados

Confirmar primero si es supermercado, polirrubro o distribuidora; luego organizar familias y búsquedas; mostrar presentación, unidad, stock y precio autorizado; explicar mínimos; mantener filtros en móvil; aplicar WCAG 2.2 AA: https://www.w3.org/TR/WCAG22/.

## Hallazgos de referencias

| ID | URL | Evidencia y límite |
|---|---|---|
| O1 | https://www.facebook.com/oylvariedadesmayorista/ | Nombre OyL Variedades, dirección, teléfono, correo e imagen de perfil. |
| O2 | https://ar.todosnegocios.com/oyl-variedades-0342-524-5424 | Corrobora teléfono, correo, domicilio y horarios; fuente secundaria. |
| O3 | https://laguiaonline.com.ar/businesses/o-l-variedades-distribuidor-mayorista | Familias de productos, teléfono del CSV y dominio asociado; domingo difiere de O2. |
| O4 | https://www.oylvariedades.com.ar/ | Dominio asociado no accesible durante la consulta; no se declara web activa. |
| O5 | https://datok.com.ar/empresa/30707079408 | Candidato fiscal O Y L VARIEDADES SRL con mismo domicilio: requiere comprobante fiscal para atribución definitiva. |

Los resultados indexados de Facebook se usan cuando muestran explícitamente el dato; los metadatos públicos sirvieron para descargar la imagen de perfil. No se completaron compras, no se ingresó a cuentas y no se comprobó vigencia por llamada.

## Especificación de páginas

### Contrato de la maqueta y estructura común

- [ ] Usar datos confirmados o `{{...}}`.
- [ ] Operar navegación, búsqueda, filtros, cantidades y validaciones.
- [ ] Representar carga, vacío, error y éxito.
- [ ] Identificar simulaciones y no tratar ocultación de precios como seguridad.

Orden: aviso opcional → cabecera → navegación → contenido → pie.

### Inicio

Usar `{{value_proposition}}`, `{{primary_cta}}` y categorías solo tras confirmar rubro y comprador.

### Catálogo, categoría y búsqueda

Definir `{{category_attributes}}`; incluir nombre/código, filtros combinables, limpieza y estado vacío recuperable.

### Detalle de producto

`{{product_name}}`, `{{sku}}`, presentación, disponibilidad, precio, `{{minimum_quantity}}` y `{{quantity_step}}` pendientes.

### Carrito o cotización

Editar cantidades, validar mínimos, mostrar logística pendiente y preparar WhatsApp sin confirmar envío.

### Finalización y confirmación — condicional

Solo si se verifican compra directa, pago, impuestos y entrega.

### Registro B2B, cuenta y pedido rápido

Condicionales a aprobación, listas, crédito, historial, recompra y códigos.

### Contacto y condiciones comerciales

Resolver variante exacta de dirección, teléfono, horarios, cobertura y `{{commercial_policies}}`.

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
- Confirmar el candidato fiscal y el horario del domingo; no usar el CUIT candidato para facturar.

## Comprobación final

- [x] Revisada la ficha y cruzada con la fila original del CSV.
- [x] Fuentes, fecha, archivos de imagen y discrepancias documentados.
- [x] Separados datos publicados, candidatos, antecedentes y propuestas.
- [x] Pendientes comerciales y de marca conservados sin inventar datos.
- [ ] Confirmación directa de la empresa y aprobación de identidad.
- [ ] Funciones de maqueta probadas; esta entrega es documental.

