import { Router } from "express";
import { GetAllDoctors } from "./counsultingRoom.controller.js";

export const counsultingRoom = Router();

counsultingRoom.get("/", GetAllDoctors);
