import {
    getNextDoctorsAppointment,
    allUsers,
    createUser,
  } from "../infraestructura/user.js";
  
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

