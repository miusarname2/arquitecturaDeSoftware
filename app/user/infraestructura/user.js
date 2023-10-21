import { con } from "../../../helpers/connection/atlas.js";

const db = await con();
const usuario = db.collection("users");

export const allUsers = async () =>
  await usuario
    .find()
    .project({ attendant: 0, quotes: 0 })
    .sort({ "names.name": 1 })
    .toArray();

export const createUser = async (userToInsert) => {
  try {
    return await usuario.insertOne(userToInsert);
  } catch (error) {
    return { error: error, completed: false };
  }
};

export const getNextDoctorsAppointment = async (id) =>
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
