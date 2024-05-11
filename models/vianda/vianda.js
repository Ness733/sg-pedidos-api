import { DataTypes } from "sequelize";
import db from "../../db/connection.js";

const Vianda = db.define(
	"vianda",
	{
		id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
		nombre: { type: DataTypes.STRING },
		precio: { type: DataTypes.INTEGER },
	},
	{
		tableName: "vianda",
		timestamps: false,
	}
);

export default Vianda;
