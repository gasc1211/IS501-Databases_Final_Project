--Script que contiene elementos de prueba para la bd "Terminada" que se encuentra en db_schema_final.sql
--OBS: Para evitar errores, ejecutar las instrucciones en el orden en que se encuentran!!!
------------------------------------------------------------

INSERT INTO Localidades (Direccion, Telefono) VALUES ('La Travesia', '22345678');
INSERT INTO Localidades (Direccion, Telefono) VALUES ('Bo. Suyapa', '22345688');

select * from localidades;
------------------------------------------------------------
INSERT INTO Puestos (Nombre) VALUES ('Gerente');
INSERT INTO Puestos (Nombre) VALUES ('Personal de servicio');
INSERT INTO Puestos (Nombre) VALUES ('DBA');

SELECT * FROM Puestos;
------------------------------------------------------------
INSERT INTO Marcas (Nombre) VALUES ('KIA');
INSERT INTO Marcas (Nombre) VALUES ('Toyota');
INSERT INTO Marcas (Nombre) VALUES ('Nissan');
INSERT INTO Marcas (Nombre) VALUES ('Mercedez Bens');
INSERT INTO Marcas (Nombre) VALUES ('Mazda');
INSERT INTO Marcas (Nombre) VALUES ('Chevrolete');

SELECT * FROM Marcas;
------------------------------------------------------------
INSERT INTO modelo_vehiculo (nombreModelo, descripcion, marcaid) VALUES ('Picanto',' automóvil de turismo urbano del segmento A, producido por el fabricante surcoreano Kia Motors',1);
INSERT INTO modelo_vehiculo (nombreModelo, descripcion, marcaid) VALUES ('4Runner','Vehículo SUV de tamaño medio fabricado por Toyota y se vende en todo el mundo desde 1984 hasta el presente.',2);
INSERT INTO modelo_vehiculo (nombreModelo, descripcion, marcaid) VALUES ('GTR','Automóvil deportivo gran turismo cupé 2+2 con motor delantero montado longitudinalmente y tracción en las cuatro ruedas',3);
INSERT INTO modelo_vehiculo (nombreModelo, descripcion, marcaid) VALUES ('Supra','Automóvil deportivo hatchback de 3 puertas con motor delantero montado longitudinalmente',2);
INSERT INTO modelo_vehiculo (nombreModelo, descripcion, marcaid) VALUES ('Citan','El Mercedes Citan es un monovolumen, aunque también puede configurarse como vehículo comercial, que comparte plataforma con el Renault Kangoo.',4);
INSERT INTO modelo_vehiculo (nombreModelo, descripcion, marcaid) VALUES ('Miata','Deportivo biplaza, descapotable y de tracción trasera, fabricado por Mazda desde 1989',5);
INSERT INTO modelo_vehiculo (nombreModelo, descripcion, marcaid) VALUES ('Spark','Automóvil de turismo del segmento A, originalmente comercializado como Daewoo Matiz',6);

SELECT * FROM modelo_vehiculo;
------------------------------------------------------------
INSERT INTO categoria_vehiculo (Nombre) VALUES ('Berlina');
INSERT INTO categoria_vehiculo (Nombre) VALUES ('Familiar');
INSERT INTO categoria_vehiculo (Nombre) VALUES ('Descapotable');
INSERT INTO categoria_vehiculo (Nombre) VALUES ('Deportivo');
INSERT INTO categoria_vehiculo (Nombre) VALUES ('4x4');
INSERT INTO categoria_vehiculo (Nombre) VALUES ('Compacto');

SELECT * FROM Categoria_Vehiculo;
------------------------------------------------------------
INSERT INTO Danios (Nombre) VALUES ('Choque');
INSERT INTO Danios (Nombre) VALUES ('Rayon');
INSERT INTO Danios (Nombre) VALUES ('Vidrios quebrados');
INSERT INTO Danios (Nombre) VALUES ('Espejos quebrados');
INSERT INTO Danios (Nombre) VALUES ('Interior rasgado');
INSERT INTO Danios (Nombre) VALUES ('Llantas destruidas');
INSERT INTO Danios (Nombre) VALUES ('Caja dañada');

SELECT * FROM Danios;
------------------------------------------------------------
INSERT INTO Multas (Nombre, Descripcion, Costo) VALUES ('Incumplimiento de contrato','Cometio faltas al contyrato pactado.', 1000);
INSERT INTO Multas (Nombre, Descripcion, Costo) VALUES ('Sobrepaso de tiempo','Tardó en regresar el vehículo.', 1500);
INSERT INTO Multas (Nombre, Descripcion, Costo) VALUES ('Reportes legales','tuvo problemas con la ley mientras usaba la unidad.', 3000);
INSERT INTO Multas (Nombre, Descripcion, Costo) VALUES ('Daños a propiedad privada','Daño la propiedad de alguien más mientras usaba la unidad.', 5000);

SELECT * FROM Multas;
------------------------------------------------------------
INSERT INTO estatus_orden (Nombre, Descripcion) VALUES ('Pendiente','La orden aun no ha sido aceptada.');
INSERT INTO estatus_orden (Nombre, Descripcion) VALUES ('Activa','La orden fue procesada y aun sigue activa.');
INSERT INTO estatus_orden (Nombre, Descripcion) VALUES ('Finalizada','La orden fue procesada y ha finalizado.');

SELECT * FROM Estatus_Orden;
------------------------------------------------------------
INSERT INTO Clientes (Nombres, apellidos, DNI, Licencia, celular, correoElectronico, Direccion, Usuario, Contrasenia) VALUES 
('Don Junior', 'Castillo', '0801190000001', 'LIC-01' ,'11223344', 'CreiciTiger@gmail.com', 'Col. bajo el puente', 'Junior01', '123');
INSERT INTO Clientes (Nombres, apellidos, DNI, Licencia, celular, correoElectronico, Direccion, Usuario, Contrasenia) VALUES 
('Don Fanklin', 'Gutierrez', '0801190000002', 'LIC-02' ,'11223355', 'MeroKeso@gmail.com', 'Col. sobre el puente', 'Frank01', '123');
INSERT INTO Clientes (Nombres, apellidos, DNI, Licencia, celular, correoElectronico, Direccion, Usuario, Contrasenia) VALUES 
('Don Guillermo', 'NoC', '0801190000003', 'LIC-03' ,'11223366', 'ElMeroToro@gmail.com', 'Col. en el puente', 'Guiller01', '123');
INSERT INTO Clientes (Nombres, apellidos, DNI, Licencia, celular, correoElectronico, Direccion, Usuario, Contrasenia) VALUES 
('Don Gabriel', 'TampocoC', '0801190000004', 'LIC-04' ,'11223377', 'OtroMeroKeso@gmail.com', 'Col. entre el puente', 'Gabri01', '123');
INSERT INTO Clientes (Nombres, apellidos, DNI, Licencia, celular, correoElectronico, Direccion, Usuario, Contrasenia) VALUES 
('Don Roy', 'NiIdea', '0801190000005', 'LIC-05' ,'11223388', 'SoyElAdmin@gmail.com', 'Col. En la montania', 'Roy01', '123');

SELECT * FROM Clientes;
------------------------------------------------------------
INSERT INTO ListaNegra_Clientes (ClienteID, Motivo) VALUES (4, 'No paga a tiempo');

select * from listanegra_clientes;
------------------------------------------------------------
INSERT INTO Tipo_Tarjeta (Nombre) VALUES ('Visa');
INSERT INTO Tipo_Tarjeta (Nombre) VALUES ('MasterCard');
INSERT INTO Tipo_Tarjeta (Nombre) VALUES ('American Express');
INSERT INTO Tipo_Tarjeta (Nombre) VALUES ('Diners Club');

select * from Tipo_Tarjeta;
------------------------------------------------------------
INSERT INTO Tarjetas (ClienteID, Num_Tarjeta, CSC, Fecha_Vencimiento, Tipo_TarjetaID) VALUES ('1','01','081','10/08/2024',1);
INSERT INTO Tarjetas (ClienteID, Num_Tarjeta, CSC, Fecha_Vencimiento, Tipo_TarjetaID) VALUES ('2','02','082','10/08/2024',1);
INSERT INTO Tarjetas (ClienteID, Num_Tarjeta, CSC, Fecha_Vencimiento, Tipo_TarjetaID) VALUES ('3','03','083','10/08/2024',2);
INSERT INTO Tarjetas (ClienteID, Num_Tarjeta, CSC, Fecha_Vencimiento, Tipo_TarjetaID) VALUES ('4','04','084','10/08/2024',4);
INSERT INTO Tarjetas (ClienteID, Num_Tarjeta, CSC, Fecha_Vencimiento, Tipo_TarjetaID) VALUES ('5','05','085','10/08/2024',3);

SELECT * FROM Tarjetas;
------------------------------------------------------------
INSERT INTO Empleados (Nombres, Apellidos, DNI, Celular, PuestoID, Sueldo, Direccion, Usuario, Contrasenia) VALUES
('Empleado1', 'Junior', '0807200100001','99887766',1,17000,'Col. Rio abajo', 'Empleado1',456);
INSERT INTO Empleados (Nombres, Apellidos, DNI, Celular, PuestoID, Sueldo, Direccion, Usuario, Contrasenia) VALUES
('Empleado2', 'Franklin', '0807200100002','99887755',2,15000,'Col. Rio medio', 'Empleado2',456);
INSERT INTO Empleados (Nombres, Apellidos, DNI, Celular, PuestoID, Sueldo, Direccion, Usuario, Contrasenia) VALUES
('Empleado3', 'Royer', '0807200100003','99887744',3,25000,'Col. Rio arriba', 'Empleado3',456);

Select * From empleados;
------------------------------------------------------------
INSERT INTO Empleados (Nombres, Apellidos, DNI, Celular, PuestoID, Sueldo, Direccion, Usuario, Contrasenia) VALUES
('Empleado1', 'Junior', '0807200100001','99887766',1,17000,'Col. Rio abajo', 'Empleado1',456);
INSERT INTO Empleados (Nombres, Apellidos, DNI, Celular, PuestoID, Sueldo, Direccion, Usuario, Contrasenia) VALUES
('Empleado2', 'Franklin', '0807200100002','99887755',2,15000,'Col. Rio medio', 'Empleado2',456);
INSERT INTO Empleados (Nombres, Apellidos, DNI, Celular, PuestoID, Sueldo, Direccion, Usuario, Contrasenia) VALUES
('Empleado3', 'Royer', '0807200100003','99887744',3,25000,'Col. Rio arriba', 'Empleado3',456);

Select * From empleados;
------------------------------------------------------------
INSERT INTO Vehiculos (Categoria_vehiculoid, modeloid, kilometraje, intervalomantenimiento, observacionesvehiculo) VALUES 
(5, 2, 100, 5, 'Esta como nuevo');
INSERT INTO Vehiculos (Categoria_vehiculoid, modeloid, kilometraje, intervalomantenimiento, observacionesvehiculo) VALUES 
(6, 7, 500, 6, 'Muy pequemio');
INSERT INTO Vehiculos (Categoria_vehiculoid, modeloid, kilometraje, intervalomantenimiento, observacionesvehiculo) VALUES 
(4, 3, 50, 3, 'Esta como nuevo, neumaticos usados');
INSERT INTO Vehiculos (Categoria_vehiculoid, modeloid, kilometraje, intervalomantenimiento, observacionesvehiculo) VALUES 
(3, 6, 150, 2, 'Es el miata');
INSERT INTO Vehiculos (Categoria_vehiculoid, modeloid, kilometraje, intervalomantenimiento, observacionesvehiculo) VALUES 
(5, 2, 550, 3, 'A saber kesesto');

select * from vehiculos;
------------------------------------------------------------
INSERT INTO Extras (Nombre, Descripcion, Costo) VALUES ('Silla de bebe', 'Silla para bebe', 500);
INSERT INTO Extras (Nombre, Descripcion, Costo) VALUES ('Porta vasos extras', 'mas porta vasos', 100);
INSERT INTO Extras (Nombre, Descripcion, Costo) VALUES ('Pantalla LCD', 'Pantalla para ver peliculas', 1000);

select * from Extras;
------------------------------------------------------------
INSERT INTO Caracteristicas (Nombre, Descripcion) VALUES ('Manual', 'Transmision manual.');
INSERT INTO Caracteristicas (Nombre, Descripcion) VALUES ('Automatico', 'Transmision automatica.');
INSERT INTO Caracteristicas (Nombre, Descripcion) VALUES ('4 puertas', 'Posee cuatro puertas.');
INSERT INTO Caracteristicas (Nombre, Descripcion) VALUES ('2 puertas', 'posee dos puertas.');
INSERT INTO Caracteristicas (Nombre, Descripcion) VALUES ('Todo terreno', 'Para terreno exabroso.');

SELECT * FROM Caracteristicas;
------------------------------------------------------------
INSERT INTO Seguro (Nombre, Descripcion, Costo) VALUES ('Seguro economico', 'Cubre pequenios danios al auto', 1000);
INSERT INTO Seguro (Nombre, Descripcion, Costo) VALUES ('Seguro normal', 'Cubre danios al auto', 1500);
INSERT INTO Seguro (Nombre, Descripcion, Costo) VALUES ('Seguro premium', 'Cubre el total de danios ocasionados al vehiculo', 5000);

select * from Seguro;
------------------------------------------------------------
INSERT INTO Ordenes (EstatusID, TarjetaID, VehiculoID, Localidad_EntregaID, Localidad_DevolucionID, SeguroID, Fecha_Entrega, Fecha_Devolucion) 
VALUES (2, 1, 2, 1, 1, 1, '11/08/2023', '13/08/2023');
INSERT INTO Ordenes (EstatusID, TarjetaID, VehiculoID, Localidad_EntregaID, Localidad_DevolucionID, SeguroID, Fecha_Entrega, Fecha_Devolucion) 
VALUES (2, 2, 3, 1, 2, 3, '11/08/2023', '13/08/2023');
INSERT INTO Ordenes (EstatusID, TarjetaID, VehiculoID, Localidad_EntregaID, Localidad_DevolucionID, SeguroID, Fecha_Entrega, Fecha_Devolucion) 
VALUES (3, 5, 5, 1, 1, 3, '01/08/2023', '02/08/2023');
INSERT INTO Ordenes (EstatusID, TarjetaID, VehiculoID, Localidad_EntregaID, Localidad_DevolucionID, SeguroID, Fecha_Entrega, Fecha_Devolucion) 
VALUES (3, 1, 5, 1, 1, 1, '01/07/2023', '02/07/2023');

select * from ordenes;
------------------------------------------------------------
------------------------------------------------------------
INSERT INTO Reporte_Inicial (OrdenID, Fecha_Entrega, Kilometraje_Inicial, ReceptorID, Observaciones)
VALUES (3, '01/08/2023', 300, 2, 'Nada que reportar joaquin');
INSERT INTO Reporte_Inicial (OrdenID, Fecha_Entrega, Kilometraje_Inicial, ReceptorID, Observaciones)
VALUES (4, '05/08/2023', 400, 2, 'Nada que reportar joaquin');

select * from Reporte_Inicial;
------------------------------------------------------------
INSERT INTO Reporte_Final (OrdenID, Fecha_Recepcion, Kilometraje_Final, ReceptorID, Observaciones)
VALUES (3, '04/08/2023', 400, 2, 'Nada que reportar joaquin');
INSERT INTO Reporte_Final (OrdenID, Fecha_Recepcion, Kilometraje_Final, ReceptorID, Observaciones)
VALUES (4, '10/08/2023', 500, 2, 'Mas KM k nunca');

select * from Reporte_Final;
------------------------------------------------------------
INSERT INTO Facturas (OrdenID, ReporteInicialID, Descripcion, Subtotal, Descuento, Impuesto_Venta, Total) 
VALUES (3, 1, 'Factura por reporte inicial', 1500, 100, 900, 2300);
INSERT INTO Facturas (OrdenID, ReporteInicialID, Descripcion, Subtotal, Descuento, Impuesto_Venta, Total) 
VALUES (4, 2, 'Factura por reporte inicial', 1500, 100, 900, 2300);

INSERT INTO Facturas (OrdenID, ReporteFinalID, Descripcion, Subtotal, Descuento, Impuesto_Venta, Total) 
VALUES (3, 1, 'Factura por reporte final', 1500, 100, 900, 2300);
INSERT INTO Facturas (OrdenID, ReporteFinalID, Descripcion, Subtotal, Descuento, Impuesto_Venta, Total) 
VALUES (4, 2, 'Factura por reporte final', 1500, 100, 900, 2300);

select * from Facturas;
------------------------------------------------------------
