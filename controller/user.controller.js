import { con } from "./conectdb.controller.js";
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

export function getUserInAlphabeticalOrder(req, res) {
  let resposes = allUsers();
  res.status(200).json({ status: 200, responses: resposes });
  return resposes;
}

export function getNextDoctorsAppointments(req, res) {
  let resposes = getNextDoctorsAppointment(req.params.id);
  res.status(200).json({ status: 200, responses: resposes });
  return resposes;
}

export function createUsers(req, res) {
  let resposes = createUser(req.body);
  res.status(200).json({ status: 200, responses: resposes });
  return resposes;
}

