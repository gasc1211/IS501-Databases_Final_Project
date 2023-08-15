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
    DNI CHAR(13) UNIQUE,
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

CREATE TABLE Tarjetas (
    TarjetaID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    ClienteID INTEGER,
    Num_Tarjeta CHAR(16) UNIQUE,
    CSC CHAR(3),
    Fecha_Vencimiento DATE,
    Direccion VARCHAR(100),
    CONSTRAINT TarjetasPK PRIMARY KEY (TarjetaID),
    CONSTRAINT TarjetasClienteFK FOREIGN KEY (ClienteID) REFERENCES Clientes(ClienteID)
);

CREATE TABLE Puestos (
    PuestoID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Nombre VARCHAR(30),
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

CREATE TABLE Modelo(
    ModeloID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    nombreModelo VarChar(15),
    descripcion varChar(150)
)

CREATE TABLE Color(
    colorID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    nombre_color VARCHAR(12),
    CONSTRAINT colorPK PRIMARY KEY (colorID)
)


CREATE TABLE Vehiculos (
    VehiculoID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    MarcaID INTEGER,
    CategoriaID INTEGER,
    ModeloID INTEGER,
    ColorID INTEGER,
    Kilometraje NUMBER,
    Combustible VARCHAR(10),
    Automatico NUMBER(1) CHECK (Automatico IN (0, 1)),
    EstadoVehiculoID INTEGER,
    IntervaloMantenimiento NUMBER,
    ObservacionesVehiculo VARCHAR(200),
    CONSTRAINT VehiculoPK PRIMARY KEY (VehiculoID),
    CONSTRAINT VehiculoCategoriaFK FOREIGN KEY (CategoriaID) REFERENCES Categoria(CategoriaID),
	CONSTRAINT VehiculosMarcaFK FOREIGN KEY (MarcaID) REFERENCES Marcas(MarcaID),
    CONSTRAINT EstadoVehiculoFK FOREIGN KEY (EstadoVehiculoID) REFERENCES Estado_Vehiculo(EstadoVehiculoID)
);

CREATE TABLE Daños (
    DañoID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Nombre VARCHAR(30),
    Descripcion VARCHAR(100),
    CONSTRAINT DañoPK PRIMARY KEY (DañoID)
);

CREATE TABLE Multas (
    MultaID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Nombre VARCHAR(30),
    Descripcion VARCHAR(100),
    CONSTRAINT DañoPK PRIMARY KEY (DañoID)
);

CREATE TABLE Extras (
    ExtraID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Nombre VARCHAR(50),
    Descripcion VARCHAR(100),
    Costo NUMBER,
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
    Costo NUMBER,
    CONSTRAINT SeguroPK PRIMARY KEY (SeguroID)
);

CREATE TABLE Ordenes (
    OrdenID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    Fecha_Hora DATE,
    EmpleadoID INTEGER,
    ClienteID INTEGER,
    VehiculoID INTEGER,
    Localidad_EntregaID INTEGER,
    Fecha_Entrega DATE,
    Localidad_DevolucionID INTEGER,
    Fecha_Devolucion DATE,
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
    FacturaID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    OrdenID INTEGER,
    ReporteFinalID INTEGER,
    TarjetaID INTEGER,
    Descripcion VARCHAR(50),
    Subtotal NUMBER,
    Descuento NUMBER,
    Impuesto_Venta NUMBER,
    Impuesto_Turismo NUMBER,
    Total NUMBER,
    CONSTRAINT FacturaPK PRIMARY KEY (FacturaID),
    CONSTRAINT FacturasOrdenFK FOREIGN KEY (OrdenID) REFERENCES Ordenes(OrdenID),
    CONSTRAINT FacturasReporteFK FOREIGN KEY (ReporteID) REFERENCES Reporte_Final(ReporteFinalID),
    CONSTRAINT FacturasTarjetasFK FOREIGN KEY (TarjetaID) REFERENCES Tarjetas(TarjetaID)
);

CREATE TABLE Reporte_Inicial (
    ReporteInicialID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    OrdenID INTEGER,
    Fecha_Entrega DATE,
    Kilometraje_Inicial NUMBER,
    ReceptorID INTEGER,
    Observaciones VARCHAR(200),
    CONSTRAINT ReportePK PRIMARY KEY (ReporteID),
    CONSTRAINT ReporteOrdenFK FOREIGN KEY (OrdenID) REFERENCES Ordenes(OrdenID),
    CONSTRAINT ReporteReceptorFK FOREIGN KEY (ReceptorID) REFERENCES Empleado(EmpleadoID)
);

CREATE TABLE Reporte_Final (
    ReporteFinalID INTEGER GENERATED ALWAYS AS IDENTITY NOT NULL,
    OrdenID INTEGER,
    Fecha_Recepcion DATE,
    Kilometraje_Final NUMBER,
    ReceptorID INTEGER,
    Observaciones VARCHAR(200),
    CONSTRAINT ReportePK PRIMARY KEY (ReporteID),
    CONSTRAINT ReporteOrdenFK FOREIGN KEY (OrdenID) REFERENCES Ordenes(OrdenID),
    CONSTRAINT ReporteReceptorFK FOREIGN KEY (ReceptorID) REFERENCES Empleado(EmpleadoID)
);

CREATE TABLE DañosXReporte (
    ReporteID NOT NULL,
    DañoID INTEGER NOT NULL,
    Costo NUMBER,
    CONSTRAINT DRReporteFK FOREIGN KEY (ReporteID) REFERENCES Reporte_Final(ReporteFinalID),
    CONSTRAINT DRDañoFK FOREIGN KEY (DañoID) REFERENCES Daños(DañoID)
);

CREATE TABLE MultaXReporte (
    ReporteID INTEGER NOT NULL,
    MultaID INTEGER NOT NULL,
    Costo NUMBER,
    CONSTRAINT MRReporteFK FOREIGN KEY (ReporteID) REFERENCES Reporte_Final(ReporteFinalID),
    CONSTRAINT MRMultaFK FOREIGN KEY (MultaID) REFERENCES Multas(MultaID),
);

CREATE TABLE CaracteristicasXVehiculo (
    VehiculoID NOT NULL,
    CaracteristicaID INTEGER NOT NULL,
    CONSTRAINT CVVehiculoFK FOREIGN KEY (VehiculoID) REFERENCES Vehiculos(VehiculoID),
    CONSTRAINT CVCaracteristicaFK FOREIGN KEY (CaracteristicaID) REFERENCES Caracteristicas(CaracteristicaID)
);

CREATE TABLE ExtrasXOrden (
    OrdenID INTEGER NOT NULL,
    ExtraID INTEGER NOT NULL,
    CONSTRAINT EOOrdenFK FOREIGN KEY (OrdenID) REFERENCES Ordenes(OrdenID),
    CONSTRAINT EOExtraFK FOREIGN KEY (ExtraID) REFERENCES Extras(ExtraID)
);
