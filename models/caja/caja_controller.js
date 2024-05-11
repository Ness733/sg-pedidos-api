import Caja from "./caja.js";
import { StatusCodes, getReasonPhrase } from "http-status-codes";

export async function getCajas(req, res) {
	try {
		const cajas = await Caja.findAll();
		res.status(200).json(cajas);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
			error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
		});
	}
}

export async function getCaja(req, res) {
	try {
		const cajaId = parseInt(req.params.id);
		const caja = await Caja.findByPk(cajaId);
		res.status(200).json(caja);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
			error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
		});
	}
}

export async function saveCaja(req, res) {
	try {
		const newCaja = new Caja(req.body);
		await newCaja.save();
		res.status(201).json(StatusCodes.CREATED);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
			error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
		});
	}
}

export async function editCaja(req, res) {
	try {
		const cajaId = parseInt(req.params.id);
		const caja = await Caja.findByPk(cajaId);

		if (!caja) {
			return res.status(204).json("La caja solicitada no existe.");
		}

		await caja.update(req.body);
		res.status(201).json(StatusCodes.CREATED);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
			error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
		});
	}
}

export async function deleteCaja(req, res) {
	try {
		const cajaId = parseInt(req.params.id);
		const caja = await Caja.findByPk(cajaId);

		if (!caja) {
			return res.status(204).json("La caja solicitada no existe.");
		}
		await caja.destroy();
		res.status(200).json(StatusCodes.OK);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
			error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
		});
	}
}
