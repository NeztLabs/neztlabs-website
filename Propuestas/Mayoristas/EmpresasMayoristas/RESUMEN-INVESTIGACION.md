# Revisión de las diez fichas mayoristas

Fecha: 2026-10-25. Alcance: diez documentos adjuntos, cruzados con las primeras diez filas del CSV de 39 empresas. Las otras 29 empresas no se investigaron ni se modificaron.

## Resultado

- Las diez fichas tenían datos o decisiones pendientes.
- Se actualizaron contactos, redes, rubros y discrepancias únicamente con evidencia recuperable.
- Se descargaron diez imágenes de perfil desde Facebook: nueve perfiles asociados y un candidato de Formosa. Se incluyen originales y copias PNG raster.
- El candidato de Formosa está físicamente separado en `assets/candidatos/formosa/`.
- Se añadieron un logo horizontal y una imagen de producto del sitio de España cuando la descarga fue posible.
- Los intentos de recuperar fotografías individuales de cuatro publicaciones de Facebook no devolvieron una imagen pública utilizable. No se sustituyeron por imágenes inventadas.
- No se recuperaron logos SVG ni manuales de marca. Paletas muestreadas: aproximaciones del raster; tipografías y decisiones comerciales siguen pendientes donde corresponda.

## Cambios por empresa

| Empresa | Datos incorporados o corregidos | Advertencia principal |
|---|---|---|
| Distribuidora España | Tienda propia, rubro corregido, correo, WhatsApp, Facebook y horarios. | Existe tienda propia; retirar el diagnóstico de «sin web» para esta ficha. |
| Distribuidora Tatito | Teléfono de directorio, Facebook, domicilio corroborado y modalidad mayorista/minorista. | El teléfono antes ausente se localizó en un directorio; pendiente de confirmación directa. |
| Distribuidora Mayorista Varsan | Facebook, rubro, teléfono alternativo, horarios de directorio y conflicto 1096/992. | La coincidencia del teléfono y la dirección histórica vincula el perfil con el negocio; no demuestra que 1096 siga vigente. |
| Distribuidora La Mendocina SRL | Rubro corregido, compradores, redes, correo, teléfono y WhatsApp diferenciado. | Corregir el rubro de alimentos del CSV: se verificó fabricación/comercialización de packaging, envases y descartables. |
| Sogo Mayorista | Contacto corroborado, anuncio sin mínimo y horarios especiales diferenciados. | Teléfono y domicilio corroborados públicamente. |
| Distribuidora 3B | Móvil local, correo recuperado del CSV, rubro a granel y familias de productos. | Facebook publica un móvil de Bahía Blanca distinto del número de Buenos Aires del CSV; conservar ambos con su procedencia. |
| Proveeduría Mayorista | Domicilio, categoría y horarios de directorio; redes e imagen conservadas como candidatas. | Se recuperó la ficha antes inaccesible: domicilio y horarios son datos de directorio, no confirmación directa del dueño. |
| Distribuidora San Esteban | Facebook, teléfono coincidente y evidencia de domicilio 1085 frente a referencia 1130. | El teléfono coincide con CSV y Facebook. |
| OyL Variedades — O&L Variety en el CSV | Identidad OyL Variedades, Facebook, correo, teléfono y rubros; horario contradictorio documentado. | Nombre público identificado como OyL Variedades; O&L Variety se conserva como alias de origen. |
| IPRI Mayorista | WhatsApp/Pedidos, horario publicado, multirrubro y dirección propia 1650 frente a 1660. | 1650 está publicado por la marca; no borrar el antecedente 1660 sin comprobar ubicación física. |

## Cómo usar el paquete

1. Copiar los diez Markdown y la carpeta `assets` a `C:/devs/nezt-page/.agents/NAZA/Mayoristas/EmpresasMayoristas`, manteniendo las rutas relativas.
2. Consultar `mayoristas-top10-enriquecido.csv` como tabla derivada. El CSV original no fue alterado.
3. Revisar discrepancias antes de convertir los datos en contenido público. La extracción no confirma vigencia por contacto directo.
4. Conservar los marcadores `{{...}}` de catálogo, fiscalidad y reglas internas hasta obtener datos del negocio.

## Pendientes transversales

- Razón social y CUIT definitivos: falta documentación fiscal. El candidato de OyL se dejó explícitamente sin confirmar.
- Catálogos exportables, stock actual, unidades, mínimos, bultos, impuestos, crédito, listas B2B y logística contractual.
- SVG original, tipografías, paleta oficial y aprobación final de recursos.
- Formosa: identidad de redes y logo frente al domicilio del CSV, teléfono y correo.
- Varsan: domicilio 1096/992; San Esteban: alcance de 1085/1130; IPRI: dirección propia 1650 frente a 1660 del CSV.

## Comprobación

- [x] Diez documentos revisados y actualizados.
- [x] Imágenes abiertas y comparadas visualmente.
- [x] Rutas relativas de archivos comprobadas.
- [x] Candidatos y datos secundarios señalados.
- [x] Fuentes y fecha incluidas por empresa.
- [x] Originales de entrada y CSV de 39 filas conservados.
- [ ] Confirmación directa de las empresas.

Las fuentes se detallan en cada ficha; `assets/procedencia.json` registra procedencia y huella de los archivos. No se enviaron mensajes ni se realizaron compras.
