import { body } from "express-validator";

export const medicoDTO = [
  body("especialidad")
    .notEmpty()
    .withMessage("El especialidad es obligatorio")
    .isString()
    .withMessage("EL especialidad debe ser de tipo string")
];
