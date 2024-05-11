import express from "express";

const pedidoRouter = express.Router();

import {
	getPedidos,
	getPedido,
	savePedido,
	editPedido,
	deletePedido,
} from "./pedido_controller.js";

pedidoRouter.get("/pedidos", getPedidos);
pedidoRouter.get("/pedidos/:id", getPedido);
pedidoRouter.post("/pedidos", savePedido);
pedidoRouter.patch("/pedidos/:id", editPedido);
pedidoRouter.delete("/pedidos/:id", deletePedido);

export default pedidoRouter;
