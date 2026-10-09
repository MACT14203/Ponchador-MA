# Ponche · Mayagüez Academy

App de reloj ponchador para los estudiantes. Funciona como el reloj de un trabajo:
el estudiante poncha entrada y salida, y la app lleva sola las tardanzas, las ausencias
y las horas.

---

## Archivos

| Archivo | Para qué es |
|---|---|
| `index.html` | La app completa. Logo y fondo de la escuela ya vienen incluidos dentro. |
| `manifest.json` | Para que se pueda instalar como app. |
| `sw.js` | Para que funcione sin internet. |
| `icon-192.png`, `icon-512.png`, `icon-maskable.png` | Íconos de la app. |
| `.nojekyll` | Archivo vacío que le dice a GitHub que publique los archivos tal cual. |

> `index.html` funciona solo, con doble clic, aunque no tengas los demás archivos.
> Los otros hacen falta para instalarla como app y para que abra sin internet.

---

## Ponerla en GitHub Pages

**Todo esto se hace desde el navegador, no hace falta instalar nada.**

1. Entra a [github.com/new](https://github.com/new).
2. Nombre del repositorio: `ponche-ma`. Déjalo en **Public** — GitHub Pages gratis solo
   publica repositorios públicos. (El código queda visible; los registros de los
   estudiantes **no**, porque viven en la tableta de cada maestro, no en GitHub.)
3. **Create repository**.
4. En la pantalla que sale, oprime **uploading an existing file**.
5. Arrastra **el contenido** de esta carpeta — los archivos sueltos, no la carpeta.
   Si `.nojekyll` no se ve en tu Finder, oprime `Cmd + Shift + .` para mostrar
   los archivos ocultos.
6. Abajo, **Commit changes**.
7. Ve a **Settings ▸ Pages**. En *Source* escoge **Deploy from a branch**, rama
   **main** y carpeta **/ (root)**. **Save**.
8. Espera dos o tres minutos y recarga esa misma página: arriba aparece la dirección,
   tipo `https://tuusuario.github.io/ponche-ma/`.
9. Pásale esa dirección a cada maestro.

### Cuando hagas cambios

Sube el `index.html` nuevo **y** el `sw.js` con el número de caché subido
(`ponche-ma-v2` → `ponche-ma-v3`, dentro del archivo, primera línea de código).
Si no cambias ese número, las tabletas siguen abriendo la versión vieja aunque
subas la nueva.

Para reemplazar un archivo en GitHub: entra al archivo, ícono del lápiz,
pega el contenido nuevo, **Commit changes**.

---

## Instalarla en la tableta del maestro

- **iPad / iPhone:** abre la dirección en Safari ▸ botón Compartir ▸ **Añadir a pantalla de inicio**.
- **Android / Chrome:** menú de tres puntos ▸ **Instalar aplicación**.
- **Computadora (Chrome / Edge):** ícono de instalar en la barra de direcciones.

Después de instalada abre sin internet. La cámara para leer los carnets QR
**solo funciona si la página se abre por `https://`** (GitHub Pages lo es). Si abres
el archivo con doble clic, todo lo demás sirve, pero el escáner no.

---

## Si el escáner de QR no lee en alguna computadora

La app trae **su propio lector de códigos incluido**, así que funciona en Windows,
en Mac, en Firefox y hasta sin internet. Si aun así no lee, abre el escáner y
despliega **Diagnóstico de la cámara**: ahí dice exactamente qué está pasando.

| Lo que dice el diagnóstico | Qué pasa y qué hacer |
|---|---|
| `Contexto seguro .... NO` | La página no se abrió por `https://`. Usa la dirección de GitHub Pages, no el archivo del disco. |
| `Cámaras vistas ..... 0` | El sistema no ve ninguna cámara. Revisa que esté conectada y encendida. |
| Error `NotAllowedError` | El navegador bloqueó la cámara. Candado 🔒 en la barra de direcciones ▸ permitir cámara ▸ recargar. |
| Error `NotReadableError` | Otro programa tiene la cámara ocupada: Zoom, Teams, Meet, OBS. Ciérralo y oprime **Reintentar**. |
| `Brillo promedio .... 0` (o muy bajo) | La cámara manda imagen negra: tapa física cerrada, interruptor de privacidad apagado, o la agarró otro programa. |
| Cuenta cuadros pero no lee | Es asunto de enfoque o luz. Acerca el carnet hasta llenar el recuadro, evita el reflejo del plástico y busca más luz. |

Si la computadora tiene varias cámaras (webcam, cámara virtual de OBS, DroidCam),
arriba del video sale una **lista para escoger cuál usar**. La app recuerda la que elijas.

Y pase lo que pase, siempre se puede escribir el código del carnet a mano en el
campo de abajo: el ponche queda igual de bueno.

---

## ⚠️ Lo más importante: el respaldo

**Cada maestro lleva su propio registro en su propio equipo. No hay nube y no se sincroniza nada.**

Eso quiere decir:

- Lo que poncha un maestro en su tableta **no** aparece en la tableta de otro.
- **Si el maestro cambia de equipo, los registros no se pasan solos.** Hay que
  descargar el respaldo en el equipo viejo y restaurarlo en el nuevo.
- Si se borran los datos del navegador, se reinstala el sistema, se cambia de navegador
  o el equipo se daña, **el registro se pierde**.

Por eso, la regla para los maestros:

> **Descarga el respaldo (.json) todas las semanas** — Ajustes ▸ Descargar respaldo —
> y guárdalo en Google Drive, en un correo o en una memoria.

La app pone un aviso amarillo arriba cuando pasan 7 días sin respaldar.

El PDF y el CSV sirven para leer, imprimir y archivar. **Solo el archivo `.json`
restaura la app** con todos los estudiantes, fotos y ponches.

---

## Cómo se usa

1. **Estudiantes ▸ Grupos** — crea los grupos y ponle a cada uno su horario.
   Escribes **la hora una sola vez**, marcas los días que aplican y oprimes
   **Aplicar a los días marcados**. Hay atajos: *Lun a Vie*, *L·W·V*, *M·J*, *Sábado*.
   Si algún día tiene hora distinta, se ajusta en *Ver o ajustar día por día*.
   La hora de entrada es la que decide si hay tardanza.
2. **Estudiantes ▸ + Estudiante** — nombre, foto, grupo y método de ponche.
3. Deja la tableta en la pantalla **Ponche**. El estudiante toca su foto, escanea su
   carnet o escribe su PIN.
4. Al terminar, **Cerrar el día**: marca las ausencias y cierra las salidas que
   nadie ponchó.
5. **Reportes** — PDF del día y resumen mensual acumulado.

### Los colores del borde

| Color | Qué significa |
|---|---|
| 🔴 Rojo | Fuera de turno — no ha ponchado |
| 🟢 Verde | Dentro de turno, llegó a tiempo |
| 🟠 Ámbar | Dentro de turno, pero llegó tarde |
| ⚪ Gris | Ya completó su turno de hoy |
| 🔵 Azul | Ausencia excusada |

El 🔥 en la esquina es la racha de días seguidos llegando a tiempo.

### Métodos de ponche

Se escogen por grupo, y se pueden cambiar estudiante por estudiante:

- **Tocar su foto** — el más rápido; bueno para los pequeños.
- **Carnet QR** — el más parecido a un trabajo real. El código es interno (`MA-XXXXXX`)
  y nunca lleva el nombre.
  - Dentro del perfil de cada estudiante hay un **generador de QR**: se ve el código en
    pantalla y se puede **descargar solo el QR** (PNG suelto, para Canva o una plantilla
    propia), **descargar el carnet completo** (PNG 660×960 con logo, foto, nombre y
    código) o imprimirlo directo.
  - **PDF a tamaño real:** en el perfil, *Carnet en PDF · tamaño real de ID*. Sale una hoja
    8½×11 con la tarjeta midiendo **5,4 × 8,6 cm** — la medida exacta de una licencia o
    tarjeta de crédito (CR80) — con guías de corte.
  - **Todo el grupo:** *Estudiantes ▸ Carnets QR* ▸ escoger grupo ▸ **Descargar PDF**.
    Salen **9 carnets por página**; la app te dice cuántas páginas antes de bajarlo.
  - Al imprimir, pon la impresora en **100% / Tamaño real**. Con "Ajustar a la página"
    salen más chicos y no entran en los portacarnets.
  - Si se pierde un carnet: **Generar código nuevo** y guardar. El viejo deja de servir.

---

## Avisos automáticos

| Aviso | Qué hace |
|---|---|
| **Se acaba el turno** | Cuando faltan X minutos para la hora de salida y el estudiante no ha ponchado, su tarjeta se pone anaranjada, vibra y pulsa. En tabletas el equipo vibra también. |
| **Ponche olvidado** | Si un día se le quedó la entrada o la salida sin ponchar, la próxima vez que poncha le sale una alerta diciendo **qué día** fue y **qué le faltó**. Sale una sola vez por cada día olvidado. |

Los dos se prenden y se apagan en **Ajustes ▸ Avisos**, junto con los minutos de
anticipación y la vibración.
- **PIN** — cuatro dígitos; evita que unos ponchen por otros sin tener que imprimir nada.

### Si el maestro se equivoca en una hora

**Registro ▸ Editar** en la fila. Se puede cambiar entrada, salida o estado, y escribir
el motivo. Queda una marca ✎ en el reporte y una línea en la **bitácora de cambios**,
con la hora en que se hizo la corrección.

---

## Cambiar el logo o el fondo

Ya vienen puestos los de Mayagüez Academy. Para cambiarlos: **Ajustes ▸ Apariencia**,
subir el archivo. No hay que tocar el código.

---

## Detalles técnicos

- Todo en un solo archivo HTML. Sin servidor, sin base de datos, sin cuentas.
- Los datos viven en `localStorage` (unos 5 MB por navegador).
- Las fotos se reducen a 300 px antes de guardarse; con eso caben unos 200 estudiantes.
  El contador de espacio usado está al final de la pestaña **Ayuda**.
- Los códigos QR se generan dentro de la app, sin internet.
- El lector usa la cámara del equipo (`BarcodeDetector`, o `jsQR` donde no exista).
  Si la cámara falla, siempre se puede escribir el código del carnet a mano.
