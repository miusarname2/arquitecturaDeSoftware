import { Router } from "express";
import {
  createUsers,
  getNextDoctorsAppointments,
  getUserInAlphabeticalOrder,
} from "./user.controller.js";

const users = Router();

users.get("/", getUserInAlphabeticalOrder);

users.post("/", createUsers);

users.get("/doctor/:id", getNextDoctorsAppointments);
