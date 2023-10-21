import { con } from "../../../helpers/connection/atlas.js";
const db = await con();
const cita = db.collection('medico');

export const getEspecilidadMedico = async (req, res) => {
  const db = await con();
  const speciality = req.query.speciality.toLowerCase();
  const usuario = db.collection("doctors");
  const result = await usuario
    .find({ speciality })
    .project({ consultingRoom: 0 })
    .toArray();
  res.send(result);
};

export const getAllMedicos = async (req, res) => {
  const db = await con();
  const usuario = db.collection("doctors");
  const result = await usuario.find().toArray();
  res.send(result);
};
