import express, { Request, Response, NextFunction } from "express";
import http from "http";
import dotenv from "dotenv";
import uuid from "node-uuid";
import morgan from "morgan";
const sockets = require("socket.io");
import { socket } from "./sockets/sockets.config";
//configuración variables de entorno
dotenv.config();
//conexión a base de datos
import "./db/Database";
//creación de servidor
export const app = express();
export const server = http.createServer(app);
//websockets
const io = sockets(server);
socket(io);
//puerto
app.set("port", Number(process.env.PORT) || 3001);
//configuraciones de servidor
app.disable("x-powered-by");
app.use(express.json());
//middlewares
// Definir el token personalizado "id" para morgan
morgan.token("id", (req: any) => req.id);
// Configurar middleware de morgan
app.use(assignId);
app.use(
  morgan(":id :method :url :status :response-time ms - :res[content-length]")
);
//rutas
app.get("/", (req: Request, res: Response) => {
  res.send("Server ProGestion v1");
});

function assignId(req: any, res: Response, next: NextFunction) {
  req.id = uuid.v4();
  next();
}
