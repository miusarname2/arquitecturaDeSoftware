import { con } from "../../../helpers/connection/atlas.js";

const db = await con();
const usuario = db.collection("doctors");

export const GetSpecialityDoc = async (speciality) =>
  await usuario.find({ speciality }).project({ consultingRoom: 0 }).toArray();
