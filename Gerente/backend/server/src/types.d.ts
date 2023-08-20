export type Localidades = {
  localidadID: number;
  direccion: string;
  telefono: string;
};

export type Clientes = {
  clienteID: number;
  nombres: string;
  apellidos: string;
  dni: string;
  rtn: string;
  licencia: string;
  celular: string;
  correoElectronico: string;
};

export type ListaNegra = {
  clienteID: number;
  motivo: string;
};

export type Tarjetas = {
  tarjetaID: number;
  clienteID: number;
  num_Tarjeta: string;
  csc: string;
  fecha_Vencimiento: string;
  direccion: string;
};

export type Puestos = {
  puestoID: number;
  nombre: string;
};

export type Empleado = {
  empleadoID: number;
  nombres: string;
  apellidos: string;
  dni: string;
  celular: string;
  puestoID: number;
  sueldo: number;
  direccion: string;
};

export type Marcas = {
  marcaID: number;
  nombre: string;
};

export type Categoria = {
  categoriaID: number;
  nombre: string;
};

export type Estado_Vehiculo = {
  estadoVehiculoID: number;
  nombre: string;
  descripcion: string;
};

export type Vehiculos = {
  vehiculoID: number;
  marcaID: number;
  categoriaID: number;
  modeloID: string;
  color: string;
  kilometraje: number;
  combustible: string;
  automatico: boolean;
  estadoVehiculoID: number;
  intervaloMantenimiento: number;
};

export type Daños = {
  dañoID: number;
  nombre: string;
  descripcion: string;
};

export type Multas = {
  multaID: number;
  nombre: string;
  descripcion: string;
};

export type Extras = {
  extraID: number;
  nombre: string;
  descripcion: string;
  costo: number;
  categoriaID: number;
};

export type Caracteristicas = {
  caracteristicaID: number;
  nombre: string;
  descripcion: string;
};

export type Estatus = {
  estatusID: number;
  nombre: string;
  descripcion: string;
};

export type Seguro = {
  seguroID: number;
  nombre: string;
  descripcion: string;
  costo: number;
};

export type Ordenes = {
  ordenID: number;
  fecha_Hora: string;
  empleadoID: number;
  clienteID: number;
  vehiculoID: number;
  localidad_EntregaID: number;
  fecha_Entrega: string;
  localidad_DevlucionID: number;
  Fecha_Devolucion: string;
  seguroID: number;
};

export type Facturas = {
  facturaID: number;
  ordenID: number;
  reporteFinalID: number;
  tarjetaID: number;
  descripcion: string;
  subtotal: number;
  descuento: number;
  impuesto_Venta: number;
  impuesto_Turismo: number;
  total: number;
};

export type Reporte_Inicial = {
  reporteInicialID: number;
  ordenID: number;
  fecha_Entrega: string;
  kilometraje_Iicial: number;
  receptorID: number;
  observaciones: string;
};

export type Reporte_Final = {
  reporteFinalID: number;
  ordenID: number;
  fecha_Recepcion: string;
  kilometraje_Finl: number;
  receptorID: number;
};

export type DañosXReporte = {
  reporteID: number;
  dañoID: number;
  costo: number;
};

export type MultaXReporte = {
  reporteID: number;
  multaID: number;
  costo: number;
};

export type CaracteristicasXVehiculo = {
  vehiculoID: number;
  caracteristicaID: number;
};

export type ExtrasXOrden = {
  ordenID: number;
  extraID: number;
};
