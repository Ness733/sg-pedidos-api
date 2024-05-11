import express from "express";

const cajaRouter = express.Router();

import {
	getCajas,
	getCaja,
	saveCaja,
	editCaja,
	deleteCaja,
} from "./caja_controller.js";

cajaRouter.get("/cajas", getCajas);
cajaRouter.get("/cajas/:id", getCaja);
cajaRouter.post("/cajas/", saveCaja);
cajaRouter.patch("/cajas/:id", editCaja);
cajaRouter.delete("/cajas/:id", deleteCaja);

export default cajaRouter;
