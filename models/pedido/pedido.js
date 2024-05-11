import { DataTypes } from "sequelize";
import db from "../../db/connection.js";

const Pedido = db.define(
	"pedido",
	{
		id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
		id_users: { type: DataTypes.INTEGER },
		detalle_pedido: { type: DataTypes.STRING },
		forma_pago: { type: DataTypes.STRING },
		dia: { type: DataTypes.BOOLEAN },
		semana: { type: DataTypes.BOOLEAN },
		estado: {
			type: DataTypes.ENUM,
			values: ["esperando", "en camino", "entregado", "cancelado"],
		},
		createdAt: { type: DataTypes.TIME },
	},
	{
		tableName: "pedido",
		timestamps: true,
		updatedAt: false,
	}
);

export default Pedido;
