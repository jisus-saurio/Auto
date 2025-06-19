import express from "express";
import tasksRoutes from "./src/routes/tasks.js";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";

// Creo una constante que es igual a la libreria que importé
const app = express();

// Que acepte datos en json
app.use(express.json());
// Para que postman guarde el token en una cookie
app.use(cookieParser());

// Documentación Swagger
const swaggerDocument = JSON.parse(
  fs.readFileSync(path.resolve("./Bryan.json"), "utf8")
);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Definir las rutas de las funciones que tendrá la página web
app.use("/api/tasks", tasksRoutes);

// Exporto la constante para poder usar express en otros archivos
export default app;