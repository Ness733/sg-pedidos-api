import express from "express";

const usuariosRouter = express.Router();

import {
	getUsuarios,
	getUsuario,
	saveUsuario,
	editUsuario,
	deleteUsuario,
} from "./usuarios_controller.js";

usuariosRouter.get("/usuarios", getUsuarios);
usuariosRouter.get("/usuarios/:id", getUsuario);
usuariosRouter.post("/usuarios", saveUsuario);
usuariosRouter.patch("/usuarios/:id", editUsuario);
usuariosRouter.delete("/usuarios/:id", deleteUsuario);

export default usuariosRouter;
