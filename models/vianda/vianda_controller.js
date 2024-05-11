import Vianda from "./vianda.js";

import { StatusCodes, getReasonPhrase } from "http-status-codes";

export async function getViandas(req, res) {
	try {
		const viandas = await Vianda.findAll();
		res.status(200).json(viandas);
	} catch (error) {
		res.status(204).json(StatusCodes.NO_CONTENT);
	}
}

export async function getVianda(req, res) {
	try {
		const viandaId = parseInt(req.params.id);
		const vianda = await Vianda.findByPk(viandaId);
		res.status(200).json(vianda);
	} catch (error) {
		res.status(204).json(StatusCodes.NO_CONTENT);
	}
}

export async function saveVianda(req, res) {
	try {
		const nuevaVianda = new Vianda(req.body);
		await nuevaVianda.save();
		res.status(201).json(StatusCodes.CREATED);
	} catch (error) {
		res.status(204).json(StatusCodes.NO_CONTENT);
	}
}

export async function editVianda(req, res) {
	try {
		const viandaId = parseInt(req.params.id);
		const vianda = await Vianda.findByPk(viandaId);

		if (!vianda) {
			return res.status(204).json(StatusCodes.NO_CONTENT);
		}

		await vianda.update(req.body);
	} catch (error) {
		res.status(204).json(StatusCodes.NO_CONTENT);
	}
}

export async function deleteVianda(req, res) {
	try {
		const viandaId = parseInt(req.params.id);
		const vianda = await Vianda.findByPk(viandaId);
		await vianda.destroy();
		res.status(200).json(StatusCodes.OK);
	} catch (error) {
		res.status(204).json(StatusCodes.NO_CONTENT);
	}
}
