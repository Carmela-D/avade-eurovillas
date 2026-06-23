-- ============================================================
-- ADELANTE EUROVILLAS — Esquema de base de datos (Supabase)
-- Ejecutar en el SQL Editor de Supabase: https://supabase.com
-- ============================================================

-- Habilitar extensiones necesarias
create extension if not exists "uuid-ossp";

-- ============================================================
-- TABLA: solicitudes_adhesion
-- ============================================================
create table if not exists public.solicitudes_adhesion (
  id          uuid primary key default uuid_generate_v4(),
  nombre      text not null,
  email       text not null,
  telefono    text,
  direccion_parcela text,
  mensaje     text,
  tipo        text not null check (tipo in ('info', 'adhesion')),
  estado      text not null default 'pendiente' check (estado in ('pendiente', 'aprobada', 'descartada')),
  created_at  timestamptz not null default now()
);

-- Índice para búsquedas por estado
create index if not exists idx_solicitudes_estado on public.solicitudes_adhesion(estado);
create index if not exists idx_solicitudes_email on public.solicitudes_adhesion(email);

-- ============================================================
-- TABLA: socios
-- ============================================================
create table if not exists public.socios (
  id          uuid primary key default uuid_generate_v4(),
  user_id     uuid not null references auth.users(id) on delete cascade,
  nombre      text not null,
  email       text not null,
  rol         text not null default 'socio' check (rol in ('socio', 'admin')),
  fecha_alta  date not null default current_date,
  estado      text not null default 'activo' check (estado in ('activo', 'inactivo')),
  constraint socios_user_id_unique unique (user_id)
);

create index if not exists idx_socios_user_id on public.socios(user_id);
create index if not exists idx_socios_email on public.socios(email);

-- ============================================================
-- TABLA: procesos
-- ============================================================
create table if not exists public.procesos (
  id          uuid primary key default uuid_generate_v4(),
  titulo      text not null,
  descripcion text not null,
  estado_fase text not null default 'En curso',
  visibilidad text not null default 'publica' check (visibilidad in ('publica', 'privada')),
  cuerpo      text,
  updated_at  timestamptz not null default now(),
  created_at  timestamptz not null default now()
);

create index if not exists idx_procesos_visibilidad on public.procesos(visibilidad);

-- ============================================================
-- TABLA: documentos
-- ============================================================
create table if not exists public.documentos (
  id          uuid primary key default uuid_generate_v4(),
  titulo      text not null,
  tipo        text not null,
  fecha       date not null,
  url_archivo text,
  visibilidad text not null default 'publica' check (visibilidad in ('publica', 'socios')),
  proceso_id  uuid references public.procesos(id) on delete set null,
  descripcion text,
  created_at  timestamptz not null default now()
);

create index if not exists idx_documentos_visibilidad on public.documentos(visibilidad);
create index if not exists idx_documentos_fecha on public.documentos(fecha desc);

-- ============================================================
-- TABLA: comunicados
-- ============================================================
create table if not exists public.comunicados (
  id          uuid primary key default uuid_generate_v4(),
  titulo      text not null,
  cuerpo      text not null,
  fecha       date not null default current_date,
  visibilidad text not null default 'socios' check (visibilidad in ('publica', 'socios')),
  created_at  timestamptz not null default now()
);

create index if not exists idx_comunicados_fecha on public.comunicados(fecha desc);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

-- Habilitar RLS en todas las tablas
alter table public.solicitudes_adhesion enable row level security;
alter table public.socios enable row level security;
alter table public.procesos enable row level security;
alter table public.documentos enable row level security;
alter table public.comunicados enable row level security;

-- SOLICITUDES: Solo admins pueden leer/modificar
create policy "Admins pueden ver solicitudes"
  on public.solicitudes_adhesion for select
  using (
    exists (
      select 1 from public.socios
      where socios.user_id = auth.uid()
      and socios.rol = 'admin'
      and socios.estado = 'activo'
    )
  );

create policy "Inserción pública de solicitudes"
  on public.solicitudes_adhesion for insert
  with check (true);

create policy "Admins pueden actualizar solicitudes"
  on public.solicitudes_adhesion for update
  using (
    exists (
      select 1 from public.socios
      where socios.user_id = auth.uid()
      and socios.rol = 'admin'
      and socios.estado = 'activo'
    )
  );

-- SOCIOS: Los socios ven su propio perfil; admins ven todos
create policy "Socios ven su propio perfil"
  on public.socios for select
  using (user_id = auth.uid());

create policy "Admins ven todos los socios"
  on public.socios for select
  using (
    exists (
      select 1 from public.socios s
      where s.user_id = auth.uid()
      and s.rol = 'admin'
    )
  );

create policy "Admins pueden insertar socios"
  on public.socios for insert
  with check (
    exists (
      select 1 from public.socios s
      where s.user_id = auth.uid()
      and s.rol = 'admin'
    )
  );

create policy "Admins pueden actualizar socios"
  on public.socios for update
  using (
    exists (
      select 1 from public.socios s
      where s.user_id = auth.uid()
      and s.rol = 'admin'
    )
  );

-- PROCESOS: Públicos = todos; privados = socios
create policy "Procesos públicos visibles para todos"
  on public.procesos for select
  using (visibilidad = 'publica');

create policy "Procesos privados solo para socios"
  on public.procesos for select
  using (
    visibilidad = 'privada' and
    exists (
      select 1 from public.socios
      where socios.user_id = auth.uid()
      and socios.estado = 'activo'
    )
  );

create policy "Admins pueden gestionar procesos"
  on public.procesos for all
  using (
    exists (
      select 1 from public.socios
      where socios.user_id = auth.uid()
      and socios.rol = 'admin'
    )
  );

-- DOCUMENTOS: Públicos = todos; socios = solo socios activos
create policy "Documentos públicos visibles para todos"
  on public.documentos for select
  using (visibilidad = 'publica');

create policy "Documentos de socios solo para socios activos"
  on public.documentos for select
  using (
    visibilidad = 'socios' and
    exists (
      select 1 from public.socios
      where socios.user_id = auth.uid()
      and socios.estado = 'activo'
    )
  );

create policy "Admins pueden gestionar documentos"
  on public.documentos for all
  using (
    exists (
      select 1 from public.socios
      where socios.user_id = auth.uid()
      and socios.rol = 'admin'
    )
  );

-- COMUNICADOS: Solo socios activos (a menos que sea visibilidad pública)
create policy "Comunicados públicos visibles para todos"
  on public.comunicados for select
  using (visibilidad = 'publica');

create policy "Comunicados de socios solo para socios activos"
  on public.comunicados for select
  using (
    visibilidad = 'socios' and
    exists (
      select 1 from public.socios
      where socios.user_id = auth.uid()
      and socios.estado = 'activo'
    )
  );

create policy "Admins pueden gestionar comunicados"
  on public.comunicados for all
  using (
    exists (
      select 1 from public.socios
      where socios.user_id = auth.uid()
      and socios.rol = 'admin'
    )
  );
