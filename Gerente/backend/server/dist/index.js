"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import Clientes from "./index";
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
//import { logIn, logInNew, userInfo, userOrdenActive, userOrdenFinished, userAssociatedCard } from "./dbConnectionClient";
dotenv_1.default.config();
//var clientRouter = require('./routes/Client-routes');
//var managerRouter = require('./routes/Manager-routes');
//app.use('/client', clientRouter);
//app.use('/manager', managerRouter);
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)()); // Usa el middleware cors para habilitar CORS
// Configure JSON parser for urlencoded request
app.use(body_parser_1.default.urlencoded({ extended: false }));
//import clientRouter from './routes/Client-routes';
const Manager_routes_1 = __importDefault(require("./routes/Manager-routes"));
const Manager_tarjets_routes_1 = __importDefault(require("./routes/Manager-tarjets-routes"));
const Manager_see_moore_router_1 = __importDefault(require("./routes/Manager-see-moore-router"));
//app.use('/client', clientRouter);
app.use('/manager', Manager_routes_1.default);
app.use('/managerTarjets', Manager_tarjets_routes_1.default);
app.use('/managerSeeMoore', Manager_see_moore_router_1.default);
// Base URL
app.get("/", (req, res) => {
    res.send("GearShift Car Rentals Backend");
});
app.listen(port, () => {
    console.log(`Server running on port ${port}!`);
});
//# sourceMappingURL=index.js.map