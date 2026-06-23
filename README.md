# Adelante Eurovillas (AVADE) — Web oficial

Web de la Plataforma Vecinal Adelante Eurovillas. Stack: Next.js 15 + TypeScript + Tailwind CSS + Supabase + Resend.

---

## Índice rápido

1. [Arrancar en local](#1-arrancar-en-local)
2. [Configurar Supabase](#2-configurar-supabase)
3. [Configurar Resend (email)](#3-configurar-resend-email)
4. [Desplegar en Vercel](#4-desplegar-en-vercel)
5. [Apuntar el dominio avade.org](#5-apuntar-el-dominio-avadeorg)
6. [Aprobar una solicitud de adhesión](#6-aprobar-una-solicitud-de-adhesión)
7. [Publicar en el blog](#7-publicar-en-el-blog)
8. [Gestionar contenido desde Supabase](#8-gestionar-contenido-desde-supabase)
9. [Sustituir imágenes placeholder](#9-sustituir-imágenes-placeholder)
10. [Estructura del proyecto](#10-estructura-del-proyecto)

---

## 1. Arrancar en local

**Requisitos previos:** Node.js 18+ y npm.

```bash
# Instalar dependencias
npm install

# Copiar el archivo de variables de entorno
cp .env.example .env.local

# Editar .env.local y rellenar las variables (ver sección 2 y 3)
# Arrancar el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

> Si no tienes aún las claves de Supabase, el sitio arrancará igualmente con datos de ejemplo. Solo fallarán los formularios y el portal privado.

---

## 2. Configurar Supabase

Supabase es la base de datos y el sistema de autenticación. Es gratuito en la capa Free.

### Paso a paso

**1. Crear cuenta y proyecto**
- Ve a [supabase.com](https://supabase.com) y crea una cuenta gratuita.
- Crea un nuevo proyecto. Nombre sugerido: `adelante-eurovillas`. Elige una región europea (p. ej. `eu-west-1`).
- Guarda la contraseña del proyecto (la necesitarás para administración).

**2. Obtener las claves API**
- En tu proyecto de Supabase: `Settings → API`
- Copia estos tres valores:
  - `Project URL` → va en `NEXT_PUBLIC_SUPABASE_URL`
  - `anon public` key → va en `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - `service_role` key (⚠️ secreto) → va en `SUPABASE_SERVICE_ROLE_KEY`

**3. Crear la base de datos**
- En tu proyecto de Supabase: `SQL Editor → New query`
- Copia y pega el contenido completo de `supabase/schema.sql` y ejecuta.
- Después, copia y pega `supabase/seed.sql` y ejecuta (datos de ejemplo).

**4. Configurar Auth (enlace mágico)**
- Ve a `Authentication → Settings`
- En `Site URL`: pon `https://avade.org` (o `http://localhost:3000` para pruebas locales)
- En `Redirect URLs`: añade `https://avade.org/auth/callback` (y `http://localhost:3000/auth/callback` para local)
- En `Email Auth`: asegúrate de que está habilitado
- En `Magic Links`: deben estar habilitados (lo están por defecto)

**5. Pegar las claves en .env.local**
```
NEXT_PUBLIC_SUPABASE_URL=https://XXXXXXXXXXXXXXXX.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyXXX...
SUPABASE_SERVICE_ROLE_KEY=eyXXX...
```

---

## 3. Configurar Resend (email)

Resend gestiona el envío de emails desde la web (notificaciones de formularios, confirmaciones a usuarios).

### Paso a paso

**1. Crear cuenta**
- Ve a [resend.com](https://resend.com) y crea una cuenta gratuita (hasta 100 emails/día).

**2. Verificar el dominio avade.org**
- En Resend: `Domains → Add domain` → introduce `avade.org`
- Resend te dará unos registros DNS que tienes que añadir en tu proveedor de dominio.
- Hasta que el dominio no esté verificado, los emails solo se pueden enviar a direcciones del propio dominio o usando el dominio de prueba de Resend.

**3. Crear API key**
- En Resend: `API Keys → Create API Key`
- Dale permisos de `Full access`
- Copia la clave (solo se muestra una vez)

**4. Pegar la clave en .env.local**
```
RESEND_API_KEY=re_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
CONTACT_EMAIL=informacion@avade.org
```

> **Nota mientras pruebas en local:** Resend permite enviar emails desde cualquier dirección si usas el dominio `onboarding@resend.dev` como remitente. Puedes cambiar temporalmente `FROM` en `src/lib/email.ts` para pruebas.

---

## 4. Desplegar en Vercel

**1. Subir el código a GitHub**
```bash
git init
git add .
git commit -m "Initial commit — Adelante Eurovillas"
git remote add origin https://github.com/TU_USUARIO/adelante-eurovillas.git
git push -u origin main
```

**2. Conectar con Vercel**
- Ve a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
- `New Project → Import Git Repository` → selecciona el repositorio.
- Framework: `Next.js` (se detecta automáticamente).
- En `Environment Variables`, añade todas las variables del `.env.example` con sus valores reales.
- Haz clic en `Deploy`.

**3. URL de producción**
- Vercel te dará una URL del tipo `adelante-eurovillas.vercel.app`. Úsala para pruebas antes de apuntar el dominio real.

---

## 5. Apuntar el dominio avade.org

**1. En Vercel**
- Ve a tu proyecto → `Settings → Domains`
- Añade `avade.org` y `www.avade.org`
- Vercel te mostrará los registros DNS que tienes que configurar

**2. En tu proveedor de dominio** (donde compraste avade.org)
- Añade los registros A/CNAME que te indica Vercel
- La propagación DNS puede tardar entre unos minutos y 48 horas

**3. Actualizar las URLs**
- En Supabase `Authentication → Settings → Site URL`: cambia a `https://avade.org`
- En `.env.local` (y en Vercel `Environment Variables`): `NEXT_PUBLIC_SITE_URL=https://avade.org`

---

## 6. Aprobar una solicitud de adhesión

Cuando alguien rellena el formulario "Hazte socio", se crea una fila en la tabla `solicitudes_adhesion` con estado `pendiente` y llegará un email de aviso a `informacion@avade.org`.

### Opción A: Desde el panel web (recomendado)

1. Inicia sesión en `/auth/login` con el email de admin
2. Ve al portal → Admin → Solicitudes
3. Revisa la solicitud y haz clic en "Aprobar"
4. Esto activa al socio automáticamente (puede entrar con enlace mágico)

### Opción B: Desde Supabase Table Editor

1. Ve a tu proyecto de Supabase → `Table Editor → solicitudes_adhesion`
2. Localiza la solicitud pendiente
3. Cambia el campo `estado` de `pendiente` a `aprobada`
4. Luego en `Table Editor → socios`, crea manualmente la fila con los datos del socio:
   - `user_id`: el UUID del usuario en `Authentication → Users`
   - `nombre`, `email`, `rol` (`socio`), `fecha_alta`, `estado` (`activo`)

### Dar rol de admin a alguien

En `Table Editor → socios`, cambia el campo `rol` de `socio` a `admin`.

---

## 7. Publicar en el blog

El blog funciona con archivos Markdown (`.mdx`) que viven en el repositorio. No necesita base de datos.

### Crear una nueva entrada

1. Crea un archivo en `src/content/blog/` con nombre en minúsculas y guiones, p. ej.: `actualizacion-junio-2026.mdx`
2. Usa esta estructura al principio del archivo:

```mdx
---
title: "Título de la entrada"
date: "2026-06-22"
excerpt: "Un párrafo corto que aparece en el listado del blog."
author: "Equipo Adelante Eurovillas"
tags: ["actualización", "proceso"]
category: "Novedades"
---

El contenido de la entrada va aquí en Markdown normal.

## Un apartado

Puedes usar **negritas**, *cursivas*, listas, etc.

- Elemento 1
- Elemento 2
```

3. Guarda el archivo, haz `git add` + `git commit` + `git push`, y Vercel lo desplegará automáticamente.

---

## 8. Gestionar contenido desde Supabase

El equipo puede gestionar estos contenidos directamente desde el **Table Editor de Supabase**, sin tocar código:

| Tabla | Qué contiene | Cómo editarlo |
|-------|-------------|---------------|
| `solicitudes_adhesion` | Solicitudes de los formularios | Cambiar `estado` a `aprobada` o `descartada` |
| `socios` | Socios activos con acceso al portal | Añadir/desactivar manualmente |
| `procesos` | Procesos activos (públicos o privados) | Crear filas; `visibilidad`: `publica` o `privada` |
| `documentos` | Librería de documentos | Añadir filas; `visibilidad`: `publica` o `socios` |
| `comunicados` | Comunicados internos para socios | Añadir filas; siempre `visibilidad: socios` |

### Subir documentos (archivos PDF, etc.)

1. En Supabase: `Storage → New bucket` → nombre: `documentos` → acceso privado
2. Sube el archivo al bucket
3. Copia la URL pública (si el bucket es público) o la URL firmada
4. Pega la URL en el campo `url_archivo` de la tabla `documentos`

---

## 9. Sustituir imágenes placeholder

Los placeholders están en `public/images/`. Cuando el equipo tenga las fotos reales:

1. Guarda la foto con el mismo nombre que indica el placeholder (p. ej. `hero-eurovillas-aerea.jpg`)
2. Colócala en `public/images/`
3. Edita el componente correspondiente (`src/components/home/Hero.tsx`, etc.) y sustituye `<PlaceholderImage>` por `<Image>` de Next.js

```tsx
// Antes (placeholder):
<PlaceholderImage description="..." filename="hero-eurovillas-aerea.jpg" />

// Después (imagen real):
import Image from "next/image";
<Image src="/images/hero-eurovillas-aerea.jpg" alt="Vista aérea de Eurovillas" width={800} height={450} />
```

### Lista de imágenes pendientes

| Archivo | Dónde se usa | Descripción |
|---------|-------------|-------------|
| `hero-eurovillas-aerea.jpg` | Hero de la home | Foto aérea de la urbanización |
| `historia-eurovillas-vintage.jpg` | Sección bifurcación (vecino antiguo) | Foto histórica años 70-80 |
| `eurovillas-actual.jpg` | Sección bifurcación (vecino nuevo) | Foto actual: calle, chalet, pinos |
| `historia-eurovillas-panoramica.jpg` | Página Historia | Vista panorámica general |

---

## 10. Estructura del proyecto

```
adelante-eurovillas/
├── src/
│   ├── app/                    # Páginas y rutas (Next.js App Router)
│   │   ├── page.tsx            # Home / Landing
│   │   ├── historia/           # Historia de Eurovillas
│   │   ├── procesos/           # Procesos activos + ficha
│   │   ├── hazte-socio/        # Formulario de adhesión
│   │   ├── blog/               # Blog + artículo
│   │   ├── libreria/           # Librería de documentos
│   │   ├── quienes-somos/      # Quiénes somos + contacto
│   │   ├── portal/             # Zona privada de socios
│   │   │   └── admin/          # Panel de administración
│   │   ├── auth/               # Login y callback de auth
│   │   ├── api/                # Endpoints del servidor
│   │   └── (legal)/            # Aviso legal, privacidad, cookies
│   ├── components/
│   │   ├── ui/                 # Componentes base (Button, Badge, Logo...)
│   │   ├── layout/             # Header, Footer, MobileMenu
│   │   ├── home/               # Secciones de la landing
│   │   └── forms/              # Formularios con validación
│   ├── lib/
│   │   ├── supabase/           # Clientes de Supabase (browser + server)
│   │   ├── email.ts            # Envío de emails con Resend
│   │   └── mdx.ts              # Lectura de posts del blog
│   ├── content/blog/           # Entradas del blog en MDX
│   └── types/                  # Tipos TypeScript compartidos
├── supabase/
│   ├── schema.sql              # Esquema de la base de datos + RLS
│   └── seed.sql                # Datos de ejemplo
├── public/
│   └── images/                 # Imágenes (sustituir los placeholders)
├── .env.example                # Variables de entorno (plantilla)
└── middleware.ts               # Protección de rutas del portal
```

---

## Notas técnicas importantes

- **Autenticación:** Solo enlace mágico por email. No hay contraseñas. Supabase gestiona todo.
- **Row Level Security:** Activa en todas las tablas. Los datos privados son inaccesibles sin sesión válida incluso si alguien intenta llamar a la API directamente.
- **Blog:** Los posts son archivos `.mdx` en el repo. Para publicar, solo hay que hacer commit + push.
- **Aprobación manual:** Las solicitudes de adhesión **nunca se aprueban automáticamente**. Siempre requieren revisión humana.
- **Datos personales:** Ningún dato personal de miembros está en el código ni en el repositorio. Todo está en Supabase, protegido con RLS.
- **Textos legales:** Los textos de aviso legal, privacidad y cookies están marcados como `[BORRADOR]`. Deben revisarse por un profesional antes de publicar definitivamente.

---

## Contacto del proyecto

Email: informacion@avade.org  
Web: https://avade.org
