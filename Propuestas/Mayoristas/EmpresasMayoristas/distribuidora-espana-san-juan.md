# Distribuidora España — especificación UX/UI

> Actualización de investigación: **2026-10-25**. Se completaron los datos recuperables y se conservaron pendientes y conflictos. Ver `RESUMEN-INVESTIGACION.md` y `assets/procedencia.json` dentro del paquete.

## Datos de la empresa

> Antecedentes de campaña y CSV: se conservan por trazabilidad. Los datos actualizados de la ficha siguiente prevalecen; las calificaciones y presupuestos históricos no fueron revalidados.


- `slug`: `distribuidora-espana-san-juan`
- Posición en campaña: #1
- Fila CSV: 2
- Calificación Google: 4,2; 813 reseñas (CSV)
- Canal de contacto: WhatsApp
- Nombre de campaña: Distribuidora España
- Ubicación de campaña: San Juan (Capital)
- Teléfono de campaña: +54 264 538-1066
- Dirección de campaña: N. Avellaneda 665
- Redes de campaña: https://www.instagram.com/distribuidoraespana/
- Propuesta de campaña: portal B2B con catálogo, lista protegida, pedido por WhatsApp y alta de comercios
- Oferta de campaña: pago único de $200.000 ARS, cuotas posibles y $30.000 ARS mensuales; no es un dato comercial verificado de la empresa.

### Discrepancias y actualización

- Existe tienda propia; retirar el diagnóstico de «sin web» para esta ficha.
- El teléfono del CSV (+54 264 538-1066) difiere del publicado en el sitio/Linktree. Se conserva como antecedente, no como contacto principal.
- El rubro de alimentos y bebidas del CSV no coincide con la oferta pública.
- Los directorios ofrecen horarios diferentes: priorizar el sitio propio, sin garantizar vigencia operativa.

## Ficha del negocio

| Campo | Dato actualizado y procedencia |
|---|---|
| Nombre comercial | Distribuidora España |
| Razón social/CUIT | `{{legal_name}}`, `{{tax_id}}` — pendientes de constancia o comprobante fiscal; no se completan por homonimia. |
| Sector/rubro | Herramientas, ferretería, tecnología, electricidad, hogar y bazar; Linktree añade juguetería y regalería. [E1, E2] |
| Comprador objetivo | Venta general mediante tienda; segmentación mayorista específica pendiente: `{{buyer_type}}`. |
| País y cobertura | Argentina. Envíos a todo el país declarados; costos, excepciones y retiro: `{{fulfillment_policy}}`. [E1] |
| Moneda e impuestos | ARS observados en la tienda; `{{tax_display_policy}}` pendiente. |
| Idioma y tono | Español observado; `{{brand_tone}}` requiere decisión de marca. |
| Propuesta de valor | Catálogo público multisectorial, envíos nacionales y atención personalizada. [E1] |
| CTA de la maqueta | Propuesta de diseño: «Ver catálogo». `{{primary_cta}}` pendiente de aprobación; no es una decisión confirmada del negocio. |
| Modalidad comercial | Tienda con carrito y finalización de compra visibles; no se completó una operación. [E1] |
| Precios | Precios públicos en pesos; política fiscal `{{tax_display_policy}}`. [E1] |
| Cantidades y mínimos | `{{order_rules}}`: mínimos, múltiplos y presentación mayorista no confirmados. |
| Registro B2B | `{{account_approval_policy}}` — no se verificó flujo propio de aprobación. |
| Domicilio | Avellaneda 665, San Juan. El sitio no indica Norte/Sur en su pie: mantener pendiente la orientación y el punto exacto. [E1] |
| Horarios | Lunes a viernes 09:00–21:00; sábados 09:00–13:00, según pie del sitio. [E1] |
| Contactos y redes | Teléfono/WhatsApp del sitio y Linktree: +54 264 617-3499; correo: distribuidoraespana1@gmail.com. Instagram: https://www.instagram.com/distribuidoraespana/; Facebook enlazado desde Linktree: https://www.facebook.com/profile.php?id=61567673560967&sk=about. [E1, E2] |
| Crédito y permisos | `{{credit_policy}}`, `{{buyer_roles}}` — no publicados o no confirmados. |
| Catálogo, stock y sistemas | `{{data_sources}}` — no se obtuvo inventario exportable, precios vigentes ni sistema interno. |
| Fecha y nivel de evidencia | 2026-10-25; publicación propia, directorio o candidato indicados por campo. No se contactó a las empresas. |

## Recursos de marca a obtener

**Recuperado de la página vinculada al negocio**. La descarga no transforma una imagen raster en un archivo vectorial ni acredita derechos de publicación final.

| Recurso | Resultado |
|---|---|
| Imagen de perfil original | [perfil-facebook.jpg](assets/espana_fb/perfil-facebook.jpg); 720 × 720 px. Fuente: https://www.facebook.com/profile.php?id=61567673560967&sk=about |
| Copia PNG de referencia | [logo-referencia.png](assets/espana_fb/logo-referencia.png); conversión raster, sin vectorizar ni quitar fondos. |
| Logo SVG | `{{logo_svg}}` — no localizado; proporcionado por el usuario. |
| Paleta | Colores aproximados muestreados del raster: `#BD0C14`, `#FEC305`. **No son una paleta oficial**; `{{primary_palette_hex}}`, `{{secondary_palette_hex}}` pendientes de aprobación. |
| Tipografía | `{{brand_fonts}}` — no identificar la fuente del logo por apariencia. |
| Fotos de productos/local | `{{product_photos}}`, `{{business_photos}}` — no se recuperó un conjunto de fotos individuales de producto desde Facebook; los enlaces de publicaciones son referencias. |
| Eslogan | `{{tagline}}` — sin eslogan oficial confirmado; no convertir frases promocionales en uno. |
| Contactos | Datos publicados, fuentes y discrepancias en la ficha del negocio; `{{contact_details}}` representa la validación final. |
| Certificaciones y marcas | `{{verified_credentials}}` — no se completan por semejanza de logos o por referencias de terceros. |

![Imagen de perfil recuperada](assets/espana_fb/logo-referencia.png)

Alternativa del sitio propio: [logo-sitio](assets/espana_fb/logo-sitio.png); [producto-ejemplo](assets/espana_fb/producto-ejemplo.png). El producto es una referencia publicada, sin stock ni precio vigente garantizados. El HTML declara Jost y Source Sans Pro en estilos; no se equiparan con un manual de marca.

## Principios de UX/UI aplicados

- Arquitectura por familias visibles en el sitio: herramientas, construcción, electricidad, electrónica, hogar y bazar; buscar por nombre y código. Fuente: https://distribuidoraespana.com.ar/
- Mantener precio, presentación, disponibilidad y acción juntos; hacer explícita cualquier diferencia entre compra minorista y mayorista.
- Conservar búsqueda, filtros, carrito y contacto en móvil; informar carga, errores y estado del pedido.
- No asumir lista protegida, mínimos, crédito ni recompra hasta confirmarlos.
- Aplicar contraste 4,5:1, foco visible, teclado, objetivos táctiles de 44 × 44 CSS y reflujo a 320 px, siguiendo WCAG 2.2 AA: https://www.w3.org/TR/WCAG22/

## Hallazgos de referencias

| ID | URL | Evidencia y límite |
|---|---|---|
| E1 | https://distribuidoraespana.com.ar/ | Sitio propio: rubros, precios, contactos y horarios. HTML público descargado. |
| E2 | https://linktr.ee/distribuidoraespana | Correo y enlaces a redes; WhatsApp redirige al número 542646173499. |
| E3 | https://www.facebook.com/profile.php?id=61567673560967&sk=about | Perfil de Facebook enlazado por Linktree; metadatos e imagen de perfil recuperados. |

Los resultados indexados de Facebook se usan cuando muestran explícitamente el dato; los metadatos públicos sirvieron para descargar la imagen de perfil. No se completaron compras, no se ingresó a cuentas y no se comprobó vigencia por llamada.

## Especificación de páginas

### Contrato de la maqueta y estructura común

- [ ] Usar datos confirmados o `{{...}}` y marcar escenarios simulados.
- [ ] Hacer operables navegación, búsqueda, filtros, cantidades y validaciones dentro del alcance.
- [ ] Representar carga, vacío, error y éxito.
- [ ] No presentar pagos, altas, envíos o pedidos simulados como ejecutados.
- [ ] No tratar la ocultación visual de precios como seguridad real.

Orden: aviso opcional → cabecera → navegación → contenido → pie. Componentes: nombre, buscador, categorías, cuenta, carrito o cotización, contacto y condiciones.

### Inicio

Propuesta basada en catálogo público de herramientas, hogar y bazar; CTA `{{primary_cta}}`. Mostrar categorías confirmadas y ocultar beneficios sin respaldo.

### Catálogo, categoría y búsqueda

Usar categorías verificadas, búsqueda, filtros, contador y fichas. `{{category_attributes}}` y presentación mayorista quedan pendientes. Conservar consulta, filtros y posición al volver.

### Detalle de producto

Mostrar `{{product_name}}`, `{{sku}}`, imagen autorizada, precio público, variante, disponibilidad y acción. `{{minimum_quantity}}`, `{{quantity_step}}` y política de agotados no están confirmados.

### Carrito o cotización

Mantener líneas editables, cantidades, observaciones y logística. Precio, descuento o transporte desconocido debe mostrarse como pendiente. WhatsApp debe preparar el mensaje, no confirmar el envío.

### Finalización y confirmación — condicional

Incluir solo si la compra directa continúa vigente. Revisar artículos, importes, impuestos, entrega y estado pendiente antes de confirmar.

### Registro B2B e ingreso; área de cuenta; pedido rápido

Son módulos condicionales. Requieren confirmar aprobación, precios mayoristas, listas, crédito, historial, recompra y pedido por código antes de diseñarlos.

### Contacto y condiciones comerciales

Mostrar dirección, teléfono, WhatsApp, horarios y cobertura solo con datos validados. Incluir `{{commercial_policies}}` y alternativa textual al mapa.

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

