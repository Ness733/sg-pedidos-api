import itemPedido from "./itemPedido.js";
import { StatusCodes, getReasonPhrase } from "http-status-codes";

export async function getItems(req, res) {
	try {
		const items = await itemPedido.findAll();
		res.status(200).json(items);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
			error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
		});
	}
}

export async function getItem(req, res) {
	try {
		const itemId = parseInt(req.params.id);
		const item = await itemPedido.findByPk(itemId);

		if (!item) {
			return res.status(204).json("El item solicitado no existe.");
		}
		res.status(200).json(item);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
			error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
		});
	}
}

export async function saveItem(req, res) {
	try {
		const newItem = new itemPedido(req.body);
		await newItem.save();
		res.status(201).json(StatusCodes.CREATED);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
			error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
		});
	}
}

export async function editItem(req, res) {
	try {
		const itemId = parseInt(req.params.id);
		const item = await itemPedido.findByPk(itemId);

		if (!item) {
			return res.status(204).json("El item solicitado no existe.");
		}

		await item.update(req.body);
		res.status(201).json(StatusCodes.CREATED);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
			error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
		});
	}
}

export async function deleteItem(req, res) {
	try {
		const itemId = parseInt(req.params.id);
		const item = await itemPedido.findByPk(itemId);

		if (!item) {
			return res.status(204).json("El item solicitado no existe.");
		}

		await item.destroy();
		res.status(200).json(StatusCodes.OK);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
			error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
		});
	}
}
