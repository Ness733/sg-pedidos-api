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

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
	res.header(
		"Access-Control-Allow-Origin",
		"https://nrdev.online",
		"http://localhost:3000",
		"http://localhost:5173",
		"https://rosalesnestor-dev.vercel.app",
		"http://192.168.1.101:5173/",
		"https://6n842j39-5173.brs.devtunnels.ms/"
	);
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

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`App listening on http://localhost:${port}`);
});
