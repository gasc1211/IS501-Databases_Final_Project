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
    Efectivo bit,
    CONSTRAINT DatosPagoPK PRIMARY KEY (DatosPagoID),
    CONSTRAINT DatosPagoClienteFK FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID)

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
    CONSTRAINT EmpleadoPuestoFK FOREIGN KEY (PuestoID) REFERENCES Puestos(PuestoID)
);

CREATE TABLE Marcas (
    MarcaID nchar(5),
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
    CategoriaID nchar(5),
    ModeloID nchar(5),
    Color nvarchar(15),
    Kilometraje float,
    Combustible nvarchar(10),
    CONSTRAINT VehiculoPK PRIMARY KEY (VehiculoID),
    CONSTRAINT VehiculoCategoriaFK FOREIGN KEY (CategoriaID) REFERENCES Categoria(CategoriaID),
	CONSTRAINT VehiculosMarcaFK FOREIGN KEY (MarcaID) REFERENCES Marcas(MarcaID),
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
    CONSTRAINT ExtrasCategoriaFK FOREIGN KEY (CategoriaID) REFERENCES Categoria(CategoriaID)
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
    CONSTRAINT OrdenesClienteFK FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID),
    CONSTRAINT OrdenesVehiculoFK FOREIGN KEY (VehiculoID) REFERENCES Vehiculos(VehiculoID),
    CONSTRAINT OrdenesEstatusFK FOREIGN KEY (EstatusID) REFERENCES Estatus(EstatusID),
	CONSTRAINT OrdenesLocalidadEntrega FOREIGN KEY (Localidad_DevolucionID) REFERENCES Localidades(LocalidadID)
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
    CONSTRAINT FacturasOrdenFK FOREIGN KEY (OrdenID) REFERENCES Ordenes(OrdenID),
    CONSTRAINT FacturasDatosPagoFK FOREIGN KEY (DatosPagoID) REFERENCES DatosPago(DatosPagoID)
);

CREATE TABLE Reporte (
    ReporteID nchar(5),
    OrdenID nchar(5),
    Fecha_Hora_Recepcion datetime,
    Kilometraje_Final int,
    ReceptorID nchar(5),
    CONSTRAINT ReportePK PRIMARY KEY (ReporteID),
    CONSTRAINT ReporteOrdenFK FOREIGN KEY (OrdenID) REFERENCES Ordenes(OrdenID),
    CONSTRAINT ReporteReceptorFK FOREIGN KEY (ReceptorID) REFERENCES Empleado(EmpleadoID)
);

CREATE TABLE DañosXReporte (
    ReporteID nchar(5),
    DañoID nchar(5),
    CONSTRAINT DRReporteFK FOREIGN KEY (ReporteID) REFERENCES Reporte(ReporteID),
    CONSTRAINT DRDañoFK FOREIGN KEY (DañoID) REFERENCES Daños(DañoID)
);

CREATE TABLE CaracteristicasXVehiculo (
    VehiculoID nchar(5),
    CaracteristicaID nchar(5),
    CONSTRAINT CVVehiculoFK FOREIGN KEY (VehiculoID) REFERENCES Vehiculos(VehiculoID),
    CONSTRAINT CVCaracteristicaFK FOREIGN KEY (CaracteristicaID) REFERENCES Caracteristicas(CaracteristicaID)
);

CREATE TABLE ExtrasXOrden (
    OrdenID nchar(5),
    ExtraID nchar(5),
    CONSTRAINT EOOrdenFK FOREIGN KEY (OrdenID) REFERENCES Ordenes(OrdenID),
    CONSTRAINT EOExtraFK FOREIGN KEY (ExtraID) REFERENCES Extras(ExtraID)
);
