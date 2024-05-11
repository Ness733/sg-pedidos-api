import { Pedido, itemPedido, Vianda, Usuarios } from "../index.js";
import { StatusCodes, getReasonPhrase } from "http-status-codes";

export async function getPedidos(req, res) {
	try {
		const pedidos = await Pedido.findAll({
			include: [
				{
					model: itemPedido,
					include: [
						{
							model: Vianda,
						},
					],
				},
				{
					model: Usuarios,
				},
			],
		});
		res.status(200).json(pedidos);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
			error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
		});
	}
}

export async function getPedido(req, res) {
	const montoTotal = (item) => {
		total = 0;
		for (let i = 0; i < item.length; i++) {
			total =
				total + item[i].dataValues.precio * item[i].dataValues.cantidad;
		}
		item.dataValues.total = total;
	};

	try {
		const pedidoId = parseInt(req.params.id);
		const pedido = await Pedido.findAll({
			where: { id: pedidoId },
			include: [
				{
					model: itemPedido,
					include: [
						{
							model: Vianda,
						},
					],
				},
				{
					model: Usuarios,
				},
			],
		});
		res.status(200).json(pedido);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
			error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
		});
	}
}

export async function savePedido(req, res) {
	try {
		const newPedido = new Pedido(req.body);
		await newPedido.save();
		res.status(201).json(StatusCodes.CREATED);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
			error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
		});
	}
}

export async function editPedido(req, res) {
	try {
		const pedidoId = parseInt(req.params.id);
		const pedido = await Pedido.findByPk(pedidoId);

		if (!pedido) {
			return res.status(204).json("El pedido solicitado no existe.");
		}

		await pedido.update(req.body);
		res.status(201).json(StatusCodes.CREATED);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
			error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
		});
	}
}

export async function deletePedido(req, res) {
	try {
		const pedidoId = parseInt(req.params.id);
		const pedido = await Pedido.findByPk(pedidoId);

		if (!pedido) {
			return res.status(204).json("El pedido solicitado no existe.");
		}

		await pedido.destroy();
		res.status(200).json(StatusCodes.OK);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
			error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
		});
	}
}
