import { body } from "express-validator";

export const usuarioDTO = [
  body("names")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isObject()
    .withMessage("El nombre debe ser de tipo Object"),
  body("phone")
    .notEmpty()
    .withMessage("El telefono es obligatorio")
    .isString()
    .withMessage("El telefono debe ser de tipo string")
    .matches(/^[0-9]{10}$/)
    .withMessage("El telefono debe tener 10 dígitos"),
  body("address")
    .notEmpty()
    .withMessage("La direccion es obligatoria")
    .isString()
    .withMessage("La direccion debe ser de tipo string"),
  body("email")
    .isString()
    .withMessage("El email debe ser de tipo string")
    .isEmail()
    .withMessage("El email debe tener un formato válido"),
  body("quotes")
    .notEmpty()
    .withMessage("El tipodoc es obligatorio")
    .isObject()
    .withMessage("El tipodoc debe ser de tipo Object"),
  body("genre")
    .optional()
    .isObject()
    .withMessage("El genero debe ser de tipo string"),
  body("attendant")
    .optional()
    .isObject()
    .withMessage("El acudiente debe ser un número entero"),
];