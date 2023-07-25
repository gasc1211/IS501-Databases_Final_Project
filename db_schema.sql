USE [Rentadora];

CREATE TABLE Localidades (
    LocalidadID nchar(5),
    Direccion nvarchar(100),
    Telefono nchar(8)
    CONSTRAINT LocalidadPK PRIMARY KEY (LocalidadID)
);

CREATE TABLE Clientes (
    ClienteID nchar(5),
    Nombres nvarchar(30),
    Apellidos nvarchar(30),
    DNI nchar(13),
    RTN nchar(13),
    Licencia nchar(13),
    Celular nchar(8),
    CONSTRAINT ClientePK PRIMARY KEY (ClienteID)
);

CREATE TABLE DatosPago (
    DatosPagoID nchar(5),
    ClienteID nchar(5),
    Direccion nvarchar(100),
    Num_Tarjeta nchar(16) UNIQUE,
    CSC nchar(5),
    Efectivo boolean,
    CONSTRAINT DatosPagoPK PRIMARY KEY (DatosPagoID),
    CONSTRAINT ClienteFK PRIMARY KEY (ClienteID) REFERENCES Cliente(ClienteID)

);

CREATE TABLE Puestos (
    PuestoID nchar(5),
    Nombre nvarchar(50),
    CONSTRAINT PuestoPK PRIMARY KEY (PuestoID)
);

CREATE TABLE Empleado (
    EmpleadoID nchar(5),
    Nombres nvarchar(30),
    Apellidos nvarchar(30),
    DNI nchar(13) UNIQUE,
    Celular nchar(8),
    PuestoID nchar(5),
    Sueldo money,
    Direccion nvarchar(50),
    CONSTRAINT EmpleadoPK PRIMARY KEY (EmpleadoID),
    CONSTRAINT PuestoFK FOREIGN KEY (PuestoID) REFERENCES Puestos(PuestoID)
);

CREATE TABLE Marcas (
    MarcaID ncahr(5),
    Nombre nchar(25),
    CONSTRAINT MarcaPK PRIMARY KEY (MarcaID)
);

CREATE TABLE Categoria (
    CategoriaID nchar(5),
    Nombre nchar(25),
    CONSTRAINT CategoriaPK PRIMARY KEY (CategoriaID)
);

CREATE TABLE Vehiculos (
    VehiculoID nchar(5),
    MarcaID nchar(5),
    Categoria nchar(5),
    ModeloID nchar(5),
    Color nvarchar(15),
    Kilometraje float,
    Combustible nvarchar(10),
    CONSTRAINT VehiculoPK PRIMARY KEY (VehiculoID)
);

CREATE TABLE Daños (
    DañoID nchar(5),
    Descripcion nvarchar(100),
    Costo money,
    CONSTRAINT DañoPK PRIMARY KEY (DañoID)
);

CREATE TABLE Extras (
    ExtraID nchar(5),
    Nombre nvarchar(50),
    Descripcion nvarchar(100),
    Costo money,
    CategoriaID nchar(5),
    CONSTRAINT ExtraPK PRIMARY KEY (ExtraID),
    CONSTRAINT CategoriaFK FOREIGN KEY (CategoriaID) REFERENCES Categoria(CategoriaID)
);

CREATE TABLE Caracteristicas (
    CaracteristicaID nchar(5),
    Nombre nvarchar(50),
    Descripcion nvarchar(100),
    CONSTRAINT CaracteristicaPK PRIMARY KEY (CaracteristicaID)
);

CREATE TABLE Estatus (
    EstatusID nchar(5),
    Nombre nvarchar(50),
    Descripcion nvarchar(100)
    CONSTRAINT EstatusPK PRIMARY KEY (EstatusID)
);

CREATE TABLE Ordenes (
    OrdenID nchar(5),
    Fecha_Hora datetime,
    EmpleadoID nchar(5),
    ClienteID nchar(5),
    VehiculoID nchar(5),
    Localidad_EntregaID nchar(5),
    Fecha_Hora_Entrega datetime,
    Localidad_DevolucionID nchar(5),
    Fecha_Hora_Devolucion datetime,
    EstatusID nchar(5),
    CONSTRAINT OrdenPK PRIMARY KEY (OrdenID),
    CONSTRAINT EmpleadoFK FOREIGN KEY (EmpleadoID) REFERENCES Empleado(EmpleadoID),
    CONSTRAINT ClienteFK FOREIGN KEY (ClienteID) REFERENCES Cliente(ClienteID),
    CONSTRAINT VehiculoFK FOREIGN KEY (VehiculoID) REFERENCES Vehiculo(VehiculoID),
    CONSTRAINT EstatusFK FOREIGN KEY (EstatusID) REFERENCES Estatus(EstatusID)
);

CREATE TABLE Facturas (
    OrdenID nchar(5),
    FacturaID nchar(15),
    DatosPagoID nchar(5),
    Subtotal money,
    Descuento money,
    Impuesto_Venta money,
    Impuesto_Turismo money,
    Total money,
    CONSTRAINT FacturaPK PRIMARY KEY (FacturaID),
    CONSTRAINT OrdenFK FOREIGN KEY (OrdenID) REFERENCES Ordenes(OrdenID),
    CONSTRAINT DatosPagoFK FOREIGN KEY (DatosPagoID) REFERENCES DatosPago(DatosPagoID)
);

CREATE TABLE Reporte (
    ReporteID nchar(5),
    OrdenID nchar(5),
    Fecha_Hora_Recepcion datetime,
    Kilometraje_Final int,
    ReceptorID nchar(5),
    CONSTRAINT ReportePK PRIMARY KEY (ReporteID),
    CONSTRAINT OrdenFK FOREIGN KEY (OrdenID) REFERENCES Ordenes(OrdenID),
    CONSTRAINT ReceptorFK FOREIGN KEY (ReceptorID) REFERENCES Empleado(EmpleadoID)
);

CREATE TABLE DañosXReporte (
    ReporteID nchar(5),
    DañoID nchar(5),
    CONSTRAINT ReporteFK FOREIGN KEY (ReporteID) REFERENCES Reportes(ReporteID),
    CONSTRAINT DañoFK FOREIGN KEY (DañoID) REFERENCES Daños(DañoID)
);

CREATE TABLE CaracteristicasXVehiculo (
    VehiculoID nchar(5),
    CaracteristicaID nchar(5),
    CONSTRAINT VehiculoFK FOREIGN KEY (VehiculoID) REFERENCES Vehiculo(VehiculoID),
    CONSTRAINT CaracteristicaFK FOREIGN KEY (CaracteristicaID) REFERENCES Caracteristicas(CaracteristicaID)
);

CREATE TABLE ExtrasXOrden (
    OrdenID nchar(5),
    ExtraID nchar(5),
    CONSTRAINT OrdenFK FOREIGN KEY (OrdenID) REFERENCES Ordenes(OrdenID),
    CONSTRAINT ExtraFK FOREIGN KEY (ExtraID) REFERENCES Extras(ExtraID)
);
