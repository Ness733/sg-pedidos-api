import express from "express";

const itemPedidoRouter = express.Router();

import {
	getItems,
	getItem,
	saveItem,
	editItem,
	deleteItem,
} from "./itemPedido_controller.js";

itemPedidoRouter.get("/items_pedido", getItems);
itemPedidoRouter.get("/items_pedido/:id", getItem);
itemPedidoRouter.post("/items_pedido", saveItem);
itemPedidoRouter.patch("/items_pedido/:id", editItem);
itemPedidoRouter.delete("/items_pedido/:id", deleteItem);

export default itemPedidoRouter;
