import {
  getNextDoctorsAppointment,
  allUsers,
  createUser,
} from "../infraestructura/user.js";

export async function getUserInAlphabeticalOrder(req, res) {
  let resposes = await allUsers();
  res.status(200).json({ status: 200, responses: resposes });
  return resposes;
}

export async function getNextDoctorsAppointments(req, res) {
  let resposes = await getNextDoctorsAppointment(req.params.id);
  res.status(200).json({ status: 200, responses: resposes });
  return resposes;
}

export async function createUsers(req, res) {
  let resposes =  await createUser(req.body);
  res.status(200).json({ status: 200, responses: resposes });
  return resposes;
}
