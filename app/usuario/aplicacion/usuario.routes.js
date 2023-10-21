import { Router } from "express";
import { getAllUsers } from "../infraestructura/usuario.js";

const usuarioRoute = Router();

usuarioRoute.get('/',getAllUsers)

export default usuarioRoute