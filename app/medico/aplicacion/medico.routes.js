import { Router } from "express";
import { getAllMedicos,getEspecilidadMedico } from "../infraestructura/medico.js";

const medico = Router();

medico.get('/especilidad',getEspecilidadMedico)
medico.get('/',getAllMedicos)

export default medico