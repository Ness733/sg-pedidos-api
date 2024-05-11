import { DataTypes } from "sequelize";

import db from "../../db/connection.js";

const Usuarios = db.define(
	"usuarios",
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		nombre: { type: DataTypes.STRING },
		apellido: { type: DataTypes.STRING },
		telefono: { type: DataTypes.STRING },
		direccion: { type: DataTypes.STRING },
		detalle_usuario: { type: DataTypes.STRING },
		zona: { type: DataTypes.STRING },
	},
	{
		tableName: "usuarios",
		timestamps: false,
	}
);

export default Usuarios;
