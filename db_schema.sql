CREATE TABLE Localidades (
    LocalidadID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Direccion VARCHAR(100),
    Telefono CHAR(8),
    CONSTRAINT LocalidadPK PRIMARY KEY(LocalidadID)
);

CREATE TABLE Clientes (
    ClienteID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Nombres VARCHAR(30),
    Apellidos VARCHAR(30),
    DNI CHAR(13),
    RTN CHAR(13),
    Licencia CHAR(13),
    Celular CHAR(8),
    CorreoElectronico VARCHAR(35),
    CONSTRAINT ClientePK PRIMARY KEY (ClienteID)
);

CREATE TABLE ListaNegra (
    ClienteID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Motivo VARCHAR(100),
    CONSTRAINT ClienteBaneadoFK FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID)
);

CREATE TABLE DatosPago (
    DatosPagoID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    ClienteID INTEGER,
    Direccion VARCHAR(100),
    Num_Tarjeta CHAR(16) UNIQUE,
    CSC CHAR(5),
    CONSTRAINT DatosPagoPK PRIMARY KEY (DatosPagoID),
    CONSTRAINT DatosPagoClienteFK FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID)
);

CREATE TABLE Puestos (
    PuestoID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Nombre VARCHAR(50),
    CONSTRAINT PuestoPK PRIMARY KEY (PuestoID)
);

CREATE TABLE Empleado (
    EmpleadoID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Nombres VARCHAR(30),
    Apellidos VARCHAR(30),
    DNI CHAR(13) UNIQUE,
    Celular CHAR(8),
    PuestoID INTEGER,
    Sueldo NUMBER,
    Direccion VARCHAR(50),
    CONSTRAINT EmpleadoPK PRIMARY KEY (EmpleadoID),
    CONSTRAINT EmpleadoPuestoFK FOREIGN KEY (PuestoID) REFERENCES Puestos(PuestoID)
);

CREATE TABLE Marcas (
    MarcaID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Nombre CHAR(25),
    CONSTRAINT MarcaPK PRIMARY KEY (MarcaID)
);

CREATE TABLE Categoria (
    CategoriaID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Nombre CHAR(25),
    CONSTRAINT CategoriaPK PRIMARY KEY (CategoriaID)
);

CREATE TABLE Estado_Vehiculo (
    EstadoVehiculoID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Nombre VARCHAR(50),
    Descripcion VARCHAR(100),
    CONSTRAINT EstadoVehiculoPK PRIMARY KEY (EstadoVehiculoID)
);

CREATE TABLE Vehiculos (
    VehiculoID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    MarcaID INTEGER,
    CategoriaID INTEGER,
    ModeloID CHAR(5),
    Color VARCHAR(15),
    Kilometraje NUMBER,
    Combustible VARCHAR(10),
    Automatico NUMBER(1) CHECK (Automatico IN (0, 1)),
    EstadoVehiculoID INTEGER,
    IntervaloMantenimiento NUMBER,
    CONSTRAINT VehiculoPK PRIMARY KEY (VehiculoID),
    CONSTRAINT VehiculoCategoriaFK FOREIGN KEY (CategoriaID) REFERENCES Categoria(CategoriaID),
	CONSTRAINT VehiculosMarcaFK FOREIGN KEY (MarcaID) REFERENCES Marcas(MarcaID),
    CONSTRAINT EstadoVehiculoFK FOREIGN KEY (EstadoVehiculoID) REFERENCES Estado_Vehiculo(EstadoVehiculoID)
);

CREATE TABLE Danios (
    DanioID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Descripcion VARCHAR(100),
    Costo INTEGER,
    CONSTRAINT DanioPK PRIMARY KEY (DanioID)
);

CREATE TABLE Extras (
    ExtraID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Nombre VARCHAR(50),
    Descripcion VARCHAR(100),
    Costo INTEGER,
    CategoriaID INTEGER,
    CONSTRAINT ExtraPK PRIMARY KEY (ExtraID),
    CONSTRAINT ExtrasCategoriaFK FOREIGN KEY (CategoriaID) REFERENCES Categoria(CategoriaID)
);

CREATE TABLE Caracteristicas (
    CaracteristicaID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Nombre VARCHAR(50),
    Descripcion VARCHAR(100),
    CONSTRAINT CaracteristicaPK PRIMARY KEY (CaracteristicaID)
);

CREATE TABLE Estatus (
    EstatusID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Nombre VARCHAR(50),
    Descripcion VARCHAR(100),
    CONSTRAINT EstatusPK PRIMARY KEY (EstatusID)
);

CREATE TABLE Seguro (
    SeguroID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Nombre VARCHAR(50),
    Descripcion VARCHAR(100),
    Costo INTEGER,
    CONSTRAINT SeguroPK PRIMARY KEY (SeguroID)
);

CREATE TABLE Ordenes (
    OrdenID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Fecha_Hora DATE,
    EmpleadoID INTEGER,
    ClienteID INTEGER,
    VehiculoID INTEGER,
    Localidad_EntregaID INTEGER,
    Fecha_Hora_Entrega DATE,
    Localidad_DevolucionID INTEGER,
    Fecha_Hora_Devolucion DATE,
    SeguroID INTEGER,
    CONSTRAINT OrdenPK PRIMARY KEY (OrdenID),
    CONSTRAINT EmpleadoFK FOREIGN KEY (EmpleadoID) REFERENCES Empleado(EmpleadoID),
    CONSTRAINT OrdenesClienteFK FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID),
    CONSTRAINT OrdenesVehiculoFK FOREIGN KEY (VehiculoID) REFERENCES Vehiculos(VehiculoID),
    CONSTRAINT OrdenesEstatusFK FOREIGN KEY (EstatusID) REFERENCES Estatus(EstatusID),
	CONSTRAINT OrdenesLocalidadEntrega FOREIGN KEY (Localidad_EntregaID) REFERENCES Localidades(LocalidadID),
    CONSTRAINT OrdenesLocalidadDevolucion FOREIGN KEY (Localidad_DevolucionID) REFERENCES Localidades(LocalidadID),
    CONSTRAINT SeguroFK FOREIGN KEY (SeguroID) REFERENCES Seguro(SeguroID)
);

CREATE TABLE Facturas (
    OrdenID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    FacturaID INTEGER,
    DatosPagoID INTEGER,
    Subtotal NUMBER,
    Descuento NUMBER,
    Impuesto_Venta NUMBER,
    Impuesto_Turismo NUMBER,
    Total NUMBER,
    CONSTRAINT FacturaPK PRIMARY KEY (FacturaID),
    CONSTRAINT FacturasOrdenFK FOREIGN KEY (OrdenID) REFERENCES Ordenes(OrdenID),
    CONSTRAINT FacturasDatosPagoFK FOREIGN KEY (DatosPagoID) REFERENCES DatosPago(DatosPagoID)
);

CREATE TABLE Reporte_Recepcion (
    ReporteSalidaID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    OrdenID INTEGER,
    Fecha_Hora_Entrega DATE,
    Kilometraje_Inicial NUMBER,
    ReceptorID INTEGER,
    Observaciones VARCHAR(150),
    CONSTRAINT ReportePK PRIMARY KEY (ReporteID),
    CONSTRAINT ReporteOrdenFK FOREIGN KEY (OrdenID) REFERENCES Ordenes(OrdenID),
    CONSTRAINT ReporteReceptorFK FOREIGN KEY (ReceptorID) REFERENCES Empleado(EmpleadoID)
);

CREATE TABLE Reporte_Entrega (
    ReporteEntregaID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    OrdenID INTEGER,
    Fecha_Hora_Recepcion DATE,
    Kilometraje_Final NUMBER,
    ReceptorID INTEGER,
    Observaciones VARCHAR(150),
    CONSTRAINT ReportePK PRIMARY KEY (ReporteID),
    CONSTRAINT ReporteOrdenFK FOREIGN KEY (OrdenID) REFERENCES Ordenes(OrdenID),
    CONSTRAINT ReporteReceptorFK FOREIGN KEY (ReceptorID) REFERENCES Empleado(EmpleadoID)
);

CREATE TABLE DañosXReporte (
    ReporteID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    DanioID INTEGER,
    CONSTRAINT DRReporteFK FOREIGN KEY (ReporteID) REFERENCES Reporte_Entrega(ReporteEntregaID),
    CONSTRAINT DRDañoFK FOREIGN KEY (DanioID) REFERENCES Danios(DanioID)
);

CREATE TABLE CaracteristicasXVehiculo (
    VehiculoID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    CaracteristicaID INTEGER,
    CONSTRAINT CVVehiculoFK FOREIGN KEY (VehiculoID) REFERENCES Vehiculos(VehiculoID),
    CONSTRAINT CVCaracteristicaFK FOREIGN KEY (CaracteristicaID) REFERENCES Caracteristicas(CaracteristicaID)
);

CREATE TABLE ExtrasXOrden (
    OrdenID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    ExtraID INTEGER,
    CONSTRAINT EOOrdenFK FOREIGN KEY (OrdenID) REFERENCES Ordenes(OrdenID),
    CONSTRAINT EOExtraFK FOREIGN KEY (ExtraID) REFERENCES Extras(ExtraID)
);
