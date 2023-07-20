USE [Rentadora];

CREATE TABLE Localidades (
    LocalidadID nchar(5),
    Direccion nvarchar(100),
    Telefono nchar(8)
);

CREATE TABLE Clientes (
    ClienteID nchar(5) PRIMARY KEY,
    Nombres nvarchar(30),
    Apellidos nvarchar(30),
    DNI nchar(13),
    RTN nchar(13),
    Licencia nchar(13),
    Celular nchar(8)
);

CREATE TABLE DatosPago (
    DatosPagoID nchar(5) PRIMARY KEY,
    ClienteID nchar(5),
    Direccion nvarchar(100),
    Num_Tarjeta nchar(16),
    CSC nchar(5)
);

CREATE TABLE Empleado (
    EmpleadoID nchar(5),
    Nombres nvarchar(30),
    Apellidos nvarchar(30),
    DNI nchar(13),
    Celular nchar(8),
    PuestoID nchar(5),
    Sueldo money,
    Direccion nvarchar(50)
);

CREATE TABLE Marcas (
    MarcaID ncahr(5) PRIMARY KEY,
    Nombre nchar(25)
);

CREATE TABLE Categoria (
    CategoriaID ncahr(5) PRIMARY KEY,
    Nombre nchar(25)
);

CREATE TABLE Vehiculos (
    VehiculoID nchar(5) PRIMARY KEY,
    MarcaID nchar(5),
    Categoria nchar(5),
    ModeloID nchar(5),
    Color nvarchar(15),
    Recorrido float,
    Combustible nvarchar(10),
);

CREATE TABLE Daños (
    DañoID nchar(5),
    Descripcion nvarchar(100),
    Costo money
);

CREATE TABLE Ordenes (
    OrdenID nchar(5) PRIMARY KEY,
    Fecha_Hora datetime,
    EmpleadoID nchar(5),
    ClienteID nchar(5),
    VehiculoID nchar(5),
    Localidad_EntregaID nchar(5),
    Fecha_Hora_Entrega datetime,
    Localidad_DevolucionID nchar(5),
    Fecha_Hora_Devolucion datetime
);

CREATE TABLE Facturas (
    OrdenID nchar(5),
    DatosPagoID nchar(5),
    Subtotal money,
    Descuento money,
    Impuesto money,
    Total money
);

