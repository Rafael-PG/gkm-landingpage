export interface LeadFormInput {
  nombre: string;
  empresa: string;
  telefono: string;
  correo: string;
  servicio: string;
  mensaje: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  iconName: string;
  features: string[];
  specs: string[];
}
