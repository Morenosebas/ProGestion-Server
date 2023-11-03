import express from "express";
import type { Request, Response, NextFunction } from "express";
import http from "http";
import dotenv from "dotenv";
import uuid from "node-uuid";
import morgan from "morgan";
import passport from "passport";
import session from "express-session";
const sockets = require("socket.io");
import { socket } from "@sockets/sockets.config";
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

//middlewares
// Definir el token personalizado "id" para morgan
morgan.token("id", (req: any) => req.id);
// Configurar middleware de morgan
app.use(assignId);
app.use(
  morgan(":id :method :url :status :response-time ms - :res[content-length]")
);

//configuraciones de servidor
app.disable("x-powered-by");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);
//passport
import "./controllers/user/passport";
app.use(passport.initialize());
app.use(passport.session());
app.use((req: any, res: Response, next: NextFunction) => {
  app.locals.user = req.user;
  next();
});
//rutas
app.use("/api/v1", require("./routes/User.Routes"));
app.use("/api/v1/company", require("./routes/Company.Routes"));
app.get("/", (req: Request, res: Response) => {
  res.send("Server ProGestion v1");
});

function assignId(req: any, res: Response, next: NextFunction) {
  req.id = uuid.v4();
  next();
}
