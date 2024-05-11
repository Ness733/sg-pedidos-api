import Pedido from "./pedido/pedido.js";
import Usuarios from "./usuarios/usuarios.js";
import itemPedido from "./itemPedido/itemPedido.js";
import Vianda from "./vianda/vianda.js";
import Caja from "./caja/caja.js";

// Usuarios
Usuarios.hasMany(Pedido, { foreignKey: "id_users" });
Pedido.belongsTo(Usuarios, { foreignKey: "id_users" });
Pedido.hasMany(itemPedido, {
	foreignKey: "id_pedido",
	onDelete: "cascade",
	hooks: true,
});

itemPedido.belongsTo(Pedido, { foreignKey: "id_pedido" });

// Vianda
itemPedido.belongsTo(Vianda, { foreignKey: "id_vianda" });

export { Pedido, Usuarios, itemPedido, Vianda };
