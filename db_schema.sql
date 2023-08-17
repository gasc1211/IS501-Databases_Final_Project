--alter session set "_ORACLE_SCRIPT" = true;
--create user prueba identified by "123456";
--grant "CONNECT" to prueba

--Script que contiene elementos de prueba para la bd "Terminada" que se encuentra en db_schema_final.sql
--OBS: Para evitar errores, ejecutar las instrucciones en el orden en que se encuentran!!!

------------------------------------------------------------
CREATE TABLE Localidades (
    LocalidadID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Direccion VARCHAR(100),
    Telefono CHAR(8),
    CONSTRAINT LocalidadPK PRIMARY KEY(LocalidadID)
);
------------------------------------------------------------
drop table puestos;
CREATE TABLE Puestos (
    PuestoID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Nombre VARCHAR(30),
    CONSTRAINT PuestoPK PRIMARY KEY (PuestoID)
);
------------------------------------------------------------
CREATE TABLE Marcas (
    MarcaID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Nombre CHAR(25),
    CONSTRAINT MarcaPK PRIMARY KEY (MarcaID)
);
------------------------------------------------------------
CREATE TABLE Modelo_Vehiculo(
    ModeloID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    nombreModelo VarChar(15),
    descripcion varChar(150),
    Imagen VARCHAR (100),
    MarcaID INTEGER,
    CONSTRAINT ModeloPK PRIMARY KEY (ModeloID),
    CONSTRAINT Modelo_VehiculoMarcaFK FOREIGN KEY (MarcaID) REFERENCES Marcas(MarcaID)
);
------------------------------------------------------------
CREATE TABLE Categoria_Vehiculo (
    Categoria_VehiculoID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Nombre CHAR(25),
    CONSTRAINT Categoria_VehiculoPK PRIMARY KEY (Categoria_VehiculoID)
);
------------------------------------------------------------
CREATE TABLE Danios(
    DanioID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Nombre VARCHAR(30),
    CONSTRAINT DanioPK PRIMARY KEY (DanioID)
);
------------------------------------------------------------
CREATE TABLE Multas (
    MultaID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Nombre VARCHAR(30),
    Descripcion VARCHAR(100),
    Costo NUMBER,                           --Porque la multa ya tiene esto predefinido
    CONSTRAINT MultaPK PRIMARY KEY (MultaID)
);
------------------------------------------------------------
CREATE TABLE Estatus_Orden (
    EstatusID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Nombre VARCHAR(50),
    Descripcion VARCHAR(100),
    CONSTRAINT EstatusPK PRIMARY KEY (EstatusID)
);
------------------------------------------------------------
CREATE TABLE Clientes (
    ClienteID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Nombres VARCHAR(30),
    Apellidos VARCHAR(30),
    DNI CHAR(13) UNIQUE,
    Licencia CHAR(13),
    Celular CHAR(8),
    CorreoElectronico VARCHAR(35),
    Direccion VARCHAR(100),     --Agregada recientemente
    Usuario VARCHAR(30) UNIQUE NOT NULL,        --Para identificaciï¿½n
    Contrasenia VARCHAR(30),    
    CONSTRAINT ClientePK PRIMARY KEY (ClienteID)
);
------------------------------------------------------------
CREATE TABLE ListaNegra_Clientes (
    ListaNegraID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    ClienteID INTEGER,
    Motivo VARCHAR(100),
    CONSTRAINT ListaNegraPK PRIMARY KEY (ListaNegraID),
    CONSTRAINT ListaNegraIDClienteBaneadoFK FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID)
);
------------------------------------------------------------
CREATE TABLE Tipo_Tarjeta (
    Tipo_TarjetaID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Nombre VARCHAR(30),
    CONSTRAINT Tipo_TarjetasPK PRIMARY KEY (Tipo_TarjetaID),
);
------------------------------------------------------------
CREATE TABLE Tarjetas (
    TarjetaID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    ClienteID INTEGER,
    Num_Tarjeta CHAR(16) UNIQUE,
    CSC CHAR(3),
    Fecha_Vencimiento DATE,
    Tipo_TarjetaID INTEGER,                          
    CONSTRAINT TarjetasPK PRIMARY KEY (TarjetaID),
    CONSTRAINT TarjetasClienteFK FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID),
    CONSTRAINT TarjetasTipo_TarjetaID FOREIGN KEY (Tipo_TarjetaID) REFERENCES Tipo_Tarjeta(Tipo_TarjetaID)
);
------------------------------------------------------------
CREATE TABLE Empleados (
    EmpleadoID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Nombres VARCHAR(30),
    Apellidos VARCHAR(30),
    DNI CHAR(13) UNIQUE,
    Celular CHAR(8),
    PuestoID INTEGER,
    Sueldo NUMBER,
    Direccion VARCHAR(50),
    Usuario VARCHAR(30) UNIQUE NOT NULL,
    Contrasenia VARCHAR(30),
    CONSTRAINT EmpleadoPK PRIMARY KEY (EmpleadoID),
    CONSTRAINT EmpleadoPuestoFK FOREIGN KEY (PuestoID) REFERENCES Puestos(PuestoID)
);
------------------------------------------------------------
CREATE TABLE Vehiculos (
    VehiculoID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Categoria_vehiculoID INTEGER,
    ModeloID INTEGER,                                       --De aqui se extrae la Marca
    Kilometraje NUMBER,
    IntervaloMantenimiento NUMBER,
    ObservacionesVehiculo VARCHAR(200),
    Precio NUMBER, 
    Combustible VARCHAR(30),
    CONSTRAINT VehiculoPK PRIMARY KEY (VehiculoID),
    CONSTRAINT ModeloVehFK FOREIGN KEY (ModeloID) REFERENCES Modelo_Vehiculo(ModeloID),
    CONSTRAINT VehiculoCategoria_VehiculoFK FOREIGN KEY (Categoria_VehiculoID) REFERENCES Categoria_Vehiculo(Categoria_VehiculoID)
);
------------------------------------------------------------
CREATE TABLE Extras (
    ExtraID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Nombre VARCHAR(50),
    Descripcion VARCHAR(100),
    Costo NUMBER,
    Imagen VARCHAR (100),
    CONSTRAINT ExtraPK PRIMARY KEY (ExtraID)
);
------------------------------------------------------------
CREATE TABLE Caracteristicas (
    CaracteristicaID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Nombre VARCHAR(50),
    Descripcion VARCHAR(100),
    CONSTRAINT CaracteristicaPK PRIMARY KEY (CaracteristicaID)
);
------------------------------------------------------------
drop table Seguro
CREATE TABLE Seguro (
    SeguroID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Nombre VARCHAR(50),
    Descripcion VARCHAR(100),
    Costo NUMBER,
    CONSTRAINT SeguroPK PRIMARY KEY (SeguroID)
);
------------------------------------------------------------
CREATE TABLE Ordenes (
    OrdenID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Fecha_Hora DATE,
    EstatusID INTEGER,              --Pendiente, Activo, Finalizada
    VehiculoID INTEGER,
    Localidad_EntregaID INTEGER,
    Localidad_DevolucionID INTEGER,
    SeguroID INTEGER,
    Fecha_Entrega DATE,
    Fecha_Devolucion DATE,
    ClienteID NUMBER,
    Descrip_Extras VARCHAR(200),
    CONSTRAINT OrdenPK PRIMARY KEY (OrdenID),
    CONSTRAINT OrdenesEstatusFK FOREIGN KEY (EstatusID) REFERENCES Estatus_Orden(EstatusID),
    CONSTRAINT OrdenesClienteFK FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID),
    CONSTRAINT OrdenesVehiculoFK FOREIGN KEY (VehiculoID) REFERENCES Vehiculos(VehiculoID),
	CONSTRAINT OrdenesLocalidadEntrega FOREIGN KEY (Localidad_EntregaID) REFERENCES Localidades(LocalidadID),
    CONSTRAINT OrdenesLocalidadDevolucion FOREIGN KEY (Localidad_DevolucionID) REFERENCES Localidades(LocalidadID),
    CONSTRAINT SeguroFK FOREIGN KEY (SeguroID) REFERENCES Seguro(SeguroID)
);
------------------------------------------------------------
CREATE TABLE Reporte_Inicial (
    ReporteInicialID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    OrdenID INTEGER,
    Fecha_Entrega DATE,
    Kilometraje_Inicial NUMBER,
    ReceptorID INTEGER,
    Observaciones VARCHAR(200),
    CONSTRAINT ReportePK PRIMARY KEY (ReporteInicialID),
    CONSTRAINT ReporteOrdenFK FOREIGN KEY (OrdenID) REFERENCES Ordenes(OrdenID),
    CONSTRAINT ReporteReceptorFK FOREIGN KEY (ReceptorID) REFERENCES Empleados(EmpleadoID)
);
------------------------------------------------------------
CREATE TABLE Reporte_Final (
    ReporteFinalID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    OrdenID INTEGER,
    Fecha_Recepcion DATE,
    Kilometraje_Final NUMBER,
    ReceptorID INTEGER,
    Observaciones VARCHAR(200),
    CONSTRAINT ReporteFinalPK PRIMARY KEY (ReporteFinalID),
    CONSTRAINT ReporteFinalOrdenFK FOREIGN KEY (OrdenID) REFERENCES Ordenes(OrdenID),
    CONSTRAINT ReporteFinalReceptorFK FOREIGN KEY (ReceptorID) REFERENCES Empleados(EmpleadoID)
);
------------------------------------------------------------
CREATE TABLE Facturas (
    FacturaID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    OrdenID INTEGER,
    ReporteFinalID INTEGER,
    ReporteInicialID INTEGER,
    Descripcion VARCHAR(50),        --Es necesario?
    Subtotal NUMBER,
    Descuento NUMBER,
    Impuesto_Venta NUMBER,
    Total NUMBER,
    CONSTRAINT FacturaPK PRIMARY KEY (FacturaID),
    CONSTRAINT FacturasOrdenFK FOREIGN KEY (OrdenID) REFERENCES Ordenes(OrdenID),
    CONSTRAINT FacturasReporteFinalFK FOREIGN KEY (ReporteFinalID) REFERENCES Reporte_Final(ReporteFinalID),
    CONSTRAINT FacturasReporteInicialFK FOREIGN KEY (ReporteInicialID) REFERENCES Reporte_Inicial(ReporteInicialID)  -- En caso de poner elreporteInicialID
);
------------------------------------------------------------
CREATE TABLE DaniosXReporte (
    ReporteID INTEGER NOT NULL, --Por reporte final
    DanioID INTEGER NOT NULL,
    Costo NUMBER,
    Descripcion VARCHAR(100),
    CONSTRAINT DRReporteFK FOREIGN KEY (ReporteID) REFERENCES Reporte_Final(ReporteFinalID),
    CONSTRAINT DRDanioFK FOREIGN KEY (DanioID) REFERENCES Danios(DanioID)
);
------------------------------------------------------------
CREATE TABLE MultaXReporte (
    ReporteID INTEGER NOT NULL, --Por reporte final
    MultaID INTEGER NOT NULL,
    CONSTRAINT MRReporteFK FOREIGN KEY (ReporteID) REFERENCES Reporte_Final(ReporteFinalID),
    CONSTRAINT MRMultaFK FOREIGN KEY (MultaID) REFERENCES Multas(MultaID)
);
------------------------------------------------------------
CREATE TABLE CaracteristicasXVehiculo (
    VehiculoID INTEGER NOT NULL,
    CaracteristicaID INTEGER NOT NULL,
    CONSTRAINT CVVehiculoFK FOREIGN KEY (VehiculoID) REFERENCES Vehiculos(VehiculoID),
    CONSTRAINT CVCaracteristicaFK FOREIGN KEY (CaracteristicaID) REFERENCES Caracteristicas(CaracteristicaID)
);
------------------------------------------------------------
CREATE TABLE ExtrasXOrden (
    OrdenID INTEGER NOT NULL,
    ExtraID INTEGER NOT NULL,
    CONSTRAINT EOOrdenFK FOREIGN KEY (OrdenID) REFERENCES Ordenes(OrdenID),
    CONSTRAINT EOExtraFK FOREIGN KEY (ExtraID) REFERENCES Extras(ExtraID)
);
------------------------------------------------------------