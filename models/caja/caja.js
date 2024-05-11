import { DataTypes } from "sequelize";
import db from "../../db/connection.js";

const Caja = db.define(
	"caja",
	{
		id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
		id_pedido: { type: DataTypes.INTEGER },
		monto_pedido: { type: DataTypes.INTEGER },
		detalle_pedido: { type: DataTypes.INTEGER },
		createdAt: { type: DataTypes.TIME },
	},
	{
		tableName: "caja",
		timestamps: true,
	}
);

export default Caja;
