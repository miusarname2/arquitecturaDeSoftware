import { Alldoctors } from "../infraestructura/counsultingRoom.js";

export async function GetAllDoctors(req, res) {
  let responses = await Alldoctors();
  res.status(200).json({ status: 200, message: responses });
  return responses;
}
