// Dependencies
import db from "./db/connection.js";
import express from "express";
import cors from "cors";

// Routers
import usuariosRouter from "./models/usuarios/usuarios_routes.js";
import viandaRouter from "./models/vianda/vianda_routes.js";
import pedidoRouter from "./models/pedido/pedido_routes.js";
import itemPedidoRouter from "./models/itemPedido/itemPedido_routes.js";
import cajaRouter from "./models/caja/caja_routes.js";

const app = express();

const host = process.env.HOST;
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

	next();
});

app.get("/", (req, res) => {
	res.json("API Pedidos - Sano Gusto");
});

// Routes
app.use("/", usuariosRouter);
app.use("/", viandaRouter);
app.use("/", pedidoRouter);
app.use("/", cajaRouter);
app.use("/", itemPedidoRouter);

try {
	await db.authenticate();
	console.log("-- Conexión Establecida --");
} catch (error) {
	console.log("Algo salió mal", error);
}

app.listen(port, () => {
	console.log(`App listening on http://${host}:${port}`);
});
