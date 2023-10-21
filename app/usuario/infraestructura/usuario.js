import { con } from "../../../helpers/connection/atlas.js";

const db = await con();
const usuario = await db.collection("usuario");

export const getAllUsers = async (req, res) => {
  const db = await con();
  const usuario = db.collection("users");
  const result = await usuario.find().toArray();
  res.send(result);
};
