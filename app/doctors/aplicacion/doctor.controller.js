import { GetSpecialityDoc } from "../infraestructura/doctor.js";

export async function GetDoctorbySpeciality(req, res) {
  if (!req.params.value)
    return res
      .status(404)
      .json({ status: 404, message: "Especialidad not found" });
  try {
    const speciality = req.query.speciality.toLowerCase();
    let responseToUser = await GetSpecialityDoc(speciality);
    res.status(200).json({ status: 200, result: responseToUser });
    return responseToUser;
  } catch (error) {
    res.status(404).json({ status: 404, message: "speciality not found" });
    return { status: 404, result: "not found or Error", Error: error };
  }
}
