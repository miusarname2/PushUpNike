import { Router } from "express";
import versionApi from "express-routes-versioning";
import { limitGrt } from "../../controller/helpers/limit.controller.js";
import { deleteUsers,getUserMethod,getUsersMethod,postCreateUser,putUpdatedUser } from "../user.controller.js";

export const usuarios = Router()
const version = versionApi();

usuarios.get('/',limitGrt(),getUsersMethod)
usuarios.delete('/',limitGrt(),deleteUsers)
usuarios.post('/',limitGrt(),postCreateUser)
usuarios.put('/',limitGrt(),putUpdatedUser)
usuarios.get('/byOne',limitGrt(),getUserMethod)