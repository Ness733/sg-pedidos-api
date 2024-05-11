import express from "express";

const viandaRouter = express.Router();

import {
	getViandas,
	getVianda,
	saveVianda,
	editVianda,
	deleteVianda,
} from "./vianda_controller.js";

viandaRouter.get("/viandas", getViandas);
viandaRouter.get("/viandas/:id", getVianda);
viandaRouter.post("/viandas", saveVianda);
viandaRouter.patch("/viandas/:id", editVianda);
viandaRouter.delete("/viandas/:id", deleteVianda);

export default viandaRouter;
