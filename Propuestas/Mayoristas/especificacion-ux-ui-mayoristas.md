## Ficha del negocio

Especificación reutilizable para maquetas funcionales de sitios mayoristas B2B. Todos los valores `{{...}}` son **marcadores pendientes de completar**. Los módulos condicionales se habilitan según las reglas del negocio.

| Campo | Obligatoriedad | Valor a completar |
|---|---|---|
| Nombre comercial | Obligatorio | `{{business_name}}` |
| Razón social e identificación fiscal | Obligatorio para operaciones comerciales | `{{legal_name}}`, `{{tax_id}}` |
| Sector o rubro | Obligatorio | `{{business_sector}}` |
| Comprador objetivo | Obligatorio | `{{buyer_type}}`: comercios, revendedores, empresas u otros |
| País y cobertura comercial | Obligatorio | `{{country}}`, `{{service_area}}` |
| Moneda y presentación de impuestos | Obligatorio | `{{currency}}`, `{{tax_display_policy}}` |
| Idioma | Obligatorio | `{{locale}}` |
| Tono de comunicación | Obligatorio | `{{brand_tone}}` |
| Propuesta de valor verificable | Obligatorio | `{{value_proposition}}` |
| Llamada a la acción principal | Obligatorio | `{{primary_cta}}` |
| Modalidad comercial | Obligatorio | `{{purchase_mode}}`: compra, cotización o pedido asistido |
| Visibilidad de precios | Obligatorio | `{{price_visibility}}`: pública o restringida |
| Reglas de cantidades | Obligatorio | `{{order_rules}}`: unidad, bulto, múltiplos y mínimos; declarar cuando no existan |
| Registro y aprobación B2B | Obligatorio | `{{account_approval_policy}}` |
| Entrega y retiro | Obligatorio | `{{fulfillment_policy}}` |
| Canales de atención | Obligatorio | `{{contact_channels}}` |
| Crédito comercial y permisos de compra | Opcional | `{{credit_policy}}`, `{{buyer_roles}}` |
| Sistemas que aportan catálogo, precios y stock | Opcional para maqueta; obligatorio para integración | `{{data_sources}}` |

## Recursos de marca a obtener

**Regla:** el rubro orienta una propuesta estética, pero no permite deducir la identidad real. Si un recurso no está disponible o verificado, queda como **“Proporcionado por el usuario”**.

| Lista | Recurso | ¿Puede inferirse del rubro? | Entrega o marcador pendiente |
|---|---|---|---|
| ☐ | Logo en SVG | No | **Proporcionado por el usuario:** `{{logo_svg}}` |
| ☐ | Logo en PNG con transparencia | No | **Proporcionado por el usuario:** `{{logo_png}}` |
| ☐ | Paleta primaria con valores HEX | No como identidad real; admite propuesta para aprobación | **Proporcionado por el usuario:** `{{primary_palette_hex}}` |
| ☐ | Paleta secundaria con valores HEX | No como identidad real; admite propuesta para aprobación | **Proporcionado por el usuario:** `{{secondary_palette_hex}}` |
| ☐ | Tipografías y licencias | No; puede proponerse una alternativa autorizada | **Proporcionado por el usuario:** `{{brand_fonts}}` |
| ☐ | Fotografías de productos y variantes | No | **Proporcionado por el usuario:** `{{product_photos}}` |
| ☐ | Fotografías del negocio o logística | No | **Proporcionado por el usuario:** `{{business_photos}}` |
| ☐ | Eslogan | No; puede redactarse una propuesta pendiente de aprobación | **Proporcionado por el usuario:** `{{tagline}}` |
| ☐ | Contactos, domicilio y horarios | No | **Proporcionado por el usuario:** `{{contact_details}}` |
| ☐ | Marcas representadas y certificaciones | No | **Proporcionado por el usuario:** `{{verified_credentials}}` |

Sin logo, utilizar temporalmente el nombre comercial en texto. Sin fotografías, mostrar un contenedor identificado como pendiente; no sustituir productos reales por imágenes que puedan confundir al comprador.

## Principios de UX/UI aplicados

Las siguientes son recomendaciones de diseño derivadas de las referencias y de teoría de usabilidad; no constituyen resultados de pruebas con compradores de estas empresas.

| Principio | Aplicación | Por qué funciona |
|---|---|---|
| Arquitectura según el lenguaje del comprador | Categorías por familia, uso o necesidad; búsqueda por nombre, marca y código; migas de pan | Facilita reconocer dónde buscar sin aprender la organización interna del proveedor. |
| Reconocimiento y consistencia | Mantener etiquetas, unidades y acciones estables; mostrar selecciones y filtros activos | Reduce la carga de memoria y los cambios de interpretación entre páginas. |
| Visibilidad y recuperación | Informar agregado al carrito, validación, carga y errores; conservar cantidades al corregir | El comprador entiende qué ocurrió y puede continuar sin rehacer el pedido. |
| Prevención de errores | Explicar bultos, múltiplos, mínimos y condiciones antes de confirmar | Evita que el usuario descubra restricciones después de invertir tiempo. |

Fuente: [heurísticas de usabilidad de Nielsen](https://www.nngroup.com/articles/ten-usability-heuristics/).

| Principio | Aplicación | Por qué funciona |
|---|---|---|
| Jerarquía visual y proximidad | Agrupar precio, presentación, cantidad y acción; reservar el mayor énfasis para la tarea principal | Tamaño, contraste y agrupación ayudan a identificar prioridades y relaciones. |
| Densidad controlada | Inicio orientado a descubrir; catálogo orientado a comparar; ficha orientada a decidir | Cada página concentra la información necesaria para su tarea sin competir con mensajes secundarios. |

La [jerarquía visual](https://www.nngroup.com/articles/visual-hierarchy-ux-definition/) se construye mediante escala, contraste y agrupación; no depende de llenar la página de colores intensos.

| Principio | Aplicación | Por qué funciona |
|---|---|---|
| Menor fricción B2B | Permitir explorar antes de registrarse cuando la política comercial lo admita; solicitar únicamente datos necesarios | El comprador puede evaluar relevancia antes de completar trámites. |
| Eficiencia para compradores recurrentes | Pedido por código, listas guardadas y recompra con revisión de condiciones actuales | Evita repetir búsquedas en compras de reposición. |
| Confianza comercial | Identidad, cobertura, impuestos, pagos, devoluciones y condiciones visibles | Permite evaluar al proveedor y anticipar compromisos antes de enviar un pedido. |
| Crédito explícito | Mostrar elegibilidad, cupo y vencimiento únicamente cuando correspondan | Evita presentar financiación condicionada como un beneficio universal. |

La recompra y las listas están documentadas por [Grainger](https://www.grainger.com/content/mc/help/order-history); [Faire](https://www.faire.com/how-faire-works) explica verificación de cuentas y [financiación sujeta a elegibilidad](https://www.faire.com/blog/for-retailers/everything-you-need-to-know-about-payment-terms-on-faire/). Son referencias funcionales, no políticas para copiar automáticamente.

**Accesibilidad y adaptación: requisitos verificables**

- Contraste mínimo de texto normal **4,5:1**; texto grande **3:1**. Texto grande: al menos 18 puntos, o 14 puntos en negrita.
- Contraste de **3:1** en información visual necesaria para identificar controles y estados, según las excepciones del criterio correspondiente.
- Objetivos de puntero de al menos **24 × 24 píxeles CSS**, o cumplimiento de las excepciones de WCAG 2.2 AA. Adoptar **44 × 44** como objetivo de diseño para controles frecuentes.
- Operación por teclado, foco visible y no totalmente oculto; etiquetas persistentes, errores asociados al campo y alternativas textuales.
- No comunicar disponibilidad, error o selección solamente mediante color.
- Reflujo a **320 píxeles CSS** sin desplazamiento horizontal general; las tablas que requieren dos dimensiones pueden tener desplazamiento propio.
- Admitir ampliación de texto al 200 %, pegado y gestores de contraseñas; evitar autenticación basada exclusivamente en pruebas cognitivas.
- En móvil, conservar búsqueda, cantidades, condiciones y acción principal; convertir filtros en un panel accesible y evitar superposiciones que tapen controles.

Estas medidas reducen barreras de lectura, precisión y navegación. Son parte del objetivo de conformidad: aprobarlas no sustituye una evaluación completa de [WCAG 2.2 AA](https://www.w3.org/TR/WCAG22/). Consultar también [tamaño mínimo de objetivos](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) y [reflujo](https://www.w3.org/WAI/WCAG21/Understanding/reflow.html).

## Hallazgos de referencias

**Fuente inicial:** se leyó `campana-mayoristas-top10.md`, adjunto disponible; la solicitud lo menciona con “campanas” en plural. Contiene diez empresas, incluida Distribuidora 3B, aunque la excluye del envío comercial.

El archivo es una campaña de prospección: sus diagnósticos y propuestas **no prueban funcionalidades existentes**. Ofrece demo gratuita en 48 horas y servicios de desarrollo y mantenimiento; esos importes no son precios de productos mayoristas.

**Alcance de revisión:** fuentes públicas consultadas el 23 de octubre de 2026. Se verificó contenido textual y estructura publicada. No se completaron compras ni se ingresó en cuentas privadas. No se midieron colores, fuentes, contraste ni comportamiento responsive; esos aspectos visuales permanecen sin verificar.

### Empresas del archivo: extracción y contraste

En todas las propuestas del archivo se plantea una lista de precios protegida para comercios registrados. “No localizado” significa que la búsqueda no permitió confirmar un sitio propio; no demuestra que no exista.

| Empresa y ubicación | Rubro y posicionamiento del archivo | Resultado público verificado y límites | Fuente |
|---|---|---|---|
| **Distribuidora España — San Juan** | Rubro no declarado; menciona almacenes y kioscos como compradores. Propone centralizar catálogo y pedidos por WhatsApp. | **Tiene tienda pública:** categorías, buscador, precios, carrito, cuenta y lista de deseos. Presenta herramientas, electricidad, hogar y bazar. La premisa comercial del archivo requiere actualización. | [Tienda oficial](https://distribuidoraespana.com.ar/) |
| **Distribuidora Tatito — Tucumán** | Rubro no declarado; orienta la propuesta a almacenes y autoservicios. Describe catálogo en Instagram y propone reducir consultas repetidas. Teléfono pendiente. | Se localizó una ficha coincidente; el Instagram indicado no pudo recuperarse. No se verificaron catálogo propio, funciones de compra ni patrones visuales. | [Ficha localizada](https://www.cylex.com.ar/san-miguel-de-tucuman/distribuidora-tatito-11582768.html), [Instagram indicado](https://www.instagram.com/tatitodistribuidora/) |
| **Distribuidora Mayorista Varsan — Santiago del Estero** | Rubro no declarado. El archivo no detecta catálogo ni redes y propone catálogo central y WhatsApp. | Directorio la clasifica como mayorista de alimentos. Apareció un dominio asociado en otra fuente, pero no pudo abrirse; no se verificaron funciones ni diseño. | [Ficha](https://www.cylex.com.ar/santiago-del-estero/distribuidora-mayorista-varsan-11362590.html), [dominio no accesible](https://distribuidoramayoristavarsan.com), [mención del dominio](https://halaman-kuning.cybo.com/AR/santiago-del-estero/pemborong?p=2) |
| **La Mendocina SRL — Catamarca** | El mensaje la presenta como distribuidora de alimentos; propone catálogo y WhatsApp ante ausencia de presencia detectada. | Un directorio coincidente en Caseros 425 describe envases, descartables y bazar gastronómico. **Rubro pendiente de confirmar:** no trasladar la clasificación del archivo a la maqueta. Sitio propio no localizado. | [Directorio consultado](https://miguiaargentina.com.ar/empresas/distribuidora-la-mendocina-srl.html) |
| **Sogo Mayorista — San Rafael** | Rubro no declarado. Ofertas semanales en Instagram/Facebook; propone reunir ofertas y anticipar pedidos para retiro en Mitre 1124. | Sus publicaciones comunican ofertas semanales y compra sin mínimo. No se verificó un flujo web de pedido anticipado ni su diseño. | [Facebook](https://www.facebook.com/sogomayorista/), [oferta semanal](https://www.facebook.com/sogomayorista/videos/-sogo-mayorista-av-mitre-1124-san-rafael-2604104248%EF%B8%8Fac%C3%A1-te-mostramos-la-oferta-s/716548444035260/) |
| **Distribuidora 3B — Bahía Blanca** | Rubro no declarado; menciona almacenes y autoservicios. Catálogo en Instagram/Facebook; propone catálogo y WhatsApp. Excluida del envío comercial. | Publicación propia anuncia venta mayorista/minorista y envíos nacionales. No se verificaron carrito, registro B2B ni patrones visuales de tienda propia. | [Facebook](https://www.facebook.com/p/Distribuidora-3B-100064159118978/), [publicación comercial](https://www.facebook.com/100064159118978/posts/distribuidora-mayorista-y-minorista-3bestamos-en-brasil-977-bahia-blancahacemos-/879138870901409/) |
| **Proveeduría Mayorista — Formosa** | Rubro no declarado. Propone ofertas semanales y pedidos anticipados para retiro en Pedro Bonaccio 1799. Teléfono pendiente. | Se localizó ficha coincidente en esa dirección. No se verificaron sitio propio, catálogo, reserva o diseño. | [Ficha localizada](https://www.cylex.com.ar/formosa/proveeduria-mayorista-11584966.html) |
| **Distribuidora San Esteban — Santiago del Estero** | Rubro no declarado. Describe Instagram, Linktree y grupo de WhatsApp; propone centralizar catálogo y pedidos. | Facebook se presenta como supermercado mayorista. Linktree no pudo abrirse. Existen discrepancias entre perfiles y domicilios públicos: confirmar identidad y sucursal antes de reutilizarlos. | [Facebook localizado](https://www.facebook.com/SanEstebanSrl/), [Linktree indicado](https://linktr.ee/distribuidorasanesteban), [domicilio divergente](https://www.atlashipermayorista.com.ar/supermercado/distribuidora-san-esteban-mayorista/) |
| **O&L Variety — Santa Fe** | Polirrubro, dirigido a kioscos y almacenes. El archivo no detecta catálogo ni redes; propone catálogo y WhatsApp. | Se encontró una mención en directorio con Castelli 3612. No se confirmó sitio propio, surtido, funciones ni diseño. | [Directorio consultado](https://ar.near-place.com/supermercado-el-tunel-avenida-angel-penaloza-6800-santa-fe) |
| **IPRI Mayorista — Corrientes** | Polirrubro; propone catálogo y WhatsApp ante ausencia de presencia detectada. Domicilio consignado: Vidal 1660. | Se localizaron Instagram y Facebook con productos y horarios; publican Vidal **1650**. No se verificó tienda propia. Resolver discrepancia de domicilio. | [Instagram](https://www.instagram.com/ipri_mayorista/), [Facebook](https://www.facebook.com/mayorista.ipri/) |

### Referencias con funciones y estructura verificables

| Empresa / sector | Funciones verificadas | Patrones de presentación verificados | Fuente |
|---|---|---|---|
| **Distribuidora España / herramientas, hogar y bazar** | Búsqueda, categorías, precios públicos y enlaces a carrito, cuenta y deseos. No se probó la compra. | Apertura con productos promocionados y enlaces a ficha; bloques de más vendidos y familias; imágenes de producto y mensajes de envío y atención. La extracción muestra un mensaje de “sin resultados” dentro de ofertas: revisar ese estado antes de usarlo como referencia. Colores y tipografías no verificados. | [Inicio](https://distribuidoraespana.com.ar/) |
| **Grainger / suministros industriales** | Búsqueda por palabra o código, acceso a pedido masivo; documentación de historial, seguimiento, facturas, recompra y listas compartidas. | Navegación organizada por familias, accesos de cuenta y carrito; ayuda con título, explicación y acción. Colores, fuentes y disposición exacta no verificados. | [Historial](https://www.grainger.com/content/mc/help/order-history), [listas](https://www.grainger.com/content/mc/help/my-lists) |
| **Faire / mercado mayorista multisectorial** | Búsqueda, categorías, registro para acceder a precios y verificación del negocio. Documenta filtros por mínimo y financiación para compradores elegibles. | Apertura con propuesta y registro; imágenes, agrupaciones por categorías y marcas, fichas con valoraciones y acceso a precio. Colores y tipografías no verificados. | [Inicio](https://www.faire.com/), [funcionamiento](https://www.faire.com/how-faire-works), [guía de compra](https://www.faire.com/blog/for-retailers/retailer-guide-to-buying-on-faire) |

**Límite de evidencia:** no se verificaron escalas de precio por volumen en estas páginas. Se especifican como módulo condicionado a las reglas del futuro negocio, no como hallazgo observado.

## Especificación de páginas

**Contrato de la maqueta**

- [ ] Utilizar datos aportados o marcadores `{{...}}`; identificar cualquier escenario simulado.
- [ ] Hacer operables navegación, búsqueda, filtros, cantidades y validaciones dentro del alcance acordado.
- [ ] Representar carga, vacío, error y éxito en las funciones principales.
- [ ] No presentar un pago, alta, envío o pedido como ejecutado si solo está simulado.
- [ ] No representar la ocultación visual de precios como seguridad real: la autorización deberá resolverse en la implementación.

### Estructura común

**Orden:** aviso comercial opcional → cabecera → navegación → contenido → pie.

**Componentes:** `{{business_name}}`, buscador, categorías, cuenta, carrito o cotización; contacto, identidad comercial y enlaces a condiciones.

**Aceptación**

- [ ] La ubicación actual es reconocible y el logo o nombre vuelve al inicio.
- [ ] Los menús funcionan con teclado y tacto.
- [ ] La cabecera y el contacto flotante no ocultan contenido ni foco.
- [ ] El buscador permanece disponible en móvil.

### Inicio

**Orden:** propuesta principal → categorías → selección comercial → cómo comprar → condiciones resumidas → confianza y contacto.

**Componentes:** título `{{value_proposition}}`, imagen autorizada, botón `{{primary_cta}}`, tarjetas de categorías, productos y enlaces informativos.

**Requisitos y aceptación**

- [ ] La apertura identifica qué se vende, a quién y cuál es el siguiente paso.
- [ ] El botón principal conduce al flujo definido en `{{purchase_mode}}`.
- [ ] Ofertas y beneficios muestran condiciones y vigencia cuando correspondan.
- [ ] Certificaciones, testimonios y marcas tienen respaldo; se omiten si no existe.
- [ ] Los bloques sin contenido válido se ocultan o muestran un estado útil.

### Catálogo, categoría y resultados de búsqueda

**Orden:** migas de pan y título → búsqueda/consulta → filtros y orden → resultados → navegación de resultados.

**Componentes:** filtros `{{category_attributes}}`, selección activa, contador, tarjetas o filas; nombre, imagen, código, presentación, disponibilidad y precio autorizado.

**Requisitos y aceptación**

- [ ] Buscar por nombre y código devuelve resultados del conjunto disponible.
- [ ] Los filtros se combinan, se pueden quitar individualmente y tienen “Limpiar”.
- [ ] Volver desde una ficha conserva consulta, filtros y posición.
- [ ] Cada resultado distingue precio unitario, precio por bulto y contenido del bulto.
- [ ] El estado sin resultados permite modificar la búsqueda.
- [ ] En móvil, cerrar filtros devuelve el foco al control que los abrió.

### Detalle de producto

**Orden:** identificación → imágenes y compra → condiciones comerciales → especificaciones/documentación → relacionados.

**Componentes:** `{{product_name}}`, `{{sku}}`, variantes, presentación, cantidad, disponibilidad, precio o acceso B2B y acción principal.

**Requisitos y aceptación**

- [ ] Cambiar variante actualiza la información correspondiente.
- [ ] Cantidad y selector respetan `{{minimum_quantity}}` y `{{quantity_step}}`.
- [ ] Si hay precios por volumen, se explican umbrales y escala aplicada.
- [ ] El subtotal distingue cantidad comprada y unidad facturada.
- [ ] Un producto agotado ofrece la alternativa definida en `{{out_of_stock_policy}}`.
- [ ] Fichas técnicas, composición, medidas o seguridad aparecen cuando el rubro las requiere.
- [ ] Agregar informa producto, cantidad y destino sin perder la ficha.

### Carrito o solicitud de cotización

**Orden:** artículos → validaciones → entrega/retiro → resumen → acción y resultado.

**Componentes:** líneas editables, eliminar/deshacer, mínimos, observaciones, impuestos, descuentos autorizados y logística.

**Requisitos y aceptación**

- [ ] Editar cantidades recalcula importes y validaciones.
- [ ] Un mínimo incumplido explica qué falta y cómo resolverlo.
- [ ] Precio, descuento o transporte desconocido aparece como pendiente; no como cero.
- [ ] Una cotización se identifica como solicitud pendiente de respuesta.
- [ ] Si se usa WhatsApp, se prepara un mensaje con códigos, cantidades y presentación; abrirlo no se declara como envío confirmado.
- [ ] Cancelar o volver conserva el carrito según `{{cart_persistence_policy}}`.

### Finalización y confirmación — condicional a compra directa

Se incorpora para completar la compra cuando exista carrito transaccional, patrón presente en la tienda de España.

**Orden:** datos comerciales → entrega → pago → revisión → confirmación.

**Componentes:** formulario comercial, selectores de entrega y pago, resumen revisable, estado y referencia de operación.

**Requisitos y aceptación**

- [ ] Se revisan artículos, importes, impuestos y entrega antes de confirmar.
- [ ] Los errores conservan los campos válidos.
- [ ] Una operación pendiente no se muestra como pagada.
- [ ] La confirmación presenta referencia, estado y próximos pasos; los datos simulados están identificados.

### Registro B2B e ingreso

**Orden:** beneficios y requisitos → datos mínimos → acceso → revisión de solicitud → estado.

**Componentes:** `{{required_registration_fields}}`, ayuda contextual, privacidad, inicio de sesión y recuperación de acceso.

**Requisitos y aceptación**

- [ ] Solo se solicitan datos justificados por `{{account_approval_policy}}`.
- [ ] Se distinguen cuenta creada, pendiente, aprobada y rechazada.
- [ ] Se explica cuándo podrán verse precios o comprarse productos.
- [ ] Los errores indican cómo corregirlos y preservan datos válidos.
- [ ] El acceso admite pegado y gestores de contraseñas.

### Área de cuenta

**Orden:** resumen → pedidos/cotizaciones → detalle y recompra → listas → datos comerciales → crédito y facturación, si aplican.

**Componentes:** resumen de cuenta, historial con filtros, detalle de pedido, listas editables, datos fiscales y documentos autorizados.

**Requisitos y aceptación**

- [ ] Cada pedido muestra referencia, fecha, estado y acceso al detalle.
- [ ] Recomprar carga una propuesta editable y revisa precio, disponibilidad y mínimos actuales.
- [ ] Las listas permiten agregar, quitar y pasar artículos al carrito.
- [ ] Facturas y seguimiento aparecen solo cuando existen.
- [ ] Crédito muestra `{{credit_limit}}`, `{{available_credit}}` y `{{payment_due_dates}}` únicamente a usuarios autorizados.
- [ ] Una cuenta sin historial tiene un siguiente paso claro.

### Pedido rápido — condicional a compra recurrente por código

Justificado por el acceso a pedido masivo de Grainger y sus herramientas de reposición.

**Orden:** instrucciones → filas de código/cantidad → validación → revisión → agregado.

**Componentes:** tabla editable por código, cantidad, descripción, presentación y errores por fila; resumen y botón de agregado.

**Requisitos y aceptación**

- [ ] Cada fila admite `{{sku}}` y cantidad.
- [ ] Códigos desconocidos, duplicados y cantidades inválidas se explican por fila.
- [ ] No se sustituyen artículos automáticamente.
- [ ] Antes de agregar se muestran descripción, presentación y condiciones.
- [ ] La carga de archivos se incorpora solo si `{{bulk_import_enabled}}` está habilitado.

### Contacto y condiciones comerciales

**Orden:** canales y horarios → ubicación/cobertura → consulta → entrega, pagos y posventa.

**Componentes:** enlaces de contacto, horarios, domicilio textual, mapa opcional, formulario y bloques de políticas.

**Requisitos y aceptación**

- [ ] Teléfono, correo y ubicación corresponden a datos confirmados.
- [ ] El formulario valida campos y distingue envío simulado de envío real.
- [ ] Se explican cobertura, retiro, costos/plazos conocidos y tratamiento de faltantes.
- [ ] Se incluyen condiciones de devoluciones, privacidad y compra: `{{commercial_policies}}`.
- [ ] Un mapa tiene alternativa textual; ningún horario o tiempo de respuesta se inventa.

## Sistema de diseño

Los siguientes son **tokens pendientes**. Las escalas sugeridas son decisiones iniciales de diseño, no atributos de las empresas investigadas.

| Grupo | Tokens o marcadores | Guía para completarlos |
|---|---|---|
| Marca | `{{color_brand_primary}}`, `{{color_brand_secondary}}` | HEX aprobados; derivar variantes y comprobar combinaciones accesibles. |
| Superficies y texto | `{{color_background}}`, `{{color_surface}}`, `{{color_text}}`, `{{color_text_muted}}`, `{{color_border}}` | Definir por función; los textos secundarios también deben cumplir contraste. |
| Estados | `{{color_success}}`, `{{color_warning}}`, `{{color_error}}`, `{{color_focus}}` | Acompañar color con texto, icono o borde identificable. |
| Tipografía | `{{font_body}}`, `{{font_heading}}`, `{{font_fallback}}` | Priorizar legibilidad de nombres, códigos e importes; verificar licencia. |
| Escala tipográfica | `{{text_small}}`, `{{text_body}}`, `{{text_heading}}`, `{{text_display}}` | Punto de partida: cuerpo de 1 rem e interlineado de 1,5; ajustar títulos sin recortes. |
| Espaciado | `{{space_unit}}`, `{{space_scale}}` | Propuesta inicial: base de 4 px y escala 4/8/12/16/24/32/48; agrupar por proximidad. |
| Composición | `{{content_max_width}}`, `{{page_gutter}}`, `{{grid_gap}}`, `{{breakpoints}}` | Elegir puntos de cambio cuando el contenido lo requiera; conservar lectura y controles. |
| Forma | `{{radius_control}}`, `{{radius_card}}`, `{{shadow_overlay}}` | Mantener consistencia; reservar elevación para capas y superposiciones. |
| Iconografía | `{{icon_set}}`, `{{icon_size}}`, `{{icon_stroke}}` | Una familia coherente; nombre accesible y texto visible en acciones ambiguas. |
| Imágenes | `{{product_image_ratio}}`, `{{image_background}}`, `{{image_fit}}` | Relación consistente; mostrar el producto completo y diferenciar variantes reales. |

**Estados mínimos de componentes**

| Componente | Estados que debe representar |
|---|---|
| Botón y enlace | Normal, sobrevuelo cuando corresponda, foco, pulsado, deshabilitado y carga |
| Campo y selector | Vacío, completo, foco, error, solo lectura y deshabilitado |
| Producto | Disponible, agotado, variante pendiente y precio restringido |
| Listado | Cargando, resultados, vacío y error recuperable |
| Carrito | Vacío, válido, mínimo incumplido y condición actualizada |
| Cuenta | Visitante, pendiente, aprobada, rechazada y sesión vencida |
| Confirmación | En proceso, éxito, fallo y resultado incierto |

- [ ] Los estados tienen diferencias perceptibles sin depender solo del color.
- [ ] La acción deshabilitada incluye una explicación próxima.
- [ ] Los importes usan formato de `{{locale}}` y moneda `{{currency}}`.
- [ ] La jerarquía se conserva en móvil, escritorio y ampliación.
- [ ] Los cambios relevantes son comunicados también a tecnologías de asistencia.

## Preguntas abiertas

| Dato requerido | Marcador pendiente | Decisión que habilita |
|---|---|---|
| ¿Qué negocio y comprador se atenderán primero? | `{{business_name}}`, `{{business_sector}}`, `{{buyer_type}}` | Arquitectura, lenguaje y contenidos |
| ¿Compra directa, cotización o pedido por WhatsApp? | `{{purchase_mode}}`, `{{primary_cta}}` | Flujo principal y alcance |
| ¿Qué catálogo, fotos y atributos están disponibles? | `{{catalog_source}}`, `{{product_photos}}`, `{{category_attributes}}` | Filtros y fichas |
| ¿Se vende por unidad, bulto, peso, volumen o combinaciones? | `{{selling_units}}`, `{{order_rules}}` | Cantidades, validaciones y subtotales |
| ¿Quién puede ver precios y cómo se aprueba una cuenta? | `{{price_visibility}}`, `{{account_approval_policy}}` | Registro y permisos |
| ¿Hay listas diferenciadas, escalas o crédito? | `{{pricing_policy}}`, `{{credit_policy}}` | Condiciones comerciales |
| ¿Cómo se calculan impuestos, pagos y facturación? | `{{tax_display_policy}}`, `{{payment_methods}}`, `{{invoicing_policy}}` | Resumen y confirmación |
| ¿Qué zonas, plazos y modalidades logísticas existen? | `{{fulfillment_policy}}` | Entrega, retiro y cobertura |
| ¿Cuáles son los recursos de marca autorizados? | `{{brand_assets}}` | Sistema visual |
| ¿Qué contactos, domicilios y políticas están confirmados? | `{{contact_details}}`, `{{commercial_policies}}` | Confianza y atención |
| ¿Qué interacciones se simularán y cuáles tendrán integración? | `{{prototype_scope}}`, `{{data_sources}}` | Criterios de entrega |

**Comprobación final**

- [x] Cubiertas las diez empresas del archivo, incluida Distribuidora 3B.
- [x] Separadas las afirmaciones de campaña, las observaciones públicas y las recomendaciones.
- [x] Presentes las siete secciones solicitadas, en el orden indicado.
- [x] Marcadores pendientes identificados mediante `{{...}}`.
- [x] Funciones adicionales condicionadas y justificadas; sin precios, métricas ni recursos de marca inventados.
- [x] Declarados los límites de revisión visual, acceso y pruebas transaccionales.
