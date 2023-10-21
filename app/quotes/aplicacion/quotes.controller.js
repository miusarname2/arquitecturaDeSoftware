import { nextMedicalAppointment,Specify } from "../infraestructura/quotes.js";

export function GetNextMedicalAppointment(req, res) {
  if (!req.params.value)
    return res
      .status(404)
      .json({ status: 404, message: "bad request, please try again..." });
  try {
    const idUser = req.params.id;
    const response = nextMedicalAppointment(idUser);
    if (response.length == 0)
      return res.json({ msg: "no tiene citas proximas" });
    res.status(200).json({ status: 200, response: response });
    return response;
  } catch (error) {}
}

export function GetSpecify(req,res){
  let responseToUser = Specify()
  res.status(200).json({ status: 200, response: responseToUser});
  return responseToUser
}
