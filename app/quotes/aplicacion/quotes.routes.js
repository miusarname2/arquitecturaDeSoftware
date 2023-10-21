import { Router } from "express";
import { GetNextMedicalAppointment,GetSpecify } from "./quotes.controller.js";

export const quotes = Router();

quotes.get("/next/:id",GetNextMedicalAppointment);

quotes.get("/specify",GetSpecify);
