import express from "express";
import tasksRoutes from "./src/routes/tasks.js";
import cookieParser from "cookie-parser";

// Inicializar express
const app = express();

// Middleware para aceptar datos en JSON
app.use(express.json());
// Middleware para cookies
app.use(cookieParser());

app.use("/api/tasks", tasksRoutes);

// Exportar app
export default app;