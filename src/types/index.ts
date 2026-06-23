export type SolicitudTipo = "info" | "adhesion";
export type SolicitudEstado = "pendiente" | "aprobada" | "descartada";
export type SocioRol = "socio" | "admin";
export type Visibilidad = "publica" | "socios";
export type ProcesoVisibilidad = "publica" | "privada";

export interface Solicitud {
  id: string;
  nombre: string;
  email: string;
  telefono?: string;
  direccion_parcela?: string;
  mensaje?: string;
  tipo: SolicitudTipo;
  estado: SolicitudEstado;
  created_at: string;
}

export interface Socio {
  id: string;
  user_id: string;
  nombre: string;
  email: string;
  rol: SocioRol;
  fecha_alta: string;
  estado: "activo" | "inactivo";
}

export interface Proceso {
  id: string;
  titulo: string;
  descripcion: string;
  estado_fase: string;
  visibilidad: ProcesoVisibilidad;
  updated_at: string;
  created_at: string;
}

export interface Documento {
  id: string;
  titulo: string;
  tipo: string;
  fecha: string;
  url_archivo?: string;
  visibilidad: Visibilidad;
  proceso_id?: string;
  created_at: string;
}

export interface Comunicado {
  id: string;
  titulo: string;
  cuerpo: string;
  fecha: string;
  visibilidad: Visibilidad;
  created_at: string;
}

export interface BlogFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  author?: string;
  tags?: string[];
  category?: string;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
}

export interface FormInfoData {
  nombre: string;
  email: string;
}

export interface FormAdhesionData {
  nombre: string;
  apellidos: string;
  email: string;
  telefono?: string;
  direccion_parcela?: string;
  mensaje?: string;
}

export interface FormContactoData {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

export interface Database {
  public: {
    Tables: {
      solicitudes_adhesion: {
        Row: Solicitud;
        Insert: Omit<Solicitud, "id" | "created_at">;
        Update: Partial<Omit<Solicitud, "id" | "created_at">>;
      };
      socios: {
        Row: Socio;
        Insert: Omit<Socio, "id">;
        Update: Partial<Omit<Socio, "id">>;
      };
      procesos: {
        Row: Proceso;
        Insert: Omit<Proceso, "id" | "created_at" | "updated_at">;
        Update: Partial<Omit<Proceso, "id" | "created_at">>;
      };
      documentos: {
        Row: Documento;
        Insert: Omit<Documento, "id" | "created_at">;
        Update: Partial<Omit<Documento, "id" | "created_at">>;
      };
      comunicados: {
        Row: Comunicado;
        Insert: Omit<Comunicado, "id" | "created_at">;
        Update: Partial<Omit<Comunicado, "id" | "created_at">>;
      };
    };
  };
}
