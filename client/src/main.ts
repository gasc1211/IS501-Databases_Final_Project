import { app, BrowserWindow } from "electron";
import * as path from "path";

function createWindow() {
  // Create the app window
  const mainWindow = new BrowserWindow({
    width: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
    height: 600,
  });

  // Main Window file
  mainWindow.loadFile(path.join(__dirname, "./index.html"));

  // Enable chrome devtools
  mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();
  // MacOS double window instantiation issue fix
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length == 0) createWindow();
  });

  // More MacOS shenanigans
  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });
});
