import { Router } from "express";
import { GetDoctorbySpeciality } from "./doctor.controller.js";

export const doctors = Router();

doctors.get('/',GetDoctorbySpeciality)