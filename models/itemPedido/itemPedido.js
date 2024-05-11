import { DataTypes } from "sequelize";
import db from "../../db/connection.js";

const itemPedido = db.define(
	"item_pedido",
	{
		id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
		id_vianda: { type: DataTypes.INTEGER },
		id_pedido: { type: DataTypes.INTEGER },
		detalle_pedido: { type: DataTypes.STRING },
		cantidad: { type: DataTypes.INTEGER },
	},
	{
		tableName: "item_pedido",
		timestamps: false,
	}
);

export default itemPedido;
