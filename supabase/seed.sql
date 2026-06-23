-- ============================================================
-- ADELANTE EUROVILLAS — Datos de ejemplo (seed)
-- Ejecutar DESPUÉS del schema.sql en el SQL Editor
-- ============================================================

-- Procesos de ejemplo
insert into public.procesos (titulo, descripcion, estado_fase, visibilidad, cuerpo) values
(
  'Recepción municipal completa de la urbanización',
  'Exigencia formal a los ayuntamientos de Nuevo Baztán y Villar del Olmo de que completen el proceso de recepción de la totalidad de viales, saneamiento, zonas comunes y demás infraestructuras de Eurovillas.',
  'Escritos presentados — esperando respuesta',
  'publica',
  'La recepción municipal es el paso clave: cuando se complete, los ayuntamientos asumirán la titularidad y mantenimiento de las infraestructuras. La EUCE perderá su razón de ser. Hemos presentado escritos formales ante ambos ayuntamientos exigiendo un calendario concreto.'
),
(
  'Disolución y liquidación de la EUCE',
  'Proceso para exigir la disolución formal de la Entidad Urbanística de Conservación y el cese del cobro de cuotas a los propietarios.',
  'En preparación',
  'publica',
  'Una vez completada la recepción municipal, la EUCE no tiene razón de ser. Estamos preparando la documentación necesaria para exigir su disolución y liquidación formal, y el cese definitivo del cobro de cuotas.'
),
(
  'Seguimiento del respaldo del Defensor del Pueblo',
  'Seguimiento de las actuaciones derivadas del respaldo formal del Defensor del Pueblo de España a los vecinos de Eurovillas.',
  'Activo — en seguimiento',
  'publica',
  'El Defensor del Pueblo ha respaldado formalmente nuestra posición. Estamos coordinando las actuaciones derivadas de esta resolución con nuestras reclamaciones ante las administraciones.'
),
(
  'Análisis jurídico y estrategia legal',
  'Revisión de sentencias, estatutos de la EUCE, convenios de 1989 y legislación aplicable. Estrategia legal detallada del proceso.',
  'En curso (contenido reservado a socios)',
  'privada',
  'Documentación legal detallada disponible solo para socios activos.'
);

-- Comunicados de ejemplo
insert into public.comunicados (titulo, cuerpo, fecha, visibilidad) values
(
  'Bienvenida al portal de socios',
  'Bienvenidos al portal privado de Adelante Eurovillas. Este es el espacio donde encontraréis toda la documentación legal, comunicados internos y el estado actualizado de los procesos que llevamos entre manos.

Estaremos actualizando esta sección regularmente. Si tenéis preguntas o sugerencias, escribidnos a informacion@avade.org.

Gracias por estar aquí.',
  current_date,
  'socios'
);

-- Documentos de ejemplo
insert into public.documentos (titulo, tipo, fecha, visibilidad, descripcion) values
(
  'BOCM — Recepción parcial por el Ayuntamiento de Nuevo Baztán (2022)',
  'Publicación oficial',
  '2022-03-15',
  'publica',
  'Publicación en el Boletín Oficial de la Comunidad de Madrid de la recepción parcial de viales y zonas comunes por el Ayuntamiento de Nuevo Baztán.'
),
(
  'Sentencia TSJM — Anulación asamblea EUCE 2021',
  'Sentencia judicial',
  '2022-11-20',
  'publica',
  'El Tribunal Superior de Justicia de Madrid anula la asamblea de la EUCE de 2021 por falta de transparencia en el escrutinio.'
),
(
  'Convenio de constitución de la EUCE (1989)',
  'Documento fundacional',
  '1989-01-01',
  'publica',
  'Convenio original firmado entre la Asociación de Propietarios, ambos ayuntamientos y la Comunidad de Madrid.'
);
