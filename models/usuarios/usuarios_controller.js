import Usuario from "./usuarios.js";

import { StatusCodes, getReasonPhrase } from "http-status-codes";

export async function getUsuarios(req, res) {
	try {
		let usuarios = await Usuario.findAll();
		res.status(200).json(usuarios);
	} catch (error) {
		res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
			message: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
			error: JSON.stringify(error, Object.getOwnPropertyNames(error)),
		});
	}
}

export async function getUsuario(req, res) {
	try {
		const usuarioId = parseInt(req.params.id);
		const usuario = await Usuario.findByPk(usuarioId);
		res.status(200).json(usuario);
	} catch (error) {
		res.status(204).json({
			error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
		});
	}
}

export async function saveUsuario(req, res) {
	try {
		const nuevoUsuario = new Usuario(req.body);
		await nuevoUsuario.save();
		res.status(201).json(StatusCodes.CREATED);
	} catch (error) {
		res.status(204).json({ error });
	}
}

export async function editUsuario(req, res) {
	try {
		const usuarioId = parseInt(req.params.id);
		const usuario = await Usuario.findByPk(usuarioId);

		if (!usuario) {
			return res.status(204).json(StatusCodes.NO_CONTENT);
		}
		await usuario.update(req.body);
		res.status(200).json(StatusCodes.OK);
	} catch (error) {
		res.status(204).json(StatusCodes.NO_CONTENT);
	}
}

export async function deleteUsuario(req, res) {
	try {
		const usuarioId = parseInt(req.params.id);
		const usuario = await Usuario.findByPk(usuarioId);

		if (!usuario) {
			return res.status(204).json(StatusCodes.NO_CONTENT);
		}
		await usuario.destroy();
		res.status(200).json(StatusCodes.OK);
	} catch (error) {
		console.log(error);
		res.status(204).json(error);
	}
}
