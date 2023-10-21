import { con } from "../../../helpers/connection/atlas.js";

const db = await con();
const usuario = db.collection("users");

export const nextMedicalAppointment = async (id) =>
  await usuario
    .aggregate([
      {
        $match: { _id: id },
      },
      {
        $project: {
          _id: 0,
          quotes: {
            $filter: {
              input: "$quotes",
              as: "quote",
              cond: { $eq: ["$$quote.code", 1] },
            },
          },
        },
      },
      { $unwind: "$quotes" },
    ])
    .toArray();

export const Specify = async () => await usuario.find().toArray();
