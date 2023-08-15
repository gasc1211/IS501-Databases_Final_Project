// import { app, BrowserWindow } from "electron";
// import * as path from "path";

// function createWindow() {
//   // Create the app window
//   const mainWindow = new BrowserWindow({
//     width: 800,
//     webPreferences: {
//       preload: path.join(__dirname, "preload.js"),
//     },
//     height: 600,
//   });

//   // Main Window file
//   mainWindow.loadFile(path.join(__dirname, "./index.html"));

//   // Enable chrome devtools
//   mainWindow.webContents.openDevTools();
// }

// app.whenReady().then(() => {
//   createWindow();
//   // MacOS double window instantiation issue fix
//   app.on("activate", function () {
//     if (BrowserWindow.getAllWindows().length == 0) createWindow();
//   });

//   // More MacOS shenanigans
//   app.on("window-all-closed", () => {
//     if (process.platform !== "darwin") {
//       app.quit();
//     }
//   });
// });

// app, que controla el ciclo de vida de los eventos de su aplicación.
// BrowserWindow, que crea y administra ventanas de aplicaciones.

/*
Muchos de los módulos principales de Electron son emisores de eventos de Node.js que se adhieren a la arquitectura asíncrona basada en eventos de Node. El módulo de la aplicación es uno de estos emisores.

En Electron, BrowserWindows solo se puede crear después de que se active el evento listo del módulo de la aplicación. Puede esperar este evento usando la API app.whenReady() y llamando a createWindow() una vez que se cumpla su promesa.
*/

/*
En el contexto de Electron, un "script preload" se refiere a un mecanismo que permite cargar un script personalizado antes de que se cree la ventana principal de tu aplicación. Este script se ejecuta en un contexto separado llamado "preload context" y tiene acceso a las API de Node.js, lo que lo convierte en un lugar ideal para configurar ciertas funcionalidades antes de que comience la ejecución de la aplicación en la ventana del navegador.

Para entender mejor el propósito y la utilidad de un script preload, consideremos el entorno en el que opera Electron. Electron es un entorno de tiempo de ejecución que combina el motor de renderizado Chromium (el mismo motor que se utiliza en Google Chrome) con el entorno de ejecución Node.js. Esta combinación permite construir aplicaciones de escritorio utilizando tecnologías web como HTML, CSS y JavaScript, al tiempo que proporciona acceso a las capacidades del sistema operativo a través de Node.js.

Sin embargo, debido a la flexibilidad que ofrece esta combinación, también puede plantear ciertas preocupaciones de seguridad. Por ejemplo, si se ejecuta JavaScript en la ventana principal de la aplicación con acceso completo a las API de Node.js, esto podría abrir la puerta a vulnerabilidades o mal uso si el código no está adecuadamente controlado.
*/

/*

COMUNICACION ENTRE PROCESOS
Como mencionamos anteriormente, el proceso principal y el renderizador de Electron tienen responsabilidades distintas y no son intercambiables. Esto significa que no es posible acceder a las API de Node.js directamente desde el proceso de representación, ni al Modelo de objetos de documento (DOM) HTML desde el proceso principal.

La solución para este problema es utilizar los módulos ipcMain e ipcRenderer de Electron para la comunicación entre procesos (IPC). Para enviar un mensaje desde su página web al proceso principal, puede configurar un controlador de proceso principal con ipcMain.handle y luego exponer una función que llame a ipcRenderer.invoke para activar el controlador en su secuencia de comandos de precarga.

Para ilustrar, agregaremos una función global al renderizador llamada ping() que devolverá una cadena del proceso principal.
*/

/*
Luego, configura tu handle listener en el proceso principal. Hacemos esto antes de cargar el archivo HTML para garantizar que el controlador esté listo antes de enviar la llamada de invocación desde el renderizador.

Una vez que haya configurado el remitente y el receptor, ahora puede enviar mensajes desde el renderizador al proceso principal a través del canal 'ping' que acaba de definir.
*/

/*
RESUMEN
A preload script contains code that runs before your web page is loaded into the browser window. It has access to both DOM APIs and Node.js environment, and is often used to expose privileged APIs to the renderer via the contextBridge API.

Because the main and renderer processes have very different responsibilities, Electron apps often use the preload script to set up inter-process communication (IPC) interfaces to pass arbitrary messages between the two kinds of processes.

In the next part of the tutorial, we will be showing you resources on adding more functionality to your app, then teaching you distributing your app to users.
*/

/**
Electron Forge
RESUMEN
Electron applications need to be packaged to be distributed to users. In this tutorial, you imported your app into Electron Forge and configured it to package your app and generate installers.

In order for your application to be trusted by the user's system, you need to digitally certify that the distributable is authentic and untampered by code signing it. Your app can be signed through Forge once you configure it to use your code signing certificate information.
*/

const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("../client/client/src/landingPage/index.html");
};

app.whenReady().then(() => {
  ipcMain.handle("ping", () => "pong");
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
