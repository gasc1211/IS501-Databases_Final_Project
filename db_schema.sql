USE [Rentadora];

CREATE TABLE Localidades (
    LocalidadID char(5),
    Direccion varchar(100),
    Telefono char(8)
    CONSTRAINT LocalidadPK PRIMARY KEY (LocalidadID)
);

CREATE TABLE Clientes (
    ClienteID char(5),
    Nombres varchar(30),
    Apellidos varchar(30),
    DNI char(13),
    RTN char(13),
    Licencia char(13),
    Celular char(8),
    CONSTRAINT ClientePK PRIMARY KEY (ClienteID)
);

CREATE TABLE DatosPago (
    DatosPagoID char(5),
    ClienteID char(5),
    Direccion varchar(100),
    Num_Tarjeta char(16) UNIQUE,
    CSC char(5),
    Efectivo bit,
    CONSTRAINT DatosPagoPK PRIMARY KEY (DatosPagoID),
    CONSTRAINT DatosPagoClienteFK FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID)

);

CREATE TABLE Puestos (
    PuestoID char(5),
    Nombre varchar(50),
    CONSTRAINT PuestoPK PRIMARY KEY (PuestoID)
);

CREATE TABLE Empleado (
    EmpleadoID char(5),
    Nombres varchar(30),
    Apellidos varchar(30),
    DNI char(13) UNIQUE,
    Celular char(8),
    PuestoID char(5),
    Sueldo money,
    Direccion varchar(50),
    CONSTRAINT EmpleadoPK PRIMARY KEY (EmpleadoID),
    CONSTRAINT EmpleadoPuestoFK FOREIGN KEY (PuestoID) REFERENCES Puestos(PuestoID)
);

CREATE TABLE Marcas (
    MarcaID char(5),
    Nombre char(25),
    CONSTRAINT MarcaPK PRIMARY KEY (MarcaID)
);

CREATE TABLE Categoria (
    CategoriaID char(5),
    Nombre char(25),
    CONSTRAINT CategoriaPK PRIMARY KEY (CategoriaID)
);

CREATE TABLE Vehiculos (
    VehiculoID char(5),
    MarcaID char(5),
    CategoriaID char(5),
    ModeloID char(5),
    Color varchar(15),
    Kilometraje float,
    Combustible varchar(10),
    CONSTRAINT VehiculoPK PRIMARY KEY (VehiculoID),
    CONSTRAINT VehiculoCategoriaFK FOREIGN KEY (CategoriaID) REFERENCES Categoria(CategoriaID),
	CONSTRAINT VehiculosMarcaFK FOREIGN KEY (MarcaID) REFERENCES Marcas(MarcaID),
);

CREATE TABLE Daños (
    DañoID char(5),
    Descripcion varchar(100),
    Costo money,
    CONSTRAINT DañoPK PRIMARY KEY (DañoID)
);

CREATE TABLE Extras (
    ExtraID char(5),
    Nombre varchar(50),
    Descripcion varchar(100),
    Costo money,
    CategoriaID char(5),
    CONSTRAINT ExtraPK PRIMARY KEY (ExtraID),
    CONSTRAINT ExtrasCategoriaFK FOREIGN KEY (CategoriaID) REFERENCES Categoria(CategoriaID)
);

CREATE TABLE Caracteristicas (
    CaracteristicaID char(5),
    Nombre varchar(50),
    Descripcion varchar(100),
    CONSTRAINT CaracteristicaPK PRIMARY KEY (CaracteristicaID)
);

CREATE TABLE Estatus (
    EstatusID char(5),
    Nombre varchar(50),
    Descripcion varchar(100)
    CONSTRAINT EstatusPK PRIMARY KEY (EstatusID)
);

CREATE TABLE Ordenes (
    OrdenID char(5),
    Fecha_Hora datetime,
    EmpleadoID char(5),
    ClienteID char(5),
    VehiculoID char(5),
    Localidad_EntregaID char(5),
    Fecha_Hora_Entrega datetime,
    Localidad_DevolucionID char(5),
    Fecha_Hora_Devolucion datetime,
    EstatusID char(5),
    CONSTRAINT OrdenPK PRIMARY KEY (OrdenID),
    CONSTRAINT EmpleadoFK FOREIGN KEY (EmpleadoID) REFERENCES Empleado(EmpleadoID),
    CONSTRAINT OrdenesClienteFK FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID),
    CONSTRAINT OrdenesVehiculoFK FOREIGN KEY (VehiculoID) REFERENCES Vehiculos(VehiculoID),
    CONSTRAINT OrdenesEstatusFK FOREIGN KEY (EstatusID) REFERENCES Estatus(EstatusID),
	CONSTRAINT OrdenesLocalidadEntrega FOREIGN KEY (Localidad_DevolucionID) REFERENCES Localidades(LocalidadID)
);

CREATE TABLE Facturas (
    OrdenID char(5),
    FacturaID char(15),
    DatosPagoID char(5),
    Subtotal money,
    Descuento money,
    Impuesto_Venta money,
    Impuesto_Turismo money,
    Total money,
    CONSTRAINT FacturaPK PRIMARY KEY (FacturaID),
    CONSTRAINT FacturasOrdenFK FOREIGN KEY (OrdenID) REFERENCES Ordenes(OrdenID),
    CONSTRAINT FacturasDatosPagoFK FOREIGN KEY (DatosPagoID) REFERENCES DatosPago(DatosPagoID)
);

CREATE TABLE Reporte (
    ReporteID char(5),
    OrdenID char(5),
    Fecha_Hora_Recepcion datetime,
    Kilometraje_Final int,
    ReceptorID char(5),
    CONSTRAINT ReportePK PRIMARY KEY (ReporteID),
    CONSTRAINT ReporteOrdenFK FOREIGN KEY (OrdenID) REFERENCES Ordenes(OrdenID),
    CONSTRAINT ReporteReceptorFK FOREIGN KEY (ReceptorID) REFERENCES Empleado(EmpleadoID)
);

CREATE TABLE DañosXReporte (
    ReporteID char(5),
    DañoID char(5),
    CONSTRAINT DRReporteFK FOREIGN KEY (ReporteID) REFERENCES Reporte(ReporteID),
    CONSTRAINT DRDañoFK FOREIGN KEY (DañoID) REFERENCES Daños(DañoID)
);

CREATE TABLE CaracteristicasXVehiculo (
    VehiculoID char(5),
    CaracteristicaID char(5),
    CONSTRAINT CVVehiculoFK FOREIGN KEY (VehiculoID) REFERENCES Vehiculos(VehiculoID),
    CONSTRAINT CVCaracteristicaFK FOREIGN KEY (CaracteristicaID) REFERENCES Caracteristicas(CaracteristicaID)
);

CREATE TABLE ExtrasXOrden (
    OrdenID char(5),
    ExtraID char(5),
    CONSTRAINT EOOrdenFK FOREIGN KEY (OrdenID) REFERENCES Ordenes(OrdenID),
    CONSTRAINT EOExtraFK FOREIGN KEY (ExtraID) REFERENCES Extras(ExtraID)
);
